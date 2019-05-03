"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AccordionGroup = exports.accordionStyle = void 0;

var _reactEmotion = _interopRequireDefault(require("react-emotion"));

var _emotion = require("emotion");

var _styles = require("../../styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  z-index: 2;\n  .group-header {\n    text-align: left;\n    font-size: 22px;\n    font-weight: bold;\n    &__link {\n      float: right;\n      font-size: 12px;\n      font-weight: normal;\n      margin-top: 8px;\n      margin-right: 16px;\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  &.accordion-header--bordered {\n    padding-bottom: 16px;\n    border-bottom: solid 1px #e5e7e9;\n  }\n  .accordion-header {\n    display: flex;\n    align-items: center;\n    padding-top: 16px;\n    padding-right: 16px;\n    &__title {\n      flex-grow: 1;\n      font-weight: 400;\n      &--active {\n        color: ", ";\n        font-weight: 600;\n      }\n      p {\n        color: ", ";\n      }\n    }\n    &__value {\n      p {\n        color: ", ";\n        padding-right: 12px;\n      }\n    }\n    .accordion-arrow {\n      position: relative;\n      top: -2px;\n      transition: transform 0.3s ease-out;\n      &--active {\n        top: 1px;\n        transform: rotate(225deg);\n      }\n    }\n  }\n  .accordion-child {\n    font-size: 14px;\n    color: ", ";\n    padding-right: 16px;\n    max-height: 0;\n    padding-top: 0;\n    overflow: hidden;\n    transition: all 0.3s ease-in-out;\n\n    &--active {\n      max-height: 1000px;\n      padding-top: 16px;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var accordionStyle = (0, _emotion.css)(_templateObject(), _styles.colors.blackBase, _styles.colors.blackLight, _styles.colors.blackLight, _styles.colors.blackLighter);
exports.accordionStyle = accordionStyle;
var AccordionGroup = (0, _reactEmotion.default)("div")(_templateObject2());
exports.AccordionGroup = AccordionGroup;