const path = require('path')
const webpack = require('webpack')


module.exports = {
  devtool: 'source-map', // or 'inline-source-map'
  performance: { hints: false },
  entry: {
    'index': path.resolve(__dirname, 'index.js'),
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    path: path.join(__dirname, '/assets/dist'),
    publicPath: '/assets/dist/'
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json'],
    alias: {
      '@constants': path.resolve(__dirname, 'constants'),
      '@containers': path.resolve(__dirname, 'containers'),
      '@components': path.resolve(__dirname, 'components'),
      '@util': path.resolve(__dirname, 'util'),
      '@style': path.resolve(__dirname, 'style')
    }
  },
  module: {
    noParse: [/moment.js/],
    rules: [
      {
        test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader',
        query: {
          plugins: [
            ['@babel/plugin-transform-runtime'],
            ['@babel/plugin-proposal-class-properties'],
            ['import', { 'style': true, 'libraryName': 'antd' }]
          ],
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      },
      { test: /\.(jpg|png)$/, loader: 'url?limit=8192' },
      // svg-sprite for antd@1.0
      {
        test: /\.(svg)$/i, loader: 'svg-sprite', include: [
          require.resolve('antd').replace(/warn\.js$/, ''),  // 1. 属于 antd 内置 svg 文件
        ]
      },
      {
        test: /\.less$/i, use: ['style-loader', 'css-loader', {
          loader: 'less-loader',
          options: {
            javascriptEnabled: true,
            modifyVars: {
              'primary-color': '#dfac02',
              'link-color': '#dfac02',
            }
          }
        }]
      },
      // { test: /\.css$/i, loader: 'style!css' }
    ]
  },
  devServer: {
    contentBase: './',
    hot: true,
    historyApiFallback: true,
    disableHostCheck: true
  },
}