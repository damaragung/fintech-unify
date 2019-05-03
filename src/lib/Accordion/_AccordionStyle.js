import styled from "react-emotion";
import { css } from "emotion";
import { colors } from "../../styles";

const accordionStyle = css`
  &.accordion-header--bordered {
    padding-bottom: 16px;
    border-bottom: solid 1px #e5e7e9;
  }
  .accordion-header {
    display: flex;
    align-items: center;
    padding-top: 16px;
    padding-right: 16px;
    &__title {
      flex-grow: 1;
      font-weight: 400;
      &--active {
        color: ${colors.blackBase};
        font-weight: 600;
      }
      p {
        color: ${colors.blackLight};
      }
    }
    &__value {
      p {
        color: ${colors.blackLight};
        padding-right: 12px;
      }
    }
    .accordion-arrow {
      position: relative;
      top: -2px;
      transition: transform 0.3s ease-out;
      &--active {
        top: 1px;
        transform: rotate(225deg);
      }
    }
  }
  .accordion-child {
    font-size: 14px;
    color: ${colors.blackLighter};
    padding-right: 16px;
    max-height: 0;
    padding-top: 0;
    overflow: hidden;
    transition: all 0.3s ease-in-out;

    &--active {
      max-height: 1000px;
      padding-top: 16px;
    }
  }
`;

const AccordionGroup = styled("div")`
  position: relative;
  z-index: 2;
  .group-header {
    text-align: left;
    font-size: 22px;
    font-weight: bold;
    &__link {
      float: right;
      font-size: 12px;
      font-weight: normal;
      margin-top: 8px;
      margin-right: 16px;
    }
  }
`;

export { accordionStyle, AccordionGroup };
