const path = require('path')

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    config.resolve.modules.push(path.resolve('./'))
    config.resolve.alias['api'] = path.join(__dirname, './pages/api')
    return config;
  }
};