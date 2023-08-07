const path = require('path');

exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
  const config = getConfig();

  // Add worker-loader rule for web workers
  config.module.rules.push({
    test: /\.worker\.js$/,
    use: [
      {
        loader: 'worker-loader',
      },
    ],
  });

  actions.replaceWebpackConfig(config);
};
