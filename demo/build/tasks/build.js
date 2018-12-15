const gulp = require('gulp'),
    paths = require('@build/paths.js'),
    pug = require('gulp-pug'),
    tsconfig = require('@root/tsconfig.json'),
    typescript = require('gulp-typescript'),
    scss = require('gulp-sass'),
    concat = require('gulp-concat'),
    project = typescript.createProject('tsconfig.json');


//================================================================================
// build scsss
//================================================================================

const buildScss = () => {
    return gulp.src(paths.styles)
        .pipe(scss({
            includePaths:`${utils.source('uikit')}/scss`
        }).on('error', scss.logError))
        .pipe(concat('aire.css'))
        .pipe(gulp.dest(paths.output));

};

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
gulp.task('build:sass', buildScss);
gulp.task('copy:assets', copyAssets);
gulp.task('build', gulp.parallel(
    'build:pug',
    'build:sass',
    'copy:assets',
    build
));


module.exports = build;




// module.exports = build() {
//     return Promise.resolve();
// }

