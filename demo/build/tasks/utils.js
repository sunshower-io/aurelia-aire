//================================================================================
// Extract dependency versions
//================================================================================

const pkg = require('@root/package.json');

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
// Module exports
//================================================================================



exports.source = source;
exports.pathTo = pathTo;
exports.version = dependencyVersion;
