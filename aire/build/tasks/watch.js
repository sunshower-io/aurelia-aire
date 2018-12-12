

const
    build = require('./build.js'),
    gulp = require('gulp'),
    paths = require('@build/paths.js'),
    serve = require('./serve.js');



const watch = (done) => {
    console.log(paths.typescript);
    gulp.watch(paths.typescript, build);
};


gulp.task('watch',  gulp.parallel(watch, 'serve'));



