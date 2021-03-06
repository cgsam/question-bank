/**
 * Created by sgnaneshwar on 1/19/17.
 */

'use strict';

//load Dependencies

var _ = require('lodash'),
    defaultAssets = require('./config/assets/default'),
    testAssets = require('./config/assets/tests'),
    karmaReporters = ['progress', 'coverage'];


module.exports = function (karmaConfig) {
    karmaConfig.set({
        frameworks: ['jasmine'],
        preprocessors: {
            'modules/*/client/views/**/*.html': ['ng-html2js'],
            'modules/core/client/app/config.js': ['coverage'],
            'modules/core/client/app/init.js': ['coverage'],
            'modules/*/client/*.js': ['coverage'],
            'modules/*/client/config/*.js': ['coverage'],
            'modules/*/client/controllers/*.js': ['coverage'],
            'modules/*/client/directives/*.js': ['coverage'],
            'modules/*/client/services/*.js': ['coverage']
        },
        ngHtml2JsPreprocessor: {
            moduleName: 'questionbank',

            cacheIdFromPath: function (filepath) {
                return filepath;
            },
        },
        files: _.union(defaultAssets.client.lib.js, defaultAssets.client.lib.tests, defaultAssets.client.js, testAssets.tests.client, defaultAssets.client.views),
        reporters: karmaReporters,
        // Configure the coverage reporter
        coverageReporter: {
            dir : 'coverage/client',
            reporters: [
                // Reporters not supporting the `file` property
                { type: 'html', subdir: 'report-html' },
                { type: 'lcov', subdir: 'report-lcov' },
                // Output coverage to console
                { type: 'text' }
            ],
            instrumenterOptions: {
                istanbul: { noCompact: true }
            }
        },

        // Web server port
        port: 9876,

        // Enable / disable colors in the output (reporters and logs)
        colors: true,

        // Level of logging
        // Possible values: karmaConfig.LOG_DISABLE || karmaConfig.LOG_ERROR || karmaConfig.LOG_WARN || karmaConfig.LOG_INFO || karmaConfig.LOG_DEBUG
        logLevel: karmaConfig.LOG_INFO,

        // Enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: ['PhantomJS'],

        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,

        // Continuous Integration mode
        // If true, it capture browsers, run tests and exit
        singleRun: true
    });

};