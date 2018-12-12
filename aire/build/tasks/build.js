const gulp = require('gulp'),
    paths = require('@build/paths.js'),
    plumber = require('gulp-plumber'),
    debug = require('gulp-debug'),
    notify = require('gulp-notify'),
    tsconfig = require('@root/tsconfig.json'),
    typescript = require('gulp-typescript'),
    project = typescript.createProject('tsconfig.json');



// --
// Build-Typescript
// --

const build = () => {
    return gulp
        .src(paths.typescript)
        .pipe(project(typescript.reporter.fullReporter()))
        .pipe(gulp.dest('dist'));
};



gulp.task('build', build);


module.exports = build;




// module.exports = build() {
//     return Promise.resolve();
// }

