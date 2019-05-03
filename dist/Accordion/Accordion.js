"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _AccordionStyle = require("./_AccordionStyle");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Accordion =
/*#__PURE__*/
function (_Component) {
  _inherits(Accordion, _Component);

  function Accordion(props) {
    var _this;

    _classCallCheck(this, Accordion);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Accordion).call(this, props));
    _this.state = {
      showChild: false
    };
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Accordion, [{
    key: "handleClick",
    value: function handleClick() {
      var showChild = this.state.showChild;
      this.setState({
        showChild: !showChild
      });
    }
  }, {
    key: "renderChild",
    value: function renderChild() {
      var children = this.props.children;
      var showChild = this.state.showChild;

      if (showChild && children) {
        return children;
      } else {
        return null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var showChild = this.state.showChild;
      var _this$props = this.props,
          title = _this$props.title,
          value = _this$props.value,
          isBordered = _this$props.isBordered;
      return _react.default.createElement("div", {
        onClick: this.handleClick,
        className: (0, _classnames.default)(_AccordionStyle.accordionStyle, {
          'accordion-header--bordered': isBordered
        })
      }, _react.default.createElement("div", {
        className: (0, _classnames.default)('accordion-header', {
          'accordion-header--bordered': isBordered
        })
      }, _react.default.createElement("div", {
        className: (0, _classnames.default)('accordion-header__title', {
          'accordion-header__title--active': showChild
        })
      }, _react.default.createElement("p", null, title)), _react.default.createElement("div", {
        className: (0, _classnames.default)('accordion-header__value')
      }, _react.default.createElement("p", null, value)), _react.default.createElement("div", {
        className: "ft-arrow accordion-arrow ft-arrow--down ".concat(showChild ? 'accordion-arrow--active' : '', " ")
      })), _react.default.createElement("div", {
        className: (0, _classnames.default)('accordion-child', {
          'accordion-child--active': showChild
        })
      }, this.renderChild()));
    }
  }]);

  return Accordion;
}(_react.Component);

var _default = Accordion;
exports.default = _default;
Accordion.propTypes = {
  title: _propTypes.default.string,
  value: _propTypes.default.string,
  isBordered: _propTypes.default.bool,
  children: _propTypes.default.any
};
Accordion.defaultProps = {
  title: 'accordion title',
  value: '',
  isBordered: false,
  children: 'accordion content Lorem ipsum blablabla'
};