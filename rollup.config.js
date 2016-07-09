const
  buble = require('rollup-plugin-buble'),
  resolve = require('rollup-plugin-node-resolve'),
  commonjs = require('rollup-plugin-commonjs')

module.exports = {
  plugins: [
    resolve({ jsnext: true,  main: true, browser: true }),
    commonjs(),
    buble()
  ],
  sourceMap: true
}
