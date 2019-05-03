"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wrapper = void 0;

var _reactEmotion = _interopRequireDefault(require("react-emotion"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  max-width: 576px;\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 2;\n  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.12);\n  transition: transform 0.4s ease-in-out;\n  transform: translate(0, ", ");\n  font-size: 12px;\n  margin: auto;\n  text-align: center;\n  background: #fff;\n  padding: ", ";\n  .caption {\n    margin-bottom: 8px;\n    font-weight: bold;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = (0, _reactEmotion.default)("div")(_templateObject(), function (props) {
  return props.sticky ? "0" : "200px";
}, function (props) {
  return props.noPadding ? "0" : "16px";
});
exports.Wrapper = Wrapper;