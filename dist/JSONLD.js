var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';

var JSONLD = function JSONLD(props) {
  var json = null;
  if (props.children) {
    var ChildClass = props.children.type;

    var _props$children$props = props.children.props,
        children = _props$children$props.children,
        type = _props$children$props.type,
        schema = _objectWithoutProperties(_props$children$props, ['children', 'type']);

    var firstChild = new ChildClass(props.children.props).getJSON(true, schema);
    json = ChildClass.name === 'JSONLDNodeCollection' ? _extends({ '@context': 'http://schema.org/' }, _defineProperty({}, type, firstChild)) : _extends({ '@context': 'http://schema.org/' }, firstChild);
  }
  return React.createElement(
    'script',
    { type: 'application/ld+json' },
    JSON.stringify(json)
  );
};

export { JSONLD };
JSONLD.propTypes = {
  additionalType: PropTypes.object
};

export default JSONLD;