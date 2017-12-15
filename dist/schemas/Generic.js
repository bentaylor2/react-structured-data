'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _JSONLDAbstractNode2 = require('../JSONLDAbstractNode');

var _JSONLDAbstractNode3 = _interopRequireDefault(_JSONLDAbstractNode2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChildNode = function (_JSONLDAbstractNode) {
  _inherits(ChildNode, _JSONLDAbstractNode);

  function ChildNode() {
    _classCallCheck(this, ChildNode);

    return _possibleConstructorReturn(this, (ChildNode.__proto__ || Object.getPrototypeOf(ChildNode)).apply(this, arguments));
  }

  _createClass(ChildNode, [{
    key: 'getJSON',
    value: function getJSON() {
      var isFirstChildNode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      var parseChildren = _get(ChildNode.prototype.__proto__ || Object.getPrototypeOf(ChildNode.prototype), 'parseChildren', this).call(this);
      var schema = this.props.schema;
      var details = {
        '@type': this.props.jsonldtype
      };
      return isFirstChildNode ? _extends.apply(undefined, [_extends({}, details, schema)].concat(_toConsumableArray(parseChildren))) : _extends(_defineProperty({}, this.props.id, _extends({}, details, schema, parseChildren)));
    }
  }]);

  return ChildNode;
}(_JSONLDAbstractNode3.default);

exports.default = ChildNode;