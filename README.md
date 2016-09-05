# felt-rollup

[![Build Status][travis-image]][travis-url]

[Rollup](https://github.com/rollup/rollup) plugin for [Felt](https://github.com/cognitom/felt).

## Installation

```bash
$ npm install felt-rollup
```

## Usage

```javascript
const
  express = require('express'),
  felt = require('felt'),
  rollup = require('felt-rollup'),
  buble = require('rollup-plugin-buble'),
  resolve = require('rollup-plugin-node-resolve'),
  commonjs = require('rollup-plugin-commonjs')

const app = express()

app.use(felt({
  src: 'public'
  handlers: {
    '.js': rollup({
      plugins: [
        resolve({ jsnext: true,  main: true, browser: true }),
        commonjs(),
        buble()
      ],
      sourceMap: true
    })
  }
}))
app.use(express.static('public'))
app.listen(3000)
```

[travis-image]:https://img.shields.io/travis/cognitom/felt-rollup.svg?style=flat-square
[travis-url]:https://travis-ci.org/cognitom/felt-rollup
