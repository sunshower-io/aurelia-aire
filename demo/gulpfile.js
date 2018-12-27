
module.paths.push(`${process.cwd()}/node_modules`);
const
    gulp = require('gulp'),
    requireDirectory = require('require-dir'),
    aireBuild = require('../../aire-build/src/main/tasks/build.js')(gulp);

