

const paths = {
    generate: true,
    assets: ['assets/**/*', 'src/**/*.json'],
    typescript: 'src/**/*.ts',
    pug: ['src/**/*.pug'],
    styles: ['themes/main.scss'],
    exportSrv: 'export/',
    dest: 'dist',
    extraComponents:  '../aire/dist/**/*.json',
    components: '**/*.json',
    metadata: ['assets/**/*', 'src/**/*.json'],
    allStyles: ['themes/**/*.scss', '../aire/dist/**/*.css'],
    createScssInclusions: utils => {

        let pkg = utils.locatePackage('aire'),
            // pkgDescriptor = utils.readJson(`${pkg}/package.json`),
            uikit = utils.locatePackage('uikit'),
            fontawesome = utils.locatePackage('font-awesome'),
            fontawesomedir = `${utils.fs.realpathSync(fontawesome)}/scss`,
            aireDir = utils.fs.realpathSync(pkg),
            aireRoot = utils.parentDirectory(aireDir),
            resolved = `${aireRoot}/${uikit}/src/scss`,
            aireScss = `${aireDir}/scss`;

        let p =`${utils.source('uikit')}/scss`;
        resolveFonts(utils);
        return [resolved, aireScss, fontawesomedir, p]
    }
};


const resolveFonts = (utils) => {
    let fontawesome = utils.locatePackage('font-awesome'),
        fontawesomedir = `${utils.fs.realpathSync(fontawesome)}/**/fonts/**/*`;
    paths.metadata.push(fontawesomedir);
};
module.exports = paths;