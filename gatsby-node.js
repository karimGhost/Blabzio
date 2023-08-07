const path = require('path');

exports.onCreateWebpackConfig = ({ actions, loaders, getConfig }) => {
  const config = getConfig();
  // Add worker-loader rule for web workers
  config.module.rules.push({
    test: /\.worker\.js$/,
    use: loaders.worker(),
  });
  actions.replaceWebpackConfig(config);
}
