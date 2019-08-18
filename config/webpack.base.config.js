const webpack = require('webpack')
// 引入路径
const path = require('path')
const chalk = require('chalk')
const ver = require('./../package.json').version
const ProgressBarWebpackPlugin = require('progress-bar-webpack-plugin')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

const plugins = [
  new ProgressBarWebpackPlugin({
    format: '  build [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)'
  })
]

const webpackConfig = {
  mode: process.env.NODE_ENV,
  devtool: process.env.NODE_ENV === 'production' ? '' : 'source-map',
  entry: {
    shyjs: resolve('src/index.js')
  },
  output: {
    path: resolve('dist'),
    filename: `[name]${ver}.js`,
    library: 'ShyJS',
    libraryExport: 'default',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        loader: 'babel-loader',
        include: resolve('src'),
        exclude: '/node_modules/'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        LOG_LEVEL: JSON.stringify(process.env.LOG_LEVEL),
        VERSION: JSON.stringify(ver),
        DEBUGGER: JSON.stringify(process.env.NODE_ENV !== 'production')
      }
    })
  ].concat(plugins)
}
module.exports = webpackConfig
