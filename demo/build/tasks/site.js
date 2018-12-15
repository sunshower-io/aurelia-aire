
const pkg = require('@root/package.json'),
    gulp= require('gulp'),
    path = require('path'),
    fs = require('fs'),
    markdown = require('gulp-markdown-github-style'),
    { join } = require('path');

//================================================================================
// dir: determine if path refers to directory
//================================================================================


const file = source => fs.lstatSync(source).isFile();

const dir = source => fs.lstatSync(source).isDirectory();

//================================================================================
// ls: list all the files matching the predicate
//================================================================================



const ls = (d, f) => fs.readdirSync(d).map(name => join(d, name)).filter(f);

//================================================================================
// locate package: find a package from package.json
//================================================================================


const locatePackage = name => {
    console.info(`Resolving package: ${name}`);
    let jspm = pkg.jspm,
        dev = false,
        dep = jspm.dependencies,
        devdep = jspm.devDependencies,
        deps = dev ? devdep : dep,
        actualDependency = deps[name],
        directory = actualDependency.split(':').join(path.sep),
        result = `jspm_packages/${directory}`;
    console.info(`Successfully resolved package: ${name} at ${result}`);
    return result;
};

//================================================================================
// list all the components in Aire
//================================================================================


const parentDir = component => {
    let segments = component.path.split(path.sep);
    segments.pop();
    return segments.join(path.sep);
};


const fileName = dir => path.dirname(dir).split(path.sep).pop();

const listComponents = done => {
    console.info("Beginning Aire Site Generation");
    console.info("Resolving components...");
    let p = locatePackage('aire'),
        dirs = ls(p, dir),
        componentDirs = dirs.filter(t => fs.existsSync(`${t}/components.json`)),
        componentFiles = componentDirs.map(t => `${t}/components.json`),
        components = componentFiles.map(t => {
            console.info(`Resolved component file: ${t}`);
            let componentStream = fs.readFileSync(t),
                component = JSON.parse(componentStream);
            return {
                rawdir: fileName(t),
                path: t,
                data: component.components,
                descriptor: component
            }
        });
    console.info(`Resolved ${components.length} components`);
    return components;
};


const nameOf = f => f.split(path.sep).pop();

const constructHelp = (component, locales) => {
    let components = component.data;

    for(let locale of locales) {
        for(let c of components) {
            let directories = ls(path.resolve(locale, c.component.name), dir),
                files = directories.map(t => {
                    return {
                        root: t,
                        directory: nameOf(t),
                        help: ls(t, file).map(t => nameOf(t)),
                        example: ls(t, (u) => file(u) && u.endsWith('.html') || u.endsWith(".js")).map(t => nameOf(t))
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
            dirs = ls(helpDir, dir);
        return constructHelp(component, dirs);
    } catch(e) {
        console.log("No help directory found for component: " + component.rawdir);
    }
};



const doResolveHelp = (directory, name, descriptor, f, directories) => {
    let files = directory.help,
        exs = directory.example,
        mdfiles = files && files.map(t => path.resolve(directory.root, t)),
        examples = exs && exs.map(t => path.resolve(directory.root, t));
    if(mdfiles && mdfiles.length) {
        gulp.src(mdfiles).pipe(markdown()).pipe(gulp.dest(`dist/${name}/help/en/${directory.directory}`));
    }

    if(examples && examples.length) {
        gulp.src(examples).pipe(gulp.dest(`dist/${name}/help/en/${directory.directory}/ex`));
    }


};


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
            descriptor.push({
                name: name,
                locale: 'en',
                keywords: f.component.keywords,
                "widget-name": f.component["widget-name"],
                directories: directories.map(t => {delete root; return t;}),
            });
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
    console.log(`Successfully resolved and wrote ${descriptor.length} component descriptors`);
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

const generateData = async done => {
    let components = listComponents();
    generateNav(components);
    for(let component of components) {
        await generateComponent(component);
    }
    done();
};

gulp.task('aire:generate', generateData);


