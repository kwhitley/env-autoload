'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var dotenv = _interopDefault(require('dotenv'));

var Reset = '\x1b[0m';
var Bright = '\x1b[1m';
var FgYellow = '\x1b[33m';

if (process.env.NODE_ENV !== 'production') {
  try {
    var result = dotenv.config({ silent: false });

    if (result.error) {
      throw ReferenceError('no .env file found at project root');
    }
  } catch (err) {
    console.log('' + Bright + FgYellow + '[env-loader] ' + Reset + FgYellow + err + Reset);
  }
}
