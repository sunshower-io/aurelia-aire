
module.paths.push(`${process.cwd()}/node_modules`);
const
    root = process.cwd(),
    pkg = require(root + '/package.json'),
    gulp= require('gulp'),
    path = require('path'),
    utils = require('./utils.js'),
    {file} = require('./utils.js'),
    fs = require('fs'),
    { join } = require('path');


//================================================================================
// list all the components in Aire
//================================================================================



const parentDir = component => utils.parentDirectory(component.path);



const listComponents = done => {
    console.info("Beginning Aire Site Generation");
    console.info("Resolving components...");
    let p = utils.locatePackage('aire'),
        dirs = utils.ls(p, utils.dir),
        componentDirs = dirs.filter(t => fs.existsSync(`${t}/components.json`)),
        componentFiles = componentDirs.map(t => `${t}/components.json`),
        components = componentFiles.map(t => {
            let componentStream = fs.readFileSync(t),
                component = JSON.parse(componentStream);
            return {
                rawdir: utils.fileName(t),
                path: t,
                data: component.components,
                descriptor: component
            }
        });
    return components;
};


const nameOf = f => f.split(path.sep).pop();

const constructHelp = (component, locales) => {
    let components = component.data;

    for(let locale of locales) {
        for(let c of components) {
            let directories = utils.ls(path.resolve(locale, c.component.name), utils.dir),
                files = directories.map(t => {
                    return {
                        root: t,
                        directory: nameOf(t),
                        help: utils.ls(t, file).map(t => nameOf(t)),
                        example: utils.ls(t,
                            (u) => utils.file(u) &&
                                u.endsWith('.html') ||
                                u.endsWith(".js")).map(t => nameOf(t))
                    }
                });
            c.component.directories = files;
        }
    }
    return component;
};

const resolveLocales = component => {
    try {
        let p = parentDir(component),
            helpDir = path.resolve(p, 'help'),
            dirs = utils.ls(helpDir, utils.dir);
        return constructHelp(component, dirs);
    } catch(e) {

        console.log("No help directory found for component: " + component.rawdir);
        throw e;
    }
};


//================================================================================
// Resolve actual help for individual component
//================================================================================


const doResolveHelp = (directory, name, descriptor, f, directories) => {
    let files = directory.help,
        exs = directory.example,
        mdfiles = files && files.map(t => path.resolve(directory.root, t)),
        examples = exs && exs.map(t => path.resolve(directory.root, t));
    if(mdfiles && mdfiles.length) {
        gulp.src(mdfiles).pipe(gulp.dest(`dist/${name}/help/en/${directory.directory}`));
    }

    if(examples && examples.length) {
        gulp.src(examples).pipe(gulp.dest(`dist/${name}/help/en/${directory.directory}/ex`));
    }


    descriptor.push({
        name: name,
        locale: 'en',
        keywords: f.component.keywords,
        "widget-name": f.component["widget-name"],
        directories: directories.map(t => {delete root; return t;}),
    });
};

//================================================================================
// resolveHelp
//================================================================================



const resolveHelp = component => {
    resolveLocales(component);
    let data = component.data,
        descriptor = [];
    for(let f of data) {
        let name = f.component.name,
            directories = f.component.directories;
        if(directories) {
            for(let directory of directories) {
                doResolveHelp(directory, name, descriptor, f, directories);
                delete directory.root;
            }
        }
    }
    let targetdir = `dist/${component.rawdir}`;
    if(!fs.existsSync(targetdir)) {
        fs.mkdirSync(targetdir);
    }
    let complete = {
        title: component.descriptor.title,
        description: component.descriptor.description,
        components: descriptor
    };
    fs.writeFileSync(`dist/${component.rawdir}/help.json`, JSON.stringify(complete, null, 2));
};



const generateComponent = async component => {
    copyComponent(component);
    resolveHelp(component);
};


const copyComponent = component => {
    gulp.src(['dist/lib/*.*']).pipe(gulp.dest(`dist/${component.rawdir}`))
};


const toRouteElement = component => {
    if(component && component.data) {
        return component.data.map(t => {
            return {
                title: t.component.name,
                nav: true,
                settings: {
                    category: t.component.category
                },
                route:  component.rawdir,
                name: t.component.name,
                moduleId: `aire-demo/${component.rawdir}/doc-page`
            }
        });
    }
    return [];

};

//================================================================================
// Generate route from component list
//================================================================================



const generateNav = (components) => {
    try {
        fs.unlinkSync("src/route/components.json");
    } catch(e) {
        console.log("route file: components.json not found.  Generating a new one...");
    }
    fs.writeFileSync("src/route/components.json", JSON.stringify(
        components.map(t => toRouteElement(t)).reduce((acc, val) => acc.concat(val)),
        null, 2
    ));
};





//================================================================================
// Actual aire:generate task
//================================================================================



const generateData = async done => {
    let components = listComponents();
    generateNav(components);
    for(let component of components) {
        await generateComponent(component);
    }
    done();
};


gulp.task('aire:generate', generateData);


