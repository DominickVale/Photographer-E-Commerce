const path = require('path')

require('dotenv').config()
module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    config.resolve.alias['actions'] = path.join(__dirname, './actions')
    config.resolve.alias['public'] = path.join(__dirname, './public')
    config.resolve.alias['api'] = path.join(__dirname, './pages/api')
    config.resolve.alias['components'] = path.join(__dirname, './components')
    config.resolve.alias['styles'] = path.join(__dirname, './styles')
    config.resolve.alias['pages'] = path.join(__dirname, './pages')
    config.resolve.alias['constants'] = path.join(__dirname, './constants')
    config.resolve.alias['utils'] = path.join(__dirname, './utils')
    return config;
  },
  env: {
    SPACE_ID: process.env.SPACE_ID,
    ACCESS_TOKEN: process.env.ACCESS_TOKEN
  },
};