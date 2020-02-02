const path = require('path')

require('dotenv').config()
module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    config.resolve.modules.push(path.resolve('./'))
    config.resolve.alias['api'] = path.join(__dirname, './pages/api')
    config.resolve.alias['constants'] = path.join(__dirname, './constants')
    return config;
  },
  env: {
    SPACE_ID: process.env.SPACE_ID,
    ACCESS_TOKEN: process.env.ACCESS_TOKEN
  },
};