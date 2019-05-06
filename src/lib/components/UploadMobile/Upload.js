import React, { Component, Fragment } from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import BottomSheetV2 from 'unify-react-mobile/build/BottomSheetV2';
import Button from 'unify-react-mobile/build/Button';
import LoaderJumper from 'unify-react-mobile/build/LoaderJumper';

import { ftUpload, ftInfo } from './_UploadStyle';
import iconCamera from './assets/camera.svg';

class Upload extends Component {
  static propTypes = {
    type: PropTypes.string,
    howToText: PropTypes.string,
    correctImg: PropTypes.string,
    incorrectImg: PropTypes.string,
    howToInfo: PropTypes.string,
    previewInfo: PropTypes.string,
  };

  static defaultProps = {
    type: 'KTP',
    howToText: 'Cara Foto KTP',
    correctImg: 'https://via.placeholder.com/150',
    incorrectImg: 'https://via.placeholder.com/150',
    howToInfo: 'Pastikan foto KTP tidak terpotong & terbaca jelas. Gunakan KTP asli, bukan hasil fotokopi.',
    previewInfo: 'Cek kembali hasil fotomu. Pastikan informasi di KTP terbaca jelas dan tidak terpotong.',
  };

  constructor (props) {
    super(props)

    this.state = {
      filePhoto: '',
      imgPreview: '',
      displayPhoto: false,
      usePhoto: false,
      uploadStatus: '',
      displayInfo: false,
      confirmDelete: false
    }
  }

  handleChange = (e) => {
    e.preventDefault()

    let reader = new FileReader()
    let file = e.target.files[0]

    reader.onloadend = () => {
      this.setState({
        filePhoto: file,
        imgPreview: reader.result,
        displayPhoto: true,
        usePhoto: true,
        displayInfo: false
      })
    }

    reader.readAsDataURL(file)
  }

  toggleDisplayPhoto = () => {
    this.setState({
      displayPhoto: !this.state.displayPhoto,
      usePhoto: false,
      displayInfo: false
    })
  }

  toggleDisplayInfo = () => {
    this.setState({ displayInfo: !this.state.displayInfo })
  }

  render() {
    return (
      <div className={ClassNames(ftUpload)}>
        { this.state.imgPreview === '' ? (
          <Fragment>
            <div className={ClassNames('ft-upload', { 'ft-upload--error': this.state.uploadStatus === 'Error' })}
              onClick={this.toggleDisplayInfo}>
              {/* please user loader below if image is uploading */}
              {this.state.ktpStatus === 'Error' ? (
                'This is error msg'
              ) : (
                <Fragment>
                  <img src={iconCamera} width="32" />
                  <span className="txt">Ambil Foto</span>
                </Fragment>
              )}
            </div>
            <a className="ft-upload-info" onClick={this.toggleDisplayInfo}>{this.props.howToText}</a>
          </Fragment>
        ) : (
          <div className="ft-preview">
            <div id="ktp" className="ft-preview__img"
              style={{ backgroundImage: 'url(' + this.state.imgPreview + ')' }}
              onClick={this.toggleDisplayPhoto} />
            <div className="ft-preview__action u-clearfix">
              <a className="ft-upload-info" onClick={this.toggleDisplayInfo}>{this.props.howToText}</a>
              <i className="ft-form__icon ft-form__icon--edit"
                onClick={this.toggleDisplayInfo} />
              <i className="ft-form__icon ft-form__icon--expand"
                onClick={this.toggleDisplayPhoto} />
            </div>
          </div>
        )}

        <BottomSheetV2 withClose title="Panduan Foto KTP"
          onClose={this.toggleDisplayInfo}
          display={this.state.displayInfo}
        >
          <div className={ftInfo + ' ft-mxy'}>
            <div className="ft-flex">
              <div style={{ flex: '1 1 auto', 'margin-right': '8px' }} className="ft-center">
                <img src={this.props.correctImg} style={{ width: '100%' }} />
              </div>
              <div style={{ flex: '1 1 auto', 'margin-left': '8px' }} className="ft-center">
                <img src={this.props.incorrectImg} style={{ width: '100%' }} />
              </div>
            </div>
            <p>
              {this.props.howToInfo}
            </p>
            <Button className="retake" filled main block>
              <input type="file" onChange={(e) => { this.handleChange(e) }} />
              Lanjut Ambil Foto
            </Button>
          </div>
        </BottomSheetV2>

        <BottomSheetV2 full withClose title="Foto KTP"
          onClose={this.toggleDisplayPhoto}
          display={this.state.displayPhoto}
        >
          <div className={ftInfo + ' ft-mxy'}>
            <p>{this.props.previewInfo}</p>
            { this.state.loading ? (
              <div style={{ 'position': 'relative', 'height': '200px' }}>
                <LoaderJumper />
              </div>
            ) : (
              <div className="u-center">
                <img src={this.state.imgPreview} className="ft-form__img" />
              </div>
            )}
            <Button className="retake" ghost alternate block>
              <input type="file" onChange={(e) => { this.handleChange(e) }} />
              Ambil Ulang Foto
            </Button>
            { this.state.usePhoto &&
              <Button main filled block onClick={this.toggleDisplayPhoto}>Gunakan Foto</Button>
            }
          </div>
        </BottomSheetV2>

      </div>
    )
  }
}

export default Upload;
