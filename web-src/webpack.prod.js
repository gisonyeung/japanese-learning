const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.config')

module.exports = merge(common, {
  mode: 'production',
  devtool: 'none',
  output: {
    filename: '[name].js',
    path: path.join(__dirname, '../www/assets/dist'),
    publicPath: '/assets/dist/'
  },
})
