/**
 *
 * Created Date: 2019-03-13, 23:35:40 (zhenliang.sun)
 * Last Modified: 2019-08-18, 21:03:34 (zhenliang.sun)
 * Email: zhenliang.sun@gmail.com
 *
 * Distributed under the MIT license. See LICENSE file for details.
 * Copyright (c) 2019 vhall
 */

const chalk = require('chalk')
const baseConfig = require('./webpack.base.config')
const merge = require('webpack-merge')
const ProgressBarWebpackPlugin = require('progress-bar-webpack-plugin')

const plugins = [
  new ProgressBarWebpackPlugin({
    format: '  build [:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds)'
  })
]
const webpackConfig = merge(baseConfig, {
  optimization: {
    minimize: true
  },
  performance: {
    hints: false
  },
  plugins: plugins
})

module.exports = webpackConfig
