"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.historyCardStyle = void 0;

var _emotion = require("emotion");

var _styles = require("../../styles");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  .ft-oms {\n    &__status {\n      background-color: #f3fef3;\n      font-size: 11px;\n      text-align: center;\n      color: ", ";\n      padding: 4px 0;\n\n      &.failed {\n        background-color: #fdebec;\n      }\n    }\n\n    &__info {\n      padding: 8px 16px;\n      border-bottom: solid 1px #e5e7e9;\n      display: flex;\n      justify-content: space-between;\n\n      .date {\n        font-size: 10px;\n        color: ", ";\n      }\n\n      .inv {\n        font-size: 12px;\n        color: ", ";\n      }\n\n      .dropdown {\n        width: 5px;\n        height: 5px;\n        border-radius: 50%;\n        background-color: rgba(0, 0, 0, 0.7);\n        box-shadow: 0px 8px 0px rgba(0, 0, 0, 0.7),\n          0px 16px 0px rgba(0, 0, 0, 0.7);\n        float: right;\n        margin-top: 6px;\n\n        @media (max-width: 320px) {\n          width: 4px;\n          height: 4px;\n          box-shadow: 0px 6px 0px rgba(0, 0, 0, 0.7),\n            0px 12px 0px rgba(0, 0, 0, 0.7);\n        }\n      }\n    }\n\n    &__detail {\n      display: flex;\n      align-items: flex-start;\n      padding: 16px;\n      &-wrapper {\n        display: inline-block;\n      }\n      &-list:not(:last-child) {\n        margin-bottom: 12px;\n      }\n\n      .icon {\n        margin-right: 8px;\n        max-width: 40px;\n        float: left;\n        display: inline-block;\n      }\n\n      .label {\n        &--title {\n          font-size: 12px;\n          color: ", ";\n        }\n\n        &--inv {\n          font-weight: bold;\n        }\n\n        &--main {\n          font-size: 12px;\n          color: ", ";\n        }\n\n        &--inv,\n        &--value {\n          font-size: 14px;\n          color: ", ";\n        }\n\n        &--amount {\n          color: #ff5722;\n          font-size: 14px;\n          font-weight: bold;\n        }\n      }\n    }\n\n    &__action {\n      border-top: solid 1px #e5e7e9;\n    }\n\n    &__additional {\n      margin: 12px 16px 0;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var historyCardStyle = (0, _emotion.css)(_templateObject(), _styles.colors.blackLight, _styles.colors.blackLighter, _styles.colors.blackBase, _styles.colors.blackBase, _styles.colors.blackLight, _styles.colors.blackBase);
exports.historyCardStyle = historyCardStyle;