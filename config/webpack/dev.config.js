'use strict'

const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./base.config')

module.exports = Promise.resolve(
  merge(
    baseConfig, {
      mode: 'development',
      devtool: 'source-map',
      devServer: {
        overlay: {
          warnings: true,
          errors: true
        },
        port: 3000,
        open: false, // Disable auto opening for vscode browser preview
        hot: true,
        watchContentBase: true,
        stats: 'errors-only',
        historyApiFallback: true,
        inline: true
      },
      plugins: [
        new webpack.HotModuleReplacementPlugin()
      ]
    }
  )
)
