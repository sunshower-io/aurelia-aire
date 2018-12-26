module.paths.push(`${process.cwd()}/node_modules`);
const gulp = require('gulp'),
    paths = require('../paths'),
    del = require('del'),
    vinylPaths = require('vinyl-paths');

gulp.task('clean', () =>  {
    return gulp.src(paths.output).pipe(vinylPaths(del));
});
