const gulp = require('gulp'),
    build = require('./build.js'),
    sync = require('browser-sync');


const synchronize = (done) => {
    let cfg = {
        online: false,
        open: false,
        port:9000,
        server: {
            baseDir: ['.'],
            middleware: (req, res, next) => {
                res.setHeader('Access-Control-Allow-Origin', '*');
                next();
            }
        }

    };
    sync(cfg, done);
};

gulp.task('serve', synchronize);

