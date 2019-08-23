'use strict'

const path = require('path')
const fs = require('fs')

const appDirectory = fs.realpathSync(process.cwd())
const outputDir = path.resolve(appDirectory, 'dist')

module.exports = {
  APP_ROOT_ID: "app",
  APP_TITLE: "Gym scheduler",
  APP_OUTPUT_DIR: outputDir,
  APP_DIR: appDirectory,
  ENTRY: path.resolve(appDirectory, 'src', 'index.jsx')
}
