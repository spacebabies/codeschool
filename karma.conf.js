var webpackConfig = require('./webpack.config');
webpackConfig.devtool = 'inline-source-map';

module.exports = function (config) {
  config.set({
    browsers: [ 'Chrome_without_security' ],
    customLaunchers: {
      'PhantomJS_custom': {
        base: 'PhantomJS',
        options: {
          windowName: 'my-window',
          settings: {
            webSecurityEnabled: false
          },
        },
        flags: ['--web-security=false'],
        debug: true
      },
      'Chrome_without_security': {
         base: 'Chrome',
         flags: ['--disable-web-security'],
         debug: true
      }
    },
    singleRun: true,
    frameworks: [ 'mocha', 'chai', 'sinon', 'sinon-chai' ],
    files: [
      'tests.webpack.js'
    ],
    client: {
      captureConsole: true,
      mocha: {
        bail: false
      }
    },
    plugins: [
      'karma-phantomjs-launcher',
      'karma-chrome-launcher',
      'karma-chai',
      'karma-mocha',
      'karma-sourcemap-loader',
      'karma-webpack',
      'karma-mocha-reporter',
      'karma-sinon',
      'karma-sinon-chai'
    ],
    preprocessors: {
      'tests.webpack.js': [ 'webpack', 'sourcemap' ]
    },
    reporters: [ 'mocha' ],
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    },
    autoWatch: true
  });
};
