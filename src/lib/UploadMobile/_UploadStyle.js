import { css } from 'emotion'

import iconEdit from './assets/edit.svg'
import iconExpand from './assets/expand.svg'

export const ftUpload = css`
  label: ft-form-upload;
  margin-bottom: 16px;

  & .ft-upload {
    margin: 8px 0;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border: dashed 1px #e0e0e0;
    border-radius: 8px;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.54);
    background-size: 30px 30px;
    min-height: 80px;

    &-info {
      font-size: 12px;
    }

    .txt {
      margin-left: 8px;
    }

    &--error {
      border: 1px dashed #D50000;
      background: #fff;
      color: #D50000;
      font-size: 12px;
    }

    input {
      position: absolute;
      top: 0;
      right: 0;
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      filter: alpha(opacity=0);
      cursor: pointer;
    }
  }

  & .ft-upload-info {
    display: inline-block;
  }

  & .ft-preview {
    margin: 8px 0;

    &__img {
      background-position: center center;
      background-color: #f3f4f5;
      border-top-right-radius: 8px;
      border-top-left-radius: 8px;
      max-height: 165px;
      height: 165px;
      background-size: contain;
      background-repeat: no-repeat;
    }

    &__action {
      border-right: 1px solid #E0E0E0;
      border-left: 1px solid #E0E0E0;
      border-bottom: 1px solid #E0E0E0;
      border-bottom-right-radius: 8px;
      border-bottom-left-radius: 8px;
      padding: 12px;
    }
  }

  & .ft-form__icon {
    position: relative;
    display: inline-block;
    height: 18px;
    width: 18px;
    float: right;

    &--edit {
      background: url(${iconEdit}) no-repeat 0;
      background-size: contain;
    }

    &--expand {
      background: url(${iconExpand}) no-repeat 0;
      background-size: contain;
      right: 24px;
    }
  }
`

export const ftInfo = css`
label: ft-form-info;
font-size: 14px;
color: rgba(0, 0, 0, 0.54);

p {
  margin: 0;
}

& .ft-form__img {
  max-width: 100%;
  margin-top: 16px;
}

.retake {
  margin: 16px 0;
}

input {
  position: absolute;
  top: 0;
  right: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  filter: alpha(opacity=0);
  cursor: pointer;
}
`
