// Karma configuration
// Generated on Fri Dec 05 2014 16:49:29 GMT-0500 (EST)

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jspm', 'jasmine', 'karma-typescript'],

        jspm: {
            // Edit this to your needs
            loadFiles: ['test/karma-main.js', 'test/setup.js', 'test/unit/**/*.js'],
            serveFiles: ['dist/amd/**/*.js', 'jspm_packages/**/*.js'],
            paths: {
                "*": "*",
                'aire/*': 'dist/amd/*',
                'github:*': 'jspm_packages/github/*',
                'npm:*': 'jspm_packages/npm/*'
            },


        },

        // list of files / patterns to load in the browser
        files: [
            'src/**/*.ts',
            'test/**/*.ts',
            {pattern: "node_modules/reflect-metadata/Reflect.js", include: true},
        ],

        // list of files to exclude
        exclude: [],

        karmaTypescriptConfig: {
            compilerOptions: {
                module: 'es6'
            },
            tsconfig: './tsconfig.json',
            resolve: {
                directories: ['node_modules', 'jspm_packages']
            }
        },


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'test/**/*.js': ['babel'],
            'src/**/*.js': ['babel'],
            'test/**/*.ts': ['karma-typescript']
        },
        'babelPreprocessor': {
            options: {
                sourceMap: 'inline',
                presets: [['es2015', {loose: true}], 'stage-1'],
                plugins: [
                    'syntax-flow',
                    'transform-decorators-legacy',
                    'transform-flow-strip-types'
                ]
            }
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false
    });
};
