/**
 *
 * Created Date: 2019-03-13, 23:35:38 (zhenliang.sun)
 * Last Modified: 2019-08-17, 23:27:07 (zhenliang.sun)
 * Email: zhenliang.sun@gmail.com
 *
 * Distributed under the MIT license. See LICENSE file for details.
 * Copyright (c) 2019 vhall
 */

const baseConfig = require('./webpack.base.config')
const merge = require('webpack-merge')
// const CleanWebpackPlugin = require('clean-webpack-plugin');

const webpackConfig = merge(baseConfig, {
  optimization: {
    minimize: false
  },
  performance: {
    hints: false
  }
})

module.exports = webpackConfig
