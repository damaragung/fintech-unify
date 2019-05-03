"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _SideBar = _interopRequireDefault(require("unify-react-mobile/build/SideBar"));

var _HeaderStyle = require("./_HeaderStyle");

var _SubNavBar = _interopRequireDefault(require("unify-react-mobile/build/SubNavBar"));

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Header =
/*#__PURE__*/
function (_Component) {
  _inherits(Header, _Component);

  function Header(props) {
    var _this;

    _classCallCheck(this, Header);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Header).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "toggleDisplaySidebar", function () {
      _this.setState({
        displaySidebar: !_this.state.displaySidebar
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleToggleSubNavBar", function () {
      _this.setState({
        displaySub: !_this.state.displaySub
      });
    });

    _this.state = {
      displaySidebar: false,
      userLogin: true
    };
    return _this;
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      var dataBridgeWidget = [{
        icon: 'icon icon--marketplace',
        title: 'Jual Beli Online',
        url: 'https://www.tokopedia.com/'
      }, {
        icon: 'icon icon--os',
        title: 'Official Store',
        url: 'https://www.tokopedia.com/official-store/'
      }, {
        icon: 'icon icon--digital',
        title: 'Produk Digital',
        url: 'https://www.tokopedia.com/pulsa/'
      }, {
        icon: 'icon icon--tiket',
        title: 'Tiket Kereta',
        url: 'https://tiket.tokopedia.com/kereta-api/'
      }, {
        icon: 'icon icon--donation',
        title: 'Donasi',
        url: 'https://www.tokopedia.com/berbagi/'
      }, {
        icon: 'icon icon--fintech',
        title: 'Keuangan',
        url: 'https://www.tokopedia.com/keuangan/'
      }];
      return _react.default.createElement(_HeaderStyle.FintechHeader, {
        layout: this.props.layout
      }, _react.default.createElement("div", {
        className: "ft-navbar"
      }, _react.default.createElement("div", {
        className: "ft-wrapper ft-wrapper--1170 header__container"
      }, _react.default.createElement("div", {
        className: "burger__container",
        onClick: this.toggleDisplaySidebar
      }, _react.default.createElement("div", {
        className: "burger__bar"
      }), _react.default.createElement("div", {
        className: "burger__bar"
      }), _react.default.createElement("div", {
        className: "burger__bar"
      })), _react.default.createElement("a", {
        className: "header__logo--wrapper",
        href: "/"
      }, _react.default.createElement("span", {
        className: "header__logo"
      }, "Tokopedia Product")), this.props.layout === 'desktop' && _react.default.createElement("ul", {
        className: "header__menu"
      }, this.state.userLogin ? _react.default.createElement(_react.Fragment, null, _react.default.createElement("li", null, _react.default.createElement("a", {
        href: "#!",
        target: "_blank",
        rel: "noopener noreferrer"
      }, "Other Menu")), _react.default.createElement("li", null, _react.default.createElement("div", {
        className: "header__avatar--wrapper"
      }, _react.default.createElement("img", {
        className: "user__avatar",
        src: "https://ecs7.tokopedia.net/img/cache/100-square/default_v3-usrnophoto1.png",
        alt: "User Avatar"
      }), _react.default.createElement("span", {
        className: "user__name"
      }, "User Name"), _react.default.createElement("div", {
        className: "user__profile__overlay"
      }), _react.default.createElement("div", {
        className: "user__profile--wrapper"
      }, _react.default.createElement("div", {
        className: "user__info"
      }, _react.default.createElement("img", {
        className: "user__avatar large",
        src: "https://ecs7.tokopedia.net/img/cache/100-square/default_v3-usrnophoto1.png",
        alt: "User Avatar"
      }), _react.default.createElement("div", {
        className: "user__account"
      }, _react.default.createElement("p", {
        className: "ft-truncate"
      }, _react.default.createElement("strong", null, "User Name")), _react.default.createElement("p", {
        className: "ft-truncate"
      }, "user.name@tokopedia.com"))), _react.default.createElement("div", {
        className: "user__saldo"
      }, _react.default.createElement("span", null, "OVO Cash"), _react.default.createElement("span", {
        className: "ft-right"
      }, _react.default.createElement("strong", null, "Rp8.888.888")), _react.default.createElement("span", null, "OVO Points"), _react.default.createElement("span", {
        className: "ft-right"
      }, _react.default.createElement("strong", null, "Rp88.888"))), _react.default.createElement("a", {
        href: "#!",
        className: (0, _classnames.default)(_HeaderStyle.IconHeader, 'link__logout')
      }, _react.default.createElement("i", {
        className: "icon icon--logout"
      }), "Keluar"))))) : _react.default.createElement(_react.Fragment, null, _react.default.createElement("li", null, _react.default.createElement("a", {
        href: "#!",
        target: "_blank",
        rel: "noopener noreferrer"
      }, "Menu 1")), _react.default.createElement("li", null, _react.default.createElement("a", {
        href: "#!",
        target: "_blank",
        rel: "noopener noreferrer"
      }, "Menu 2")), _react.default.createElement("li", null, _react.default.createElement("a", {
        className: "menu__button",
        href: "#!"
      }, "Masuk"))), _react.default.createElement("li", null, _react.default.createElement("div", {
        className: "bridge-widget"
      }, _react.default.createElement("div", {
        className: "bridge-widget__overlay"
      }), _react.default.createElement("div", {
        className: (0, _classnames.default)('bridge-widget--wrapper', _HeaderStyle.IconHeader)
      }, dataBridgeWidget.map(function (item, index) {
        return _react.default.createElement("a", {
          key: index,
          className: "bridge-widget__item",
          href: item.url
        }, _react.default.createElement("i", {
          className: item.icon
        }), _react.default.createElement("p", null, item.title));
      }))))))), this.props.layout === 'mobile' && _react.default.createElement(_react.Fragment, null, _react.default.createElement(_SideBar.default, {
        noAnim: true,
        display: this.state.displaySidebar,
        onClose: this.toggleDisplaySidebar,
        userData: {
          username: this.props.userData.username,
          wallet: this.props.userData.wallet,
          points: this.props.userData.points
        },
        listItems: [{
          text: 'Belanja',
          description: 'Beli segala macam produk kebutuhanmu',
          arrow: true,
          onClick: function onClick() {
            window.location.href = 'https://m.tokopedia.com/kategori-belanja';
          },
          props: {
            'data-cy': 'Shopping'
          }
        }, {
          text: 'Top up & Tagihan',
          description: 'Isi ulang pulsa, voucher game, dan lain lain',
          arrow: true,
          onClick: function onClick() {
            window.location.href = 'https://m.tokopedia.com/kategori-lainnya?tab=2';
          },
          props: {
            'data-cy': 'TopUp'
          }
        }, {
          text: 'Travel',
          description: 'Bayar tagihan BPJS, air PDAM, dan lain lain',
          arrow: true,
          onClick: function onClick() {
            window.location.href = 'https://m.tokopedia.com/kategori-lainnya?tab=3';
          },
          props: {
            'data-cy': 'Travel'
          }
        }, {
          text: 'Entertainment',
          description: 'Pesan tiket perjalanan hingga tiket event',
          arrow: true,
          onClick: function onClick() {
            window.location.href = 'https://m.tokopedia.com/kategori-lainnya?tab=5';
          },
          props: {
            'data-cy': 'Entertainment'
          }
        }, {
          text: 'Pinjaman & Investasi',
          description: 'Cek deals terbaik untuk semua aktivitas',
          arrow: true,
          onClick: function onClick() {
            window.location.href = 'https://m.tokopedia.com/kategori-lainnya?tab=7';
          },
          props: {
            'data-cy': 'Invest'
          }
        }, {
          text: 'Pengajuan',
          description: 'Ajukan pinjaman, kartu kredit, dan asuransi',
          arrow: true,
          onClick: function onClick() {
            window.location.href = 'https://m.tokopedia.com/kategori-lainnya?tab=7';
          },
          props: {
            'data-cy': 'Submission'
          }
        }, {
          text: 'Donasi',
          description: 'Mulai berdonasi dan berzakat untuk segala',
          arrow: true,
          onClick: function onClick() {
            window.location.href = 'https://m.tokopedia.com/kategori-lainnya?tab=2';
          },
          props: {
            'data-cy': 'Donate'
          }
        }, {
          text: 'Gold Merchant & TopAds',
          description: 'Berinvestasi Reksadana dan Emas',
          arrow: true,
          onClick: function onClick() {
            window.location.href = 'https://m.tokopedia.com/kategori-lainnya?tab=9';
          },
          props: {
            'data-cy': 'GMTopAds'
          }
        }],
        url: {
          home: function home() {
            return window.location.href = 'https://m.tokopedia.com/';
          },
          profile: 'https://m.tokopedia.com/user/profile',
          register: 'https://m.tokopedia.com/register',
          googleLogin: 'https://m.tokopedia.com/login',
          fbLogin: function fbLogin() {
            return console.log('login');
          },
          phoneLogin: 'https://m.tokopedia.com/login',
          otherLogin: 'https://m.tokopedia.com/login',
          wallet: {
            img: 'https://ecs7.tokopedia.net/img/ovo-logo.png',
            title: 'OVO',
            url: 'https://www.ovo.id/'
          },
          // wallet: 'https://www.tokocash.com/topup',
          tokopoints: 'https://m.tokopedia.com/tokopoints',
          promo: 'https://www.tokopedia.com/promo/',
          contactUs: 'https://m.tokopedia.com/help/problem',
          help: 'https://m.tokopedia.com/help',
          logout: 'https://m.tokopedia.com/logout',
          referral: 'https://www.tokopedia.com/referral/'
        }
      }), this.props.subNavBar && _react.default.createElement(_SubNavBar.default, {
        className: "ft-subnavbar",
        display: this.state.displaySub,
        title: {
          text: 'Product Name',
          link: '/'
        },
        menuList: this.props.subNavBar,
        onClick: this.handleToggleSubNavBar,
        onClose: this.handleToggleSubNavBar
      })));
    }
  }]);

  return Header;
}(_react.Component);

var _default = Header;
exports.default = _default;
Header.defaultProps = {
  userData: {
    username: 'username',
    wallet: 888888,
    points: 888
  },
  layout: 'mobile'
};