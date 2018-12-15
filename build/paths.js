module.paths.push(`${process.cwd()}/node_modules`);

const fs = require('fs'),
    globalPaths = {
        assets: ['assets/**/*', 'src/**/*.json'],
        typescript: 'src/**/*.ts',
        pug: ['src/**/*.pug'],
        styles: ['themes/main.scss'],
        dest: 'dist',
        output: 'dist',
        allStyles: ['themes/**/*.scss']
        // scssInclude:  {
        //     module: 'aire',
        //     location: 'local'
        // }

    };

const mergePaths = () => {
    let cwd = process.cwd(),
        localFilePath = `${cwd}/build/paths.js`,
        localFile = fs.lstatSync(localFilePath),
        contents = localFile && require(localFilePath);

    if (contents) {
        return Object.assign(globalPaths, contents);
    }
    return globalPaths;
};


module.exports = mergePaths();