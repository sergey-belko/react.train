'use strict'

const dev = require('./dev.config')
const prod = require('./prod.config')

module.exports = mode => (
  mode === 'production' ? prod : dev
)
