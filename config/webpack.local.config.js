const path = require('path')
const webpack = require('webpack')
const baseConfig = require('./webpack.base.config')
const merge = require('webpack-merge')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

const webpackConfig = merge(baseConfig, {
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    inline: true,
    hot: true,
    open: false,
    host: '0.0.0.0',
    port: 9099,
    compress: false,
    contentBase: resolve('./dist')
  }
})

module.exports = webpackConfig
