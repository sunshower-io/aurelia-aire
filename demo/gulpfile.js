/**'
 * Register aliases (configured in package.json/_moduleAliases
 */
// require('module-alias/register');


module.paths.push(`${process.cwd()}/node_modules`);
const gulp = require('gulp'),
    requireDirectory = require('require-dir'),
    tasks = requireDirectory('../build/tasks');


exports.default = () => {
    console.log(tasks);
};
