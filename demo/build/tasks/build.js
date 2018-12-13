const gulp = require('gulp'),
    paths = require('@build/paths.js'),
    pug = require('gulp-pug'),
    tsconfig = require('@root/tsconfig.json'),
    typescript = require('gulp-typescript'),
    project = typescript.createProject('tsconfig.json');


//================================================================================
// copy assets
//================================================================================


const copyAssets = (done) => {
    return gulp.src(paths.assets)
        .pipe(gulp.dest(paths.dest));
};


//================================================================================
// build typescript
//================================================================================



const build = () => {
    return gulp
        .src(paths.typescript)
        .pipe(project(typescript.reporter.fullReporter()))
        .pipe(gulp.dest('dist'));
};


//================================================================================
// build pug files
//================================================================================



const buildPug = () => {

    return gulp.src(paths.pug)
        .pipe(pug({

        })).pipe(gulp.dest('dist'));
};


//================================================================================
// task definitions
//================================================================================



gulp.task('build:pug', buildPug);
gulp.task('copy:assets', copyAssets);
gulp.task('build', gulp.parallel('build:pug', 'copy:assets', build));


module.exports = build;




// module.exports = build() {
//     return Promise.resolve();
// }

