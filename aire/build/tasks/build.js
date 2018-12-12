var gulp = require('gulp'),
    runSequence = require('run-sequence'),
    paths = require('../paths'),
    typescript = require('gulp-typescript'),
    plumber = require('gulp-plumber'),
    notify = require('gulp-notify'),
    changed = require('gulp-changed'),
    sourcemaps = require('gulp-sourcemaps'),
    pug = require('gulp-pug'),
    compilerOptions = require('../babel-options'),
    concat = require('gulp-concat'),
    assign = Object.assign || require('object.assign'),
    scss = require('gulp-sass');

gulp.task('build-pug', function () {
    return gulp.src(paths.pug)
        .pipe(pug)
});

gulp.task('build-scss', function () {
    return gulp.src(paths.themes)
        .pipe(scss({
            includePaths: [__dirname + '/jspm_packages/npm/@material', 'node_modules']
        }).on('error', scss.logError))
        .pipe(concat('sunshower.css')).pipe(gulp.dest(paths.output + 'amd'));
});

gulp.task('build-pug', function () {
    return gulp.src(paths.pug)
        .pipe(pug({pretty: true}).on('error', function (er) {
            console.log(er);
        }))
        .pipe(changed(paths.output, {extension: '.html'}))
        .pipe(gulp.dest(paths.output + 'es2015'))
        .pipe(gulp.dest(paths.output + 'commonjs'))
        .pipe(gulp.dest(paths.output + 'amd'))
        .pipe(gulp.dest(paths.output + 'system'));
});

gulp.task('build-html', function () {
    return gulp.src(paths.html)
        .pipe(gulp.dest(paths.output + 'es2015'))
        .pipe(gulp.dest(paths.output + 'commonjs'))
        .pipe(gulp.dest(paths.output + 'amd'))
        .pipe(gulp.dest(paths.output + 'system'));
});


gulp.task('build-css', function () {
    return gulp.src(paths.css)
        .pipe(gulp.dest(paths.output + 'es2015'))
        .pipe(gulp.dest(paths.output + 'commonjs'))
        .pipe(gulp.dest(paths.output + 'amd'))
        .pipe(gulp.dest(paths.output + 'system'));
});

gulp.task('build-images', function () {
    return gulp.src(paths.images)
        .pipe(gulp.dest(paths.output + 'amd'));
});

// gulp.task('definitions', function() {
//     dtsGen({
//         name: 'aire',
//         project: './',
//         out: 'lib/dts/lib_name.d.ts'
//     });
// });


var typescriptCompiler = typescriptCompiler || null;
gulp.task('build-system', function () {
    if (!typescriptCompiler) {
        typescriptCompiler = typescript.createProject('tsconfig.json', {
            "typescript": require('typescript')
        });
    }

    var result = gulp.src(paths.dtsSrc.concat(paths.source))
        .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        .pipe(changed(paths.output, {extension: '.ts'}))
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(typescriptCompiler());

    result// .pipe(sourcemaps.write('.', {includeContent: false, sourceRoot: '/src'}))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.output + 'amd'))
        .pipe(gulp.dest(paths.output + 'system'));

    return result;
});


gulp.task('build', function (callback) {
    return runSequence(
        ['build-html', 'build-css', 'build-system', 'build-pug', 'build-scss', 'build-images'],
        callback
    );
});
