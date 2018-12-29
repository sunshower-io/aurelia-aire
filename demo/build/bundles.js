// module.exports = {
//   bundles: {
//     'dist/app-build': {
//       includes: ['[**/*.js]', '**/*.html!text', '**/*.css!text'],
//       options: {
//         inject: true,
//         minify: true,
//         depCache: true,
//         rev: false
//       }
//     },
//
//     'dist/aurelia': {
//       includes: [
//         'aurelia-framework',
//         // 'aurelia-bootstrapper',
//         // 'aurelia-fetch-client',
//         // 'aurelia-router',
//         // // 'aurelia-animator-css',
//         // 'aurelia-templating-binding',
//         // 'aurelia-polyfills',
//         // 'aurelia-templating-resources',
//         // 'aurelia-templating-router',
//         // 'aurelia-loader-default',
//         // 'aurelia-history-browser',
//         // 'aurelia-logging-console',
//         // // 'aurelia-i18n',
//         // 'aurelia-pal-browser',
//         // "@material/button",
//         // "@material/card",
//         // "@material/grid-list",
//         // "@material/theme",
//         // "@material/toolbar",
//         // "@material/typography",
//         // "material-design-icons",
//         // 'fetch'
//       ],
//       options: {
//         inject: true,
//         minify: true,
//         depCache: false,
//         rev: false
//       }
//     }
//   }
// };
const config = {
    force: true,
    baseURL: '.',             // baseURL of the application
    configPath: [             // SystemJS/JSPM configuration files
        'jspm.browser.js',
        'jspm.config.js'
    ],
    injectionConfigPath: 'jspm.config.js',  // Configuration file path where bundle and depCache meta will be injected.
    bundles: {
        "dist/app-build": {     // bundle name/path. Must be within `baseURL`. Output path will look like: `baseURL/dist/app-build.js`.
            includes: [
                '[dist/**/*.js]',
                '*.html!text',
                '*.css!text'
            ],
            options: {
                inject: true,
                minify: true
            }
        },

        'dist/aurelia': {
            includes: [
                'aurelia-framework',
                "aurelia-bootstrapper",
                // "aurelia-fetch-client",
                "aurelia-router",
                // "aurelia-animator-css",
                "aurelia-templating-binding",
                "aurelia-polyfills",
                "aurelia-templating-resources",
                "aurelia-templating-router",
                "aurelia-loader-default",
                "aurelia-history-browser",
                "aurelia-logging-console",
                // "aurelia-i18n",
                // "aurelia-pal-browser",
            ],
            options: {
                inject: true,
                minify: true
            }
        }
    }
};
module.exports = config;


