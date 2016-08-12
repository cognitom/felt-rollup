'use strict'
const
  rollup = require('../')

module.exports = {
  src: 'fixture',
  handlers: {
    '.js': rollup({ sourceMap: true })
  }
}
