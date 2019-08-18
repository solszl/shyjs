/**
 *
 * Created Date: 2019-08-18, 20:52:03 (zhenliang.sun)
 * Last Modified: 2019-08-18, 21:01:24 (zhenliang.sun)
 * Email: zhenliang.sun@gmail.com
 *
 * Distributed under the MIT license. See LICENSE file for details.
 * Copyright (c) 2019 vhall
 */

const chalk = require('chalk')
const baseConfig = require('./webpack.base.config')
const merge = require('webpack-merge')
const ProgressBarWebpackPlugin = require('progress-bar-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const plugins = [
  new BundleAnalyzerPlugin(),
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
