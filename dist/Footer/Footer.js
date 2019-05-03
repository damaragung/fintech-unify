"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _FooterStyle = require("./_FooterStyle");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Footer =
/*#__PURE__*/
function (_Component) {
  _inherits(Footer, _Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, _getPrototypeOf(Footer).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      var dataFooterDownload = [{
        link: 'https://itunes.apple.com/us/app/tokopedia/id1001394201?ls=1&mt=8',
        img: 'https://ecs7.tokopedia.net/assets/images/store/appstore-new.png',
        alt: 'Appstore'
      }, {
        link: 'https://play.google.com/store/apps/details?id=com.tokopedia.tkpd',
        img: 'https://ecs7.tokopedia.net/assets/images/store/googleplay-new.png',
        alt: 'Playstore'
      }];
      var dataFooterShare = [{
        link: 'https://www.facebook.com/tokopedia/',
        img: 'https://ecs7.tokopedia.net/assets/images/social/facebook-new.png',
        alt: 'Facebook'
      }, {
        link: 'https://www.instagram.com/tokopedia/',
        img: 'https://ecs7.tokopedia.net/assets/images/social/instagram-new.png',
        alt: 'Instagram'
      }, {
        link: 'https://twitter.com/tokopedia/',
        img: 'https://ecs7.tokopedia.net/assets/images/social/twitter-new.png',
        alt: 'Twitter'
      }, {
        link: 'https://www.youtube.com/user/tokopedia',
        img: 'https://ecs7.tokopedia.net/assets/images/social/youtube-new.png',
        alt: 'Youtube'
      }, {
        link: 'https://www.tokopedia.com/blog/',
        img: 'https://ecs7.tokopedia.net/assets/images/social/blog-new.png',
        alt: 'Blog'
      }];
      return _react.default.createElement(_FooterStyle.FintechFooter, null, _react.default.createElement("div", {
        className: "ft-wrapper ft-wrapper--1170 footer__container"
      }, _react.default.createElement("span", {
        className: "footer__copyright"
      }, "\xA9 2009 - 2019, PT Tokopedia"), _react.default.createElement("div", {
        className: "footer__content"
      }, _react.default.createElement("ul", {
        className: "content"
      }, dataFooterDownload.map(function (item, index) {
        return _react.default.createElement("li", {
          key: index
        }, _react.default.createElement("a", {
          href: item.link,
          target: "_blank",
          rel: "noopener noreferrer"
        }, _react.default.createElement("img", {
          src: item.img,
          alt: item.alt,
          height: "30"
        })));
      })), _react.default.createElement("ul", {
        className: "content"
      }, dataFooterShare.map(function (item, index) {
        return _react.default.createElement("li", {
          key: index
        }, _react.default.createElement("a", {
          href: item.link,
          target: "_blank",
          rel: "noopener noreferrer"
        }, _react.default.createElement("img", {
          src: item.img,
          alt: item.alt
        })));
      })))));
    }
  }]);

  return Footer;
}(_react.Component);

var _default = Footer;
exports.default = _default;