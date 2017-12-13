'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _schemas = require('./schemas');

Object.keys(_schemas).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _schemas[key];
    }
  });
});

var _JSONLD = require('./JSONLD');

Object.defineProperty(exports, 'JSONLD', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_JSONLD).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }