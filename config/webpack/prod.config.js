'use strict'

const merge = require('webpack-merge')
const CSSNano = require('cssnano')
const baseWebpackConfig = require('./base.config')

module.exports = Promise.resolve(
  merge(
    baseWebpackConfig, {
      mode: 'production',

      plugins: [
        new CSSNano({
          preset: 'default'
        })
      ]
    }
  ))
