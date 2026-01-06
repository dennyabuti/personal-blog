const webpack = require('webpack');

module.exports = function override(config) {
  config.resolve.fallback = {
    ...config.resolve.fallback,
    buffer: require.resolve('buffer/'),
    stream: require.resolve('stream-browserify'),
  };
  
  config.plugins = [
    ...config.plugins,
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
    }),
  ];

  // Ignore source map warnings for packages with missing source maps
  config.ignoreWarnings = [/Failed to parse source map/];

  return config;
};
