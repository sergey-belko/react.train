'use strict'

const { readFileSync } = require('fs')
const { resolve } = require('path')
const { APP_DIR } = require('../constants')

const normalize = (value = '') => value.replace('/*', '')
const read = (value = '') => JSON.parse(readFileSync(value))

/**
 * Resolve tsconfig.json paths to Webpack aliases
 */
function resolveTsconfigPathsToAlias(settings = {}) {
    const defaultTSConfigLocation = resolve(APP_DIR, 'tsconfig.json')
    const { tsconfigPath = defaultTSConfigLocation } = settings
    const { compilerOptions = {} } = read(tsconfigPath)
    const { paths = {} } = compilerOptions

    return Object.entries(paths)
        .map(([key, value = []]) => [key, value[0]])
        .map((arr) => arr.map(normalize))
        .map(([key, value]) => [key, resolve(APP_DIR, value)])
        .reduce((prev, [key, value]) => {
            prev[key] = value
            return prev
        }, {})
}

const alias = {
    '@img': resolve(APP_DIR, 'src', 'assets', 'img'),
    '@component': resolve(APP_DIR, 'src', 'component')
}

module.exports = {
    ...alias
}
