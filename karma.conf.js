var fs      = require('fs');
var sources = require('./.sources.json');

module.exports = function (config) {
  config.set({
    frameworks: ['jasmine'],
    basePath: '',
    files: [
      'spec/fixtures/setup.js',
      {pattern: 'spec/fixtures/*.png', included: false, watched: false, served: true}
    ].concat(sources).concat([,
      'spec/**/*.js'
    ]),
    reporters: ['mocha'],
    port: 9876,
    runnerPort: 9100,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    captureTimeout: 5000,
    singleRun: true
  });
};
