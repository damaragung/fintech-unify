"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Card = _interopRequireDefault(require("unify-react-mobile/build/Card"));

var _Button = _interopRequireDefault(require("unify-react-mobile/build/Button"));

var _Menu = _interopRequireDefault(require("unify-react-mobile/build/Menu"));

var _HistoryCardStyle = require("./_HistoryCardStyle");

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

var HistoryCard =
/*#__PURE__*/
function (_Component) {
  _inherits(HistoryCard, _Component);

  function HistoryCard(props) {
    var _this;

    _classCallCheck(this, HistoryCard);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HistoryCard).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "toggleMenuWaiting", function () {
      _this.setState({
        displayMenuWaiting: !_this.state.displayMenuWaiting
      });
    });

    _defineProperty(_assertThisInitialized(_this), "toggleMenuFailed", function () {
      _this.setState({
        displayMenuFailed: !_this.state.displayMenuFailed
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleHowToPay", function () {
      window.location.href = 'https://www.tokopedia.com/help';
    });

    _defineProperty(_assertThisInitialized(_this), "handleBantuanClick", function () {
      window.location.href = 'https://www.tokopedia.com/help';
    });

    _defineProperty(_assertThisInitialized(_this), "handleToSaldo", function () {
      window.location.href = 'https://www.tokopedia.com/deposit.pl?nref=dside';
    });

    _this.state = {
      displayMenuWaiting: false,
      displayMenuFailed: false
    };
    return _this;
  }

  _createClass(HistoryCard, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react.default.createElement(_Card.default, {
        padding: "0",
        style: {
          position: 'relative'
        }
      }, _react.default.createElement("div", {
        className: _HistoryCardStyle.historyCardStyle
      }, _react.default.createElement("div", {
        className: (0, _classnames.default)('ft-oms__status', {
          failed: this.props.status === 'failed'
        })
      }, this.props.status === 'waiting' && 'Menunggu Pembayaran', this.props.status === 'success' && 'Transaksi Berhasil', this.props.status === 'failed' && 'Transaksi Gagal'), _react.default.createElement("div", {
        className: "ft-oms__info"
      }, _react.default.createElement("a", {
        href: " "
      }, _react.default.createElement("div", {
        className: "date"
      }, "9 Jan 2017"), _react.default.createElement("div", {
        className: "inv"
      }, this.props.id)), this.props.status === 'waiting' && _react.default.createElement("div", {
        className: "dropdown",
        onClick: function onClick(e) {
          e.stopPropagation();

          _this2.toggleMenuWaiting();
        }
      }), this.props.payment && this.props.status === 'failed' && _react.default.createElement("div", {
        className: "dropdown",
        onClick: function onClick(e) {
          e.stopPropagation();

          _this2.toggleMenuFailed();
        }
      })), this.props.payment && this.props.status === 'failed' && _react.default.createElement("div", {
        className: "ft-oms__additional ft-info ft-info--warning"
      }, "Dana dikembalikan ke Saldo Refund"), _react.default.createElement("div", {
        className: "ft-oms__detail"
      }, _react.default.createElement("a", {
        href: " "
      }, _react.default.createElement("img", {
        src: this.props.card_icon,
        className: "icon",
        alt: "modal toko"
      }), _react.default.createElement("div", {
        className: "ft-oms__detail-wrapper"
      }, _react.default.createElement("div", {
        className: "ft-oms__detail-list"
      }, _react.default.createElement("div", {
        className: "label--title"
      }, this.props.payment ? 'Pembayaran Modal Toko' : 'Pencairan Modal Toko'), _react.default.createElement("div", {
        className: "label--inv"
      }, "TX ID: ", this.props.id)), _react.default.createElement("div", {
        className: "ft-oms__detail-list"
      }, _react.default.createElement("div", {
        className: "label--main"
      }, this.props.payment ? 'Nominal Pembayaran' : 'Nominal Pencairan'), _react.default.createElement("div", {
        className: "label--amount"
      }, "Rp", this.props.amount.toLocaleString('ID'))), this.props.due_date && _react.default.createElement("div", {
        className: "ft-oms__detail-list"
      }, _react.default.createElement("div", {
        className: "label--main"
      }, "Batas Waktu Pembayaran"), _react.default.createElement("div", {
        className: "label--value"
      }, this.props.due_date)), this.props.method && _react.default.createElement("div", {
        className: "ft-oms__detail-list"
      }, _react.default.createElement("div", {
        className: "label--main"
      }, "Metode Pembayaran"), _react.default.createElement("div", {
        className: "label--value"
      }, this.props.method))))), this.props.payment && (this.props.status === 'success' ? _react.default.createElement("div", {
        className: "ft-oms__action"
      }, _react.default.createElement(_Button.default, {
        block: true,
        ghost: true,
        style: {
          borderRadius: '0'
        }
      }, "Bantuan")) : this.props.status === 'failed' ? _react.default.createElement("div", {
        className: "ft-oms__action"
      }, _react.default.createElement(_Button.default, {
        block: true,
        ghost: true,
        style: {
          borderRadius: '0'
        }
      }, "Tarik Dana ke Rekening")) : this.props.status === 'waiting' ? _react.default.createElement("div", {
        className: "ft-oms__action"
      }, _react.default.createElement(_Button.default, {
        block: true,
        ghost: true,
        style: {
          borderRadius: '0'
        }
      }, "Cara Bayar")) : '')), _react.default.createElement(_Menu.default, {
        display: this.state.displayMenuWaiting,
        items: [{
          key: 1,
          text: 'Cara Bayar',
          onClick: this.handleHowToPay
        }, {
          key: 2,
          text: 'Bantuan',
          onClick: this.handleBantuanClick
        }],
        actionText: "Tutup",
        onClose: function onClose() {
          return _this2.toggleMenuWaiting();
        },
        onAction: function onAction() {
          return _this2.toggleMenuWaiting();
        }
      }), _react.default.createElement(_Menu.default, {
        display: this.state.displayMenuFailed,
        items: [{
          key: 1,
          text: 'Tarik Dana ke Rekening',
          onClick: this.handleToSaldo
        }, {
          key: 2,
          text: 'Bantuan',
          onClick: this.handleBantuanClick
        }],
        actionText: "Tutup",
        onClose: function onClose() {
          return _this2.toggleMenuFailed();
        },
        onAction: function onAction() {
          return _this2.toggleMenuFailed();
        }
      }));
    }
  }]);

  return HistoryCard;
}(_react.Component);

var _default = HistoryCard;
exports.default = _default;
HistoryCard.propTypes = {
  card_icon: _propTypes.default.string,
  payment: _propTypes.default.bool,
  id: _propTypes.default.string,
  status: _propTypes.default.string,
  date: _propTypes.default.string,
  amount: _propTypes.default.number,
  due_date: _propTypes.default.string,
  method: _propTypes.default.string
};
HistoryCard.defaultProps = {
  card_icon: 'https://ecs7.tokopedia.net/img/fintech/category/mt/colored-active.png',
  payment: false,
  id: 'defaultProps.id',
  status: 'success',
  date: 'defaultProps.date',
  amount: 8888888,
  due_date: 'defaultProps.due_date',
  method: 'defaultProps.method'
};