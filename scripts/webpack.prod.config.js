/**
 * 生产环境配置
 */

/* eslint no-unused-vars:0 */
/* eslint no-undef:0 */
const webpack = require('webpack')
const webpackConfigBase = require('./webpack.base.config')
const merge = require('webpack-merge')
const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const Copy = require('copy-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const webpackConfigProd = {
  mode: 'production',
  plugins: [
    new UglifyJsPlugin({
      sourceMap: false,
    }),
    new Copy([
      { from: './app/resource', to: './resource' },
    ]),
    new CleanWebpackPlugin({
      //打包前删除文件夹
      cleanOnceBeforeBuildPatterns: [path.join(__dirname, '../dist')],
      verbose: false, //是否报告已删除的文件
    })
  ],
}

module.exports = merge(webpackConfigBase, webpackConfigProd)
