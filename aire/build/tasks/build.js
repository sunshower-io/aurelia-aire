const gulp = require('gulp'),
    utils = require('./utils.js'),
    scss = require('gulp-sass'),
    paths = require('@build/paths.js'),
    concat = require('gulp-concat'),
    pug = require('gulp-pug'),
    typescript = require('gulp-typescript'),
    project = typescript.createProject('tsconfig.json');


//================================================================================
// build scss
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
// build typescript
//================================================================================


const build = () => {
    return gulp
        .src(paths.typescript)
        .pipe(project(typescript.reporter.fullReporter()))
        .pipe(gulp.dest(paths.output));
};


//================================================================================
// build pug files
//================================================================================


const buildPug = () => {

    return gulp.src(paths.pug)
        .pipe(pug({})).pipe(gulp.dest(paths.output));
};

//================================================================================
// copy metadata
//================================================================================

const copyMetadata = () => {
    return gulp.src(paths.metadata)
        .pipe(gulp.dest(paths.output));
};


//================================================================================
// copy components: copy all components to dist
//================================================================================



const copyComponents = () => {
    return gulp.src(paths.components).pipe(gulp.dest(paths.output));
};


//================================================================================
// copy scss: copy all scss to dist
//================================================================================



const copyScss = () => {
    return gulp.src(paths.styles)
        .pipe(gulp.dest(paths.output));
};

//================================================================================
// task definitions
//================================================================================


//================================================================================
// copy
//================================================================================



gulp.task('copy:metadata', copyMetadata);
gulp.task('copy:components', copyComponents);
gulp.task('copy:sass', copyScss);


//================================================================================
// build
//================================================================================



gulp.task('build:pug', buildPug);
gulp.task('build:sass', buildScss);


//================================================================================
// aggregate
//================================================================================



gulp.task('build', gulp.parallel(
    'build:pug',
    'build:sass',
    build,
    'copy:metadata',
    'copy:components'
));



module.exports = build;


// module.exports = build() {
//     return Promise.resolve();
// }

