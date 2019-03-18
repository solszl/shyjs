const webpack = require('webpack')
// 引入路径
const path = require('path')

const ver = require('../package.json').version

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

const webpackConfig = {
  mode: process.env.NODE_ENV,
  devtool: process.env.NODE_ENV === 'production' ? '' : 'source-map',
  entry: {
    index: resolve('src/index.js')
  },
  output: {
    path: resolve('dist'),
    filename: 'index' + ver + '.js',
    library: 'VHShyJS',
    libraryTarget: 'umd'
  },
  module: {
    rules: [{
      test: /\.js[x]?$/,
      loader: 'babel-loader',
      include: resolve('src'),
      exclude: '/node_modules'
    }]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        LOG_LEVEL: JSON.stringify(process.env.LOG_LEVEL),
        VERSION: JSON.stringify(ver),
        DEBUGGER: JSON.stringify(process.env.NODE_ENV !== 'production')
      }
    })
  ]
}
module.exports = webpackConfig
