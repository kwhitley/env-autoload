'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var dotenv = _interopDefault(require('dotenv'));

if (process.env.NODE_ENV !== 'production') {
  var result = dotenv.config({ silent: false });

  if (result.error) {
    throw result.error;
  }
}
