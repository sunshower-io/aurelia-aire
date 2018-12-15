const paths = {
    assets: ['assets/**/*', 'src/**/*.json'],
    typescript: 'src/**/*.ts',
    pug: ['src/**/*.pug'],
    styles: ['themes/main.scss'],
    dest: 'dist',
    metadata: ['assets/**/*', 'src/**/*.json'],
    createScssInclusions: utils => {

        let pkg = utils.locatePackage('aire'),
            pkgDescriptor = utils.readJson(`${pkg}/package.json`),
            uikit = utils.locatePackageIn(pkgDescriptor, 'uikit'),
            aireDir = utils.fs.realpathSync(pkg),
            aireRoot = utils.parentDirectory(aireDir),
            resolved = `${aireRoot}/${uikit}/src/scss`,
            aireScss = `${aireDir}/scss`;
        return [resolved, aireScss]
    }
};

module.exports = paths;