"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FintechFooter = void 0;

var _reactEmotion = _interopRequireDefault(require("react-emotion"));

var _ColorStyle = require("../../styles/utils/_ColorStyle");

var _styles = require("../../styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  color: ", ";\n  font-size: 13px;\n  border-top: 1px solid ", ";\n\n  .footer__container {\n    display: flex;\n    height: 84px;\n    width: 100%;\n    justify-content: space-between;\n    align-items: center;\n\n    @media (max-width: ", ") {\n      padding-top: 16px;\n      padding-bottom: 16px;\n      display: block;\n      height: auto;\n      text-align: center;\n    }\n\n    .content {\n      display: inline-block;\n      padding: 0 8px;\n      border-right: 1px solid ", ";\n\n      &:last-child {\n        border-right: 0;\n\n        @media (max-width: ", ") {\n          margin: 0;\n        }\n      }\n\n      @media (max-width: ", ") {\n        display: block;\n        border-right: 0;\n        margin: 16px 0 8px;\n      }\n\n      li {\n        display: inline-block;\n        margin: 0 4px;\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FintechFooter = (0, _reactEmotion.default)("footer")(_templateObject(), _ColorStyle.colors.whiteBase, _ColorStyle.colors.blackLight, _ColorStyle.colors.grayAlto, _styles.breakpoints.medium, _ColorStyle.colors.grayAlto, _styles.breakpoints.medium, _styles.breakpoints.medium);
exports.FintechFooter = FintechFooter;