
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

    let jspm = pkg.jspm,
        dev = false,
        dep = jspm.dependencies,
        devdep = jspm.devDependencies,
        deps = dev ? devdep : dep,
        actualDependency = deps[name],
        directory = actualDependency.split(':').join(path.sep);

    return `jspm_packages/${directory}`;
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
    let p = locatePackage('aire'),
        dirs = ls(p, dir),
        componentDirs = dirs.filter(t => fs.existsSync(`${t}/components.json`)),
        componentFiles = componentDirs.map(t => `${t}/components.json`),
        components = componentFiles.map(t => {
            return {
                rawdir: fileName(t),
                path: t,
                data: JSON.parse(fs.readFileSync(t))
            }
        });
    return components;
};

const verifyHelpFile = (f) => {

};


const constructHelp = (component, locales) => {
    let components = component.data;

    for(let locale of locales) {
        for(let c of components) {
            let files = ls(path.resolve(locale, c.component.name), file);
            c.component.files = files;
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

const resolveHelp = component => {
    resolveLocales(component);
    let data = component.data,
        descriptor = [];
    for(let f of data) {
        let name = f.component.name,
            files = f.component.files;
        if(files) {
            gulp.src(files).pipe(markdown()).pipe(gulp.dest(`dist/${name}/help/en`));
            descriptor.push({
                name: name,
                locale: 'en',
                files: files.map(t => t.split(path.sep).pop())
            });
        }
    }
    fs.writeFileSync(`dist/${component.rawdir}/help.json`, JSON.stringify(descriptor, null, 2));
};



const generateComponent = async component => {
    copyComponent(component);
    resolveHelp(component);
};


const copyComponent = component => {
    gulp.src(['dist/lib/*.*']).pipe(gulp.dest(`dist/${component.rawdir}`))
};


const toRouteElement = component => {
    return component.data.map(t => {
        return {
            title: t.component.name,
            nav: true,
            route: component.rawdir,
            name: t.component.name,
            moduleId: `aire-demo/${component.rawdir}/doc-page.html`
        }
    });
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


