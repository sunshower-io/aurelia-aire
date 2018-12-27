/**'
 * Register aliases (configured in package.json/_moduleAliases
 */
// // require('module-alias/register');
//
// const gulp = require('gulp'),
//     tasks = requireDirectory('../build/tasks');

module.paths.push(`${process.cwd()}/node_modules`);

const
    gulp = require('gulp'),
    requireDirectory = require('require-dir'),
    aireBuild = require('../../aire-build/src/main/tasks/build.js')(gulp);
//
// const gulp = require('gulp');

// const gulp = require('gulp'),
//     aire = require('@sunshower/aire-build');
//
//
// const generateDocs = (done) => {
//
// };
//
// gulp.task('aire:generate-docs', generateDocs);

