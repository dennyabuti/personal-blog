module.exports = (wallaby) => {
  // Babel, jest-cli and some other modules may be located under
  // react-scripts/node_modules, so need to let node.js know about it
  const path = require('path');
  process.env.NODE_PATH +=
    path.delimiter +
    path.join(__dirname, 'node_modules') +
    path.delimiter +
    path.join(__dirname, 'node_modules/react-scripts/node_modules');
  require('module').Module._initPaths();

  return {
    files: [
      'src/**/*.+(js|jsx|json|snap|css|less|sass|scss|jpg|jpeg|gif|png|svg)',
      '!test/**/*.spec.js?(x)'
    ],

    tests: ['test/**/*.spec.js?(x)'],

    env: {
      type: 'node',
      runner: 'node',
      kind: 'chrome',
    },

    compilers: {
      '**/*.js?(x)': wallaby.compilers.babel({
        presets: ['react-app']
      }),
    },
    debug: true,
    setup: wallaby => {
      const jestConfig = require('react-scripts/scripts/utils/createJestConfig')(p => require.resolve('react-scripts/' + p));
      Object.keys(jestConfig.transform || {}).forEach(k => ~k.indexOf('^.+\\.(js|jsx') && void delete jestConfig.transform[k]);
      delete jestConfig.testEnvironment;
      wallaby.testFramework.configure(jestConfig);
    },
    testFramework: 'jest',
  };
};
