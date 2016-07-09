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
  rollup = require('felt-rollup')

const app = express()

app.use(felt({
  src: 'public'
  compilers: {
    '**/*.js': rollup('rollup.config.js')
  }
}))
app.use(express.static('public'))
app.listen(3000)
```
