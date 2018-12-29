// this file provides a list of unbundled files that
// need to be included when exporting the application
// for production.
module.exports = {
    'list': [
        'index.html',
        'jspm.config.js',
        // 'favicon.ico',
        // 'LICENSE'


        'jspm_packages/system.js'
        // 'jspm_packages/system-polyfills.js',
        // 'jspm_packages/system-csp-production.js',
    ],


    'normalize': [
        ['plugin-css', ['/**/*']],
        ['plugin-text', ['/**/*']]
    ]

};
