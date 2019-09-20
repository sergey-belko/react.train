'use strict'

const { resolve } = require('path')
const { APP_DIR } = require('../constants')

const alias = {
  '@img': resolve(APP_DIR, 'src', 'assets', 'img'),
  '@component': resolve(APP_DIR, 'src', 'component'),
  '@app': resolve(APP_DIR, 'src', 'App'),
  '@page': resolve(APP_DIR, 'src', 'page'),
  '@store': resolve(APP_DIR, 'src', 'store'),
  '@util': resolve(APP_DIR, 'src', 'util')
}

module.exports = {
  ...alias
}
