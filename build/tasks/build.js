module.paths.push(`${process.cwd()}/node_modules`);

const
    gulp = require('gulp'),
    utils = require('./utils.js'),
    scss = require('gulp-sass'),
    paths = require('../paths.js'),
    clean = require('./clean'),
    log = require('gulp-util'),
    concat = require('gulp-concat'),
    pug = require('gulp-pug'),
    rename = require('gulp-rename'),
    typescript = require('gulp-typescript'),
    project = typescript.createProject('tsconfig.json');


//================================================================================
// build scss
//================================================================================

const buildScss = () => {
    let include = paths.createScssInclusions(utils),
        cfg = include && include.length ? {
            includePaths: include
        } : {};
    if (include) {
        log.log("SCSS Include Directories:");
        for (let dir of include) {
            log.log(`\t${dir}`);
        }
    }
    return gulp.src(paths.styles)
        .pipe(scss(cfg).on('error', scss.logError))
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
        .pipe(rename(utils.reparent))
        .pipe(gulp.dest(paths.output));
};


//================================================================================
// build pug files
//================================================================================


const buildPug = () => {

    return gulp.src(paths.pug)
        .pipe(pug({}))
        .pipe(rename(utils.reparent))
        .pipe(gulp.dest(paths.output));
};

//================================================================================
// copy metadata
//================================================================================

const copyMetadata = (done) => {
    if (paths.metadata) {
        return gulp.src(paths.metadata)
            .pipe(rename(utils.reparent))
            .pipe(gulp.dest(paths.output));
    }
    return done();
};


//================================================================================
// copy components: copy all components to dist
//================================================================================


const copyComponents = done => {
    if (paths.components) {
        gulp.src(paths.components)
            .pipe(rename(utils.reparent))
            .pipe(gulp.dest(paths.output));
    }
    if(paths.allStyles) {
        gulp.src(paths.allStyles).pipe(gulp.dest(`${paths.output}/scss`))
    }
    return done();
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
gulp.task('build:sass',
    gulp.series(
        buildScss,
        'copy:metadata',
        'copy:components'
    ));


//================================================================================
// aggregate
//================================================================================


gulp.task('build',
    gulp.parallel(
        'build:pug',
        'build:sass',
        build,
        'copy:metadata',
        'copy:components'
    ));


