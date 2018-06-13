// NOTE: rollup.js is only used for building the server code for production
import babel from 'rollup-plugin-babel';

let pkg = require('./package.json')
let external = Object.keys(pkg.dependencies)

export default {
  input: './src/env-autoload.js',
  plugins: [
    babel({
      babelrc: false,
      exclude: 'node_modules/**',
      presets: [ [ 'env', { modules: false } ] ],
      plugins: []
    })
  ],
  external,
  output: [
    {
      file: './dist/env-autoload.js',
      format: 'cjs',
      sourceMap: true
    }
  ]
};
