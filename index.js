'use strict'
const
  co = require('co'),
  path = require('path'),
  rollup = require('rollup').rollup

/** default config file name */
const defaultConfigFileName = 'rollup.config.js'

/** default value for bundle options */
const bDefaults = { format: 'iife', moduleName: 'app' }

/**
 * Array of keys of bundle options
 * https://github.com/rollup/rollup/wiki/JavaScript-API#bundlewrite-options-
 */
const bOptsKeys = ['dest', 'sourceMap', 'sourceMapFile']

module.exports = function(opts) {
  if (typeof opts == 'string' || !opts) {
    try {
      const
        root = process.cwd(),
        configFile = path.join(root, opts || defaultConfigFileName)
      opts = require(configFile)
    } catch(e) {
      opts = require(path.join(__dirname, defaultConfigFileName))
    }
  }

  return co.wrap(function* (from, to){
    const r = {}, b = Object.assign({}, bDefaults)
    for (const key in opts) {
      if (~bOptsKeys.indexOf(key))
        b[key] = opts[key]
      else
        r[key] = opts[key]
    }
    
    r.entry = from
    b.dest = to
    const bundle = yield rollup(r)
    yield bundle.write(b)

    // TODO: return dependencies
  })
}
