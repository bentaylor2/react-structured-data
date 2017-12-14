var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import JSONLDAbstractNode from '../JSONLDAbstractNode';

var ItemReviewed = function (_JSONLDAbstractNode) {
  _inherits(ItemReviewed, _JSONLDAbstractNode);

  function ItemReviewed() {
    _classCallCheck(this, ItemReviewed);

    return _possibleConstructorReturn(this, (ItemReviewed.__proto__ || Object.getPrototypeOf(ItemReviewed)).apply(this, arguments));
  }

  _createClass(ItemReviewed, [{
    key: 'getJSON',
    value: function getJSON() {
      var isFirstChildNode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var schema = arguments[1];

      var parseChildren = _get(ItemReviewed.prototype.__proto__ || Object.getPrototypeOf(ItemReviewed.prototype), 'parseChildren', this).call(this, true);

      if (parseChildren.length > 1) {
        throw new Error('The <ItemReviewed /> component can only contain a single child.');
      }
      var details = _extends({}, parseChildren[0], schema);
      return isFirstChildNode ? _extends(details) : _extends({ itemReviewed: details });
    }
  }]);

  return ItemReviewed;
}(JSONLDAbstractNode);

export default ItemReviewed;