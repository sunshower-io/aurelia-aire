var gulp = require('gulp'),
  runSequence = require('run-sequence'),
  changed = require('gulp-changed'),
  plumber = require('gulp-plumber'),
  sourcemaps = require('gulp-sourcemaps'),
  paths = require('../paths'),
  assign = Object.assign || require('object.assign'),
  notify = require('gulp-notify'),
  browserSync = require('browser-sync'),
  typescript = require('gulp-typescript'),
  htmlmin = require('gulp-htmlmin'),
  pug = require('gulp-pug'),
  scss = require('gulp-sass'),
  concat = require('gulp-concat'),
  yaml = require('gulp-yaml'),
  prettier = require('gulp-prettier'),
  path = require('path'),
  jsonconcat = require('gulp-jsonminify');

var SASS_INCLUDE_PATHS = [
  __dirname + '/jspm_packages/github/sunshower-io/aire@1.0.0/sunshower.scss',
  __dirname + '/node_modules/aurelia-ui-framework/sass/',
  __dirname + '/jspm_packages/github/utatti/perfect-scrollbar@1.3.0/css'
];

gulp.task('format', function() {
  return gulp
    .src(['src/**/*.ts', 'build/**/*.js'])
    .pipe(prettier({ singleQuote: true }))
    .pipe(
      gulp.dest(function(file) {
        return file.base;
      })
    );
});

gulp.task('compile-i18n', function() {
  return gulp
    .src(
      paths.locales.map(function(d) {
        return 'locales/' + d + '/**/*.{yml,yaml}';
      })
    )
    .pipe(yaml({ safe: true }))
    .pipe(jsonconcat({ fileName: 'translation.json' }))
    .pipe(
      gulp.dest(function(file) {
        var directory = path.basename(file.base);
        return './compiled-locales/' + directory;
      })
    );
});

gulp.task('copy-assets', function() {
  return gulp
    .src([
      'themes/**/*.{gif,jpg,png,svg,eot,ttf,woff,woff2}',
      'assets/**/*.{png,svg,json}'
    ])
    .pipe(gulp.dest(paths.output));
});

gulp.task('build-pug', function() {
  return gulp
    .src(paths.pug)
    .pipe(
      pug({ pretty: true, basedir: 'src' }).on('error', function(er) {
        console.log(er);
      })
    )
    .pipe(changed(paths.output, { extension: '.html' }))
    .pipe(gulp.dest(paths.output));
});

gulp.task('build-scss', function() {
  return gulp
    .src(paths.scss)
    .pipe(
      scss({
        includePaths: ['node_modules/aurelia-ui-framework/sass']
      }).on('error', scss.logError)
    )
    .pipe(concat('stratosphere.css'))
    .pipe(gulp.dest(paths.output));
});

// gulp.task('build-scss', function () {
//     return gulp.src(paths.scss).pipe(scss().on('error', scss.logError))
//         .pipe(concat('stratosphere.css')).pipe(gulp.dest(paths.output));
// });
// transpiles changed es6 files to SystemJS format
// the plumber() call prevents 'pipe breaking' caused
// by errors from other gulp plugins
// https://www.npmjs.com/package/gulp-plumber
var typescriptCompiler = typescriptCompiler || null;

gulp.task('build-system', function() {
  if (!typescriptCompiler) {
    typescriptCompiler = typescript.createProject('tsconfig.json', {
      typescript: require('typescript')
    });
  }

  return gulp
    .src(paths.dtsSrc.concat(paths.source))
    .pipe(
      plumber({ errorHandler: notify.onError('Error: <%= error.message %>') })
    )
    .pipe(changed(paths.output, { extension: '.ts' }))
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(typescriptCompiler())
    .pipe(sourcemaps.write('.', { includeContent: false, sourceRoot: '.' }))
    .pipe(gulp.dest(paths.output));
});

// copies changed html files to the output directory
gulp.task('build-html', function() {
  return gulp
    .src(paths.html)
    .pipe(
      plumber({ errorHandler: notify.onError('Error: <%= error.message %>') })
    )
    .pipe(changed(paths.output, { extension: '.html' }))
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest(paths.output));
});

// copies changed css files to the output directory
gulp.task('build-css', function() {
  return gulp
    .src(paths.css)
    .pipe(changed(paths.output, { extension: '.css' }))
    .pipe(gulp.dest(paths.output))
    .pipe(browserSync.stream());
});

// this task calls the clean task (located
// in ./clean.js), then runs the build-system
// and build-html tasks in parallel
// https://www.npmjs.com/package/gulp-run-sequence
gulp.task('build', function(callback) {
  return runSequence(
    'clean',
    [
      'build-system',
      'compile-i18n',
      'build-html',
      'build-css',
      'build-scss',
      'build-pug',
      'copy-assets'
    ],
    callback
  );
});
