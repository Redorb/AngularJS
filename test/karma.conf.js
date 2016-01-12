module.exports = function(config){
  config.set({

    basePath : '../app',

    files : [
      '../app/lib/angular/angular.js',
      'lib/angular/angular-*.js',
      '/lib/angular-mocks.js',
      '/lib/sinon-1.15.0.js',
      'js/**/*.js',
      '/unit/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
      'karma-chrome-launcher',
      'karma-jasmine'
    ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
