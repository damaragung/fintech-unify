"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ftInfo = exports.ftUpload = void 0;

var _emotion = require("emotion");

var _edit = _interopRequireDefault(require("./assets/edit.svg"));

var _expand = _interopRequireDefault(require("./assets/expand.svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\nlabel: ft-form-info;\nfont-size: 14px;\ncolor: rgba(0, 0, 0, 0.54);\n\np {\n  margin: 0;\n}\n\n& .ft-form__img {\n  max-width: 100%;\n  margin-top: 16px;\n}\n\n.retake {\n  margin: 16px 0;\n}\n\ninput {\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  cursor: pointer;\n}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  label: ft-form-upload;\n  margin-bottom: 16px;\n\n  & .ft-upload {\n    margin: 8px 0;\n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    overflow: hidden;\n    border: dashed 1px #e0e0e0;\n    border-radius: 8px;\n    font-size: 12px;\n    color: rgba(0, 0, 0, 0.54);\n    background-size: 30px 30px;\n    min-height: 80px;\n\n    &-info {\n      font-size: 12px;\n    }\n\n    .txt {\n      margin-left: 8px;\n    }\n\n    &--error {\n      border: 1px dashed #D50000;\n      background: #fff;\n      color: #D50000;\n      font-size: 12px;\n    }\n\n    input {\n      position: absolute;\n      top: 0;\n      right: 0;\n      margin: 0;\n      padding: 0;\n      width: 100%;\n      height: 100%;\n      opacity: 0;\n      filter: alpha(opacity=0);\n      cursor: pointer;\n    }\n  }\n\n  & .ft-upload-info {\n    display: inline-block;\n  }\n\n  & .ft-preview {\n    margin: 8px 0;\n\n    &__img {\n      background-position: center center;\n      background-color: #f3f4f5;\n      border-top-right-radius: 8px;\n      border-top-left-radius: 8px;\n      max-height: 165px;\n      height: 165px;\n      background-size: contain;\n      background-repeat: no-repeat;\n    }\n\n    &__action {\n      border-right: 1px solid #E0E0E0;\n      border-left: 1px solid #E0E0E0;\n      border-bottom: 1px solid #E0E0E0;\n      border-bottom-right-radius: 8px;\n      border-bottom-left-radius: 8px;\n      padding: 12px;\n    }\n  }\n\n  & .ft-form__icon {\n    position: relative;\n    display: inline-block;\n    height: 18px;\n    width: 18px;\n    float: right;\n\n    &--edit {\n      background: url(", ") no-repeat 0;\n      background-size: contain;\n    }\n\n    &--expand {\n      background: url(", ") no-repeat 0;\n      background-size: contain;\n      right: 24px;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ftUpload = (0, _emotion.css)(_templateObject(), _edit.default, _expand.default);
exports.ftUpload = ftUpload;
var ftInfo = (0, _emotion.css)(_templateObject2());
exports.ftInfo = ftInfo;