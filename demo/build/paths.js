var appRoot = 'src/';
var outputRoot = 'dist/';

module.exports = {
    root: appRoot,
    source: appRoot + '**/*.ts',
    html: appRoot + '**/*.html',
    css: appRoot + '**/*.css',
    style: 'styles/**/*.css',
    themes: 'themes/**/*.scss',
    images: 'images/**/*.*',
    output: outputRoot,
    pug: appRoot + '**/*.pug',
    doc: './doc',
    locales: ['en'],
    dtsSrc: [
        './typings/**/*.d.ts',
        './custom_typings/**/*.d.ts'
    ]
};
