'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var JSONLDAbstractNode = function (_React$Component) {
  _inherits(JSONLDAbstractNode, _React$Component);

  function JSONLDAbstractNode() {
    _classCallCheck(this, JSONLDAbstractNode);

    return _possibleConstructorReturn(this, (JSONLDAbstractNode.__proto__ || Object.getPrototypeOf(JSONLDAbstractNode)).apply(this, arguments));
  }

  _createClass(JSONLDAbstractNode, [{
    key: 'getChildJSON',
    value: function getChildJSON(child, isCollection) {
      var ChildClass = child.type;

      var _child$props = child.props,
          type = _child$props.type,
          id = _child$props.id,
          parentID = _child$props.parentID,
          schema = _objectWithoutProperties(_child$props, ['type', 'id', 'parentID']);

      if (!!parentID) schema = { '@id': parentID };
      if (!!id) schema = _extends({}, schema, {
        "@id": id
      });
      var newChildren = new ChildClass(child.props).getJSON(!!type || isCollection, schema);
      return !!type ? _extends(_defineProperty({}, type, newChildren)) : newChildren;
    }
  }, {
    key: 'parseChildren',
    value: function parseChildren() {
      var _this2 = this;

      var isCollection = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (!this.props.children) return {};
      /*
       * If a component has a single child, this.props.children is a Child object.
       * If a component has multiple children, this.props.children is an array of Child objects.
       */
      if (this.props.children.length > 0) {
        return this.props.children.map(function (child) {
          if (!child) return {};
          _this2.getChildJSON(child, isCollection);
        });
      }
      return [this.getChildJSON(this.props.children, isCollection)];
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return JSONLDAbstractNode;
}(_react2.default.Component);

JSONLDAbstractNode.propTypes = {
  schema: _propTypes2.default.object,
  type: _propTypes2.default.string,
  id: _propTypes2.default.string,
  jsonldtype: _propTypes2.default.string
};
exports.default = JSONLDAbstractNode;