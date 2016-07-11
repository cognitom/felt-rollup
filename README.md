# felt-rollup

Rollup plugin for Felt.

## Installation

```bash
$ npm install felt-postcss
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
