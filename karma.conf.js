module.exports = function (config) {
	config.set({
      browsers: ['Chome'],
      singleRun: true,
      frameworks: ['mocha'],
      files: ['app/tests/**/*.test.jsx'],
      preprocessors: {
      	  'app/tests/**/*.test.jsx': ['webpack', 'sourcemap']
      },
	});
};