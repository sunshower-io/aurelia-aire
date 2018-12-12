const
    build = require('./build.js'),
    gulp = require('gulp'),
    paths = require('@build/paths.js'),
    serve = require('./serve.js');


const watch = (done) => {
    gulp.watch(paths.pug, gulp.series('build:pug', 'reload'));
    gulp.watch(paths.allStyles, gulp.series('build:sass', 'reload'));
    gulp.watch(paths.typescript, gulp.series('build', 'reload'));
};

//**================================================================================
// Task watch
//================================================================================

gulp.task('watch', gulp.parallel(watch, 'serve'));





