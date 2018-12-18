//================================================================================
// Extract dependency versions
//================================================================================

let root = process.cwd();
module.paths.push(`${root}/node_modules`);
const pkg = require(root + '/package.json'),
    fs = require('fs'),
    log = require('gulp-util'),
    {join} = require('path'),
    path = require('path');


const readJson = (path) => {
    if(fs.lstatSync(path).isFile()) {
        let iostream = fs.readFileSync(path);
        return JSON.parse(iostream);
    }
    throw new Error(`Path: ${path} does not exist or is not a file`);
};

//================================================================================
// dependencyVersion: compute the dependencyversion sans semver of a variable
//================================================================================


const dependencyVersion = (version, dev) => {

    let j = pkg.jspm,
        dep = j.dependencies,
        devdep = j.devDependencies,
        versionmap = dev ? devdep : dep,
        vstring = versionmap[version],
        parts = vstring.split('@'),
        part = parts.pop().replace(/\^/, "");
    return part;
};


const source = (dep, location) => {
    return `${pathTo(dep, location)}/src`
};


//================================================================================
// pathTo: compute the location of the dependency--only works for non-semver deps
//================================================================================


const pathTo = (dep, location) => {
    let s=  `jspm_packages/${location ? location : 'npm'}/${dep}@${dependencyVersion(dep)}`
    console.info(`Resolved path: ${s}`);
    return s;
};


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


const locatePackageIn = (packageFile, name) => {
    console.info(`Resolving package: ${name}`);
    let jspm = packageFile.jspm,
        dev = false,
        dep = jspm.dependencies,
        devdep = jspm.devDependencies,
        deps = dev ? devdep : dep,
        actualDependency = deps[name].replace('^', ''),
        directory = actualDependency.split(':').join(path.sep),
        result = `jspm_packages/${directory}`;
    console.info(`Successfully resolved package: ${name} at ${result}`);
    return result;
};

const parentDirectory = p => {
    let segments = p.split(path.sep);
    segments.pop();
    return segments.join(path.sep);
};

const reparent = p => {
    let d = p.dirname,
    segs = d.split(path.sep);
    if(segs.length > 1) {
        segs.shift();
    }
    p.dirname = segs.join(path.sep);
    log.log(`Reparenting ${d} -> ${p.dirname}`);
    return p;
};

const locatePackage = name => {
    return locatePackageIn(pkg, name);
};

const fileName = dir => path.dirname(dir).split(path.sep).pop();

//================================================================================
// Module exports
//================================================================================

exports.ls = ls;
exports.dir = dir;
exports.file = file;
exports.fileName = fileName;
exports.reparent = reparent;
exports.locatePackageIn = locatePackageIn;
exports.locatePackage = locatePackage;
exports.parentDirectory = parentDirectory;
exports.fs = fs;
exports.readJson = readJson;
exports.source = source;
exports.pathTo = pathTo;
exports.version = dependencyVersion;
