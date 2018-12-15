module.paths.push(`${process.cwd()}/node_modules`);
const
    root = process.cwd(),
    build = require('./build.js'),
    gulp = require('gulp'),
    paths = require('../paths.js'),
    serve = require('./serve.js');


const watch = (done) => {
    if(paths.components) {
        gulp.watch(paths.components, gulp.series('copy:components'));
    }
    gulp.watch(paths.pug, gulp.series('build:pug', 'reload'));
    if(paths.allStyles) {
        gulp.watch(paths.allStyles, gulp.series('build:sass', 'reload'));
    }
    gulp.watch(paths.typescript, gulp.series('build', 'reload'));
};

//**================================================================================
// Task watch
//================================================================================

gulp.task('watch', gulp.parallel(watch, 'serve'));





