"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _BottomSheetV = _interopRequireDefault(require("unify-react-mobile/build/BottomSheetV2"));

var _Button = _interopRequireDefault(require("unify-react-mobile/build/Button"));

var _LoaderJumper = _interopRequireDefault(require("unify-react-mobile/build/LoaderJumper"));

var _UploadStyle = require("./_UploadStyle");

var _camera = _interopRequireDefault(require("./assets/camera.svg"));

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

var Upload =
/*#__PURE__*/
function (_Component) {
  _inherits(Upload, _Component);

  function Upload(props) {
    var _this;

    _classCallCheck(this, Upload);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Upload).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (e) {
      e.preventDefault();
      var reader = new FileReader();
      var file = e.target.files[0];

      reader.onloadend = function () {
        _this.setState({
          filePhoto: file,
          imgPreview: reader.result,
          displayPhoto: true,
          usePhoto: true,
          displayInfo: false
        });
      };

      reader.readAsDataURL(file);
    });

    _defineProperty(_assertThisInitialized(_this), "toggleDisplayPhoto", function () {
      _this.setState({
        displayPhoto: !_this.state.displayPhoto,
        usePhoto: false,
        displayInfo: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "toggleDisplayInfo", function () {
      _this.setState({
        displayInfo: !_this.state.displayInfo
      });
    });

    _this.state = {
      filePhoto: '',
      imgPreview: '',
      displayPhoto: false,
      usePhoto: false,
      uploadStatus: '',
      displayInfo: false,
      confirmDelete: false
    };
    return _this;
  }

  _createClass(Upload, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react.default.createElement("div", {
        className: (0, _classnames.default)(_UploadStyle.ftUpload)
      }, this.state.imgPreview === '' ? _react.default.createElement(_react.Fragment, null, _react.default.createElement("div", {
        className: (0, _classnames.default)('ft-upload', {
          'ft-upload--error': this.state.uploadStatus === 'Error'
        }),
        onClick: this.toggleDisplayInfo
      }, this.state.ktpStatus === 'Error' ? 'This is error msg' : _react.default.createElement(_react.Fragment, null, _react.default.createElement("img", {
        src: _camera.default,
        width: "32"
      }), _react.default.createElement("span", {
        className: "txt"
      }, "Ambil Foto"))), _react.default.createElement("a", {
        className: "ft-upload-info",
        onClick: this.toggleDisplayInfo
      }, this.props.howToText)) : _react.default.createElement("div", {
        className: "ft-preview"
      }, _react.default.createElement("div", {
        id: "ktp",
        className: "ft-preview__img",
        style: {
          backgroundImage: 'url(' + this.state.imgPreview + ')'
        },
        onClick: this.toggleDisplayPhoto
      }), _react.default.createElement("div", {
        className: "ft-preview__action u-clearfix"
      }, _react.default.createElement("a", {
        className: "ft-upload-info",
        onClick: this.toggleDisplayInfo
      }, this.props.howToText), _react.default.createElement("i", {
        className: "ft-form__icon ft-form__icon--edit",
        onClick: this.toggleDisplayInfo
      }), _react.default.createElement("i", {
        className: "ft-form__icon ft-form__icon--expand",
        onClick: this.toggleDisplayPhoto
      }))), _react.default.createElement(_BottomSheetV.default, {
        withClose: true,
        title: "Panduan Foto KTP",
        onClose: this.toggleDisplayInfo,
        display: this.state.displayInfo
      }, _react.default.createElement("div", {
        className: _UploadStyle.ftInfo + ' ft-mxy'
      }, _react.default.createElement("div", {
        className: "ft-flex"
      }, _react.default.createElement("div", {
        style: {
          flex: '1 1 auto',
          'margin-right': '8px'
        },
        className: "ft-center"
      }, _react.default.createElement("img", {
        src: this.props.correctImg,
        style: {
          width: '100%'
        }
      })), _react.default.createElement("div", {
        style: {
          flex: '1 1 auto',
          'margin-left': '8px'
        },
        className: "ft-center"
      }, _react.default.createElement("img", {
        src: this.props.incorrectImg,
        style: {
          width: '100%'
        }
      }))), _react.default.createElement("p", null, this.props.howToInfo), _react.default.createElement(_Button.default, {
        className: "retake",
        filled: true,
        main: true,
        block: true
      }, _react.default.createElement("input", {
        type: "file",
        onChange: function onChange(e) {
          _this2.handleChange(e);
        }
      }), "Lanjut Ambil Foto"))), _react.default.createElement(_BottomSheetV.default, {
        full: true,
        withClose: true,
        title: "Foto KTP",
        onClose: this.toggleDisplayPhoto,
        display: this.state.displayPhoto
      }, _react.default.createElement("div", {
        className: _UploadStyle.ftInfo + ' ft-mxy'
      }, _react.default.createElement("p", null, this.props.previewInfo), this.state.loading ? _react.default.createElement("div", {
        style: {
          'position': 'relative',
          'height': '200px'
        }
      }, _react.default.createElement(_LoaderJumper.default, null)) : _react.default.createElement("div", {
        className: "u-center"
      }, _react.default.createElement("img", {
        src: this.state.imgPreview,
        className: "ft-form__img"
      })), _react.default.createElement(_Button.default, {
        className: "retake",
        ghost: true,
        alternate: true,
        block: true
      }, _react.default.createElement("input", {
        type: "file",
        onChange: function onChange(e) {
          _this2.handleChange(e);
        }
      }), "Ambil Ulang Foto"), this.state.usePhoto && _react.default.createElement(_Button.default, {
        main: true,
        filled: true,
        block: true,
        onClick: this.toggleDisplayPhoto
      }, "Gunakan Foto"))));
    }
  }]);

  return Upload;
}(_react.Component);

_defineProperty(Upload, "propTypes", {
  type: _propTypes.default.string,
  howToText: _propTypes.default.string,
  correctImg: _propTypes.default.string,
  incorrectImg: _propTypes.default.string,
  howToInfo: _propTypes.default.string,
  previewInfo: _propTypes.default.string
});

_defineProperty(Upload, "defaultProps", {
  type: 'KTP',
  howToText: 'Cara Foto KTP',
  correctImg: 'https://via.placeholder.com/150',
  incorrectImg: 'https://via.placeholder.com/150',
  howToInfo: 'Pastikan foto KTP tidak terpotong & terbaca jelas. Gunakan KTP asli, bukan hasil fotokopi.',
  previewInfo: 'Cek kembali hasil fotomu. Pastikan informasi di KTP terbaca jelas dan tidak terpotong.'
});

var _default = Upload;
exports.default = _default;