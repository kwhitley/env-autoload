.env autoloader
=======

[![npm version](https://badge.fury.io/js/env-autoload.svg)](https://www.npmjs.com/package/env-autoload)
[![node version support](https://img.shields.io/node/v/env-autoload.svg)](https://www.npmjs.com/package/env-autoload)
[![Build Status via Travis CI](https://travis-ci.org/kwhitley/env-autoload.svg?branch=master)](https://travis-ci.org/kwhitley/env-autoload)
[![Coverage Status](https://coveralls.io/repos/github/kwhitley/env-autoload/badge.svg?branch=master)](https://coveralls.io/github/kwhitley/env-autoload?branch=master)
[![NPM downloads](https://img.shields.io/npm/dt/env-autoload.svg?style=flat-square)](https://www.npmjs.com/package/env-autoload)

## Why?
Because who wants bootstrap files in their boilerplate/templates?
This is really just a code-smell implementation fix for using the
wonderful [dotenv](https://www.npmjs.com/package/dotenv) library.

## Usage

#### .env
```bash
TEST='foo bar baz'
```

#### index.js (server)
```js
import env from 'env-autoload'     // require('env-autoload') works fine too

process.env.TEST === 'foo bar baz' // true
```
