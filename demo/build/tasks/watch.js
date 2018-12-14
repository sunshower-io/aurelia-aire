const
    build = require('./build.js'),
    gulp = require('gulp'),
    _ = require('./site.js'),
    paths = require('@build/paths.js'),
    serve = require('./serve.js');


const watch = (done) => {
    gulp.watch(paths.assets, gulp.series('copy:assets', 'reload'));
    gulp.watch(paths.pug, gulp.series('aire:generate', 'build:pug', 'reload'));
    gulp.watch(paths.typescript, gulp.series('aire:generate', 'build', 'reload'));
};

//**================================================================================
// Task watch
//================================================================================

gulp.task('watch', gulp.parallel(watch, 'serve'));





