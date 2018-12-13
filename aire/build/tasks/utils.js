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


const source = (dep) => {
    return `${pathTo(dep)}/src`
};


//================================================================================
// pathTo: compute the location of the dependency--only works for non-semver deps
//================================================================================


const pathTo = (dep) => {
    return `jspm_packages/npm/${dep}@${dependencyVersion(dep)}`
};

//================================================================================
// Module exports
//================================================================================



exports.source = source;
exports.pathTo = pathTo;
exports.version = dependencyVersion;
