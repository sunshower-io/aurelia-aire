const
    gulp = require('gulp'),
    fs = require('fs');
require('@sunshower/aire-build')(gulp);
// const
//     gulp = require('gulp'),
//     requireDirectory = require('require-dir'),
//     aireBuild = require('../../aire-build/src/main/tasks/build.js')(gulp);


gulp.task('site', (done) => {

    let pkgs = [
            'aurelia',
            'jspm',
            'velocity',
            'pretty',
            'prismjs',
            'aire',
            'uikit'
        ],
        aureliaDirs = fs
            .readdirSync('jspm_packages/npm')
            .filter(t => pkgs.filter(u => t.startsWith(u).length > 0) &&
                fs.lstatSync(`jspm_packages/npm/${t}`)
                    .isDirectory()).map(t => [`jspm_packages/npm/${t}/**/*`, t]),

        aureliaFiles = fs
            .readdirSync('jspm_packages/npm')
            .filter(t => pkgs.filter(u => t.startsWith(u).length > 0) &&
                fs.lstatSync(`jspm_packages/npm/${t}`)
                    .isFile()).map(t => `jspm_packages/npm/${t}`);

    aureliaDirs.forEach(t =>
        gulp.src([t[0]]).pipe(gulp.dest(`../docs/jspm_packages/npm/${t[1]}`))
    );
    gulp.src('jspm_packages/github/**/*').pipe(gulp.dest('../docs/jspm_packages/github'));
    gulp.src(aureliaFiles).pipe(gulp.dest(`../docs/jspm_packages/npm`));
    gulp.src('dist/**/*').pipe(gulp.dest('../docs/dist'));
    gulp.src(['jspm.config.js', 'index.html']).pipe(gulp.dest('../docs'));
    gulp.src(['jspm_packages/system.js']).pipe(gulp.dest('../docs/jspm_packages'));

    done();
});