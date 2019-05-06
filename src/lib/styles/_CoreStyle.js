import { injectGlobal } from 'emotion';
import { colors } from './utils/_ColorStyle';
import { variables } from './utils/_VariableStyle';

const coreStyle = injectGlobal`
  html,
  body {
    padding: 0;
    margin: 0;
    line-height: ${20 / 14};
    font-family: 'Open Sans', sans-serif;
    font-size: ${variables.baseFontSize}px;
    color: ${colors.blackBase};
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  a {
    color: ${colors.greenBase};
    text-decoration: none;
    cursor: pointer;
  }

  b,
  strong {
    font-weight: bold;
  }

  input,
  select,
  textarea {
    outline: none;
    border-style: none;
  }

  button {
    &:focus {
      outline: none;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    font-weight: 600;
    margin: 0;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .ft-clearfix::before,
  .ft-clearfix::after {
    content: " ";
    display: table;
  }

  .ft-clearfix::after {
      clear: both;
  }

  .ft-fit {
    max-width: 100%;
  }

  .ft-center {
    text-align: center;
  }

  .ft-right {
    text-align: right;
  }

  .ft-wrapper {
    padding: 0 16px;
    margin: 0 auto;

    &--1170 {
      max-width: 1170px;
    }
  }

  .ft-flex {
    display: flex;
  }

  .ft-flex-justify {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .ft-m0 {
    margin: 0 !important;
  }

  .ft-mt0 {
    margin-top: 0;
  }

  .ft-mt {
    margin-top: 16px;
  }

  .ft-mb {
    margin-bottom: 16px;
  }

  .ft-mb0 {
    margin-bottom: 0;
  }

  .ft-my {
    margin: 16px 0;
  }

  .ft-mxy {
    margin: 16px;
  }

  .ft-pr {
    &--1 {
      padding-right: 8px;
    }
  }

  .ft-pl {
    &--1 {
      padding-left: 8px;
    }
  }

  .ft-info {
    padding: 8px;
    border-radius: 8px;
    font-size: 12px;
    line-height: 1.25;
    color: ${colors.blackLight};

    strong {
      color: ${colors.blackBase};
    }

    &--warning {
      background-color: #fffae6;
    }

    &--default {
      background-color: #f3f4f5;
    }

    &--desc {
      background-color: #ebf6f6;
    }
  }

  .ft-arrow {
    border: solid #9fa6b0;;
    border-width: 0 1px 1px 0;
    display: inline-block;
    padding: 3px;
    transition: all 0.25s;

    &.large {
      border-width: 0 2px 2px 0;
      padding: 4px;
    }

    &.toggle {
      transform: rotate(-135deg);
      -webkit-transform: rotate(-135deg);
    }

    &--right {
      transform: rotate(-45deg);
      -webkit-transform: rotate(-45deg);
      margin-left: 8px;
    }

    &--up {
      transform: rotate(-135deg);
      -webkit-transform: rotate(-135deg);
    }

    &--down {
      transform: rotate(45deg);
      -webkit-transform: rotate(45deg);
    }
  }

  .unf-searchbar__input ~ button {
    display: none;
  }


  .ft-footer-bottom {
    .footer__container {
      padding-bottom: 100px !important;
    }
  }
`;

export { coreStyle };
