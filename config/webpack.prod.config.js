/**
 *
 * Created Date: 2019-03-13, 23:35:40 (zhenliang.sun)
 * Last Modified: 2019-08-17, 23:22:09 (zhenliang.sun)
 * Email: zhenliang.sun@gmail.com
 *
 * Distributed under the MIT license. See LICENSE file for details.
 * Copyright (c) 2019 vhall
 */

const path = require('path')
const chalk = require('chalk')
const baseConfig = require('./webpack.base.config')
const merge = require('webpack-merge')
// const CleanWebpackPlugin = require('clean-webpack-plugin');
const ProgressBarWebpackPlugin = require('progress-bar-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}
const plugins = [
  new ProgressBarWebpackPlugin({
    format: '  build [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)'
  })
]
const webpackConfig = merge(baseConfig, {
  optimization: {
    minimize: true,
    minimizer: [
      new UglifyJSPlugin({
        cache: true,
        parallel: true,
        sourceMap: false, // set to true if you want JS source maps,
        uglifyOptions: {
          warnings: false,
          drop_debugger: true
          // drop_console: true
        }
      })
    ]
  },
  performance: {
    hints: false
  },
  plugins: plugins
})

module.exports = webpackConfig
