'use strict'
const
  assert = require('assert'),
  co = require('co'),
  request = require('request-promise'),
  fsp = require('fs-promise'),
  path = require('path'),
  felt = require('felt/lib/server'),
  configBuilder = require('felt/lib/config-builder'),
  config = require('./felt.config.js')

describe('felt-rollup', () => {
  let server
  const port = 3333, root = __dirname

  before(co.wrap(function* () {
    const opts = configBuilder(config, { port, root })
    server = yield felt(opts)
  }))

  it('bundles scripts', co.wrap(function* () {
    try {
      const
        url = `http://localhost:${ port }/app.js`,
        actual = yield request(url),
        file = path.join(__dirname, 'expect', 'app.js'),
        expected = yield fsp.readFile(file, 'utf8')

      assert.equal(actual, expected.trim())
    } catch (err) {
      console.log(err)
    }
  }))

  after(() => {
    server.close()
  })
})
