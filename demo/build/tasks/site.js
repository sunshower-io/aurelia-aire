
const pkg = require('@root/package.json'),
    gulp= require('gulp'),
    path = require('path'),
    fs = require('fs'),
    markdown = require('gulp-markdown-github-style'),
    { join } = require('path');

//================================================================================
// dir: determine if path refers to directory
//================================================================================


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


const listComponents = done => {
    let p = locatePackage('aire'),
        dirs = ls(p, dir),
        componentDirs = dirs.filter(t => fs.existsSync(`${t}/components.json`)),
        componentFiles = componentDirs.map(t => `${t}/components.json`),
        components = componentFiles.map(t => {
            return {
                rawdir: path.dirname(t).split(path.sep).pop(),
                path: t,
                data: JSON.parse(fs.readFileSync(t))
            }
        });
    return components;
};

const verifyHelpFile = (f) => {

};

const resolveHelp = component => {
    let p = component.path,
        data = component.data,
        files = data.map(c => {
            return {
                dir: component.rawdir,
                helpfile: `${path.dirname(p)}/${c.help.file}`
            }
        });

    for(let f of files) {
        verifyHelpFile(f);
        console.log("Generating help file:" + f.helpfile);
        gulp.src(f.helpfile).pipe(markdown()).pipe(gulp.dest(`dist/${f.dir}`));
    }


};

const generateComponent = async component => {
    let path = component.path,
        data = component.data;

    resolveHelp(component);
};

const generateData = async done => {
    let components = listComponents();
    for(let component of components) {
        await generateComponent(component);
    }
    done();
};

gulp.task('aire:generate', generateData);


