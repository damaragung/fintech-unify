import { css } from 'emotion';
import styled from 'react-emotion';
import { colors } from '../../styles/utils/_ColorStyle';

import IconCoupon from './assets/icon-coupon.svg';
import IconClose from './assets/icon-close-gray.svg';
import IconClock from './assets/icon-clock.png';
import IconMoney from './assets/icon-money.png';

const FintechIcon = styled('i')`
  label: fintech-icon;
  display: inline-block;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  &.icon--coupon {
    background-image: url(${IconCoupon});
    height: 32px;
    width: 32px;
  }

  &.icon--close {
    background-image: url(${IconClose});
    height: 16px;
    width: 16px;
    position: relative;
    z-index: 2;
  }

  &.icon--clock {
    background-image: url(${IconClock});
    height: 24px;
    width: 24px;
    vertical-align: middle;
  }

  &.icon--money {
    background-image: url(${IconMoney});
    height: 24px;
    width: 24px;
    vertical-align: middle;
  }
`;

const TriggerContainer = styled('div')`
  label: trigger-container;
  padding: 16px;

  .ft-promo-trigger__container {
    padding: 6px 16px 6px 12px;
    margin: 0;
    background-color: ${colors.whiteBase};
    background-image: url('https://ecs7.tokopedia.net/assets-tokopedia-lite/v2/atreus/production/32273b0f.png');
    background-position: right center;
    background-repeat: no-repeat;
    border-left: 4px solid ${colors.transparent};
    border-radius: 8px;
    overflow: hidden;

    &.filled {
      padding: 12px 16px 12px 12px;
      background-position: right top;
      border-color: ${colors.greenBase};
      border-radius: 4px;

      .promo-trigger__content {
        align-items: flex-start;
      }
    }

    .promo-trigger__content {
      display: flex;
      align-items: center;

      .text {
        margin: 0;
        font-size: 12px;
        font-weight: 600;
        cursor: pointer;

        &--secondary {
          margin-top: 4px;
          color: ${colors.blackLight};
          font-weight: normal;
        }

        &__container {
          padding-right: 24px;
        }
      }

      &.promo-empty {
        .text {
          margin-left: 8px;
          color: ${colors.greenBase};
        }
      }

      &.promo-filled {
        justify-content: space-between;

        .text {
          color: ${colors.blackBase};
        }
      }
    }
  }
`;

const BoxContainer = styled('div')`
  label: box-container;

  .ft-promo-box__container {
    margin: 0;
    display: flex;
    align-items: center;
    border-radius: 8px;

    .promo__input--wrapper {
      width: calc(100% - 90px);
      padding-right: 16px;
    }

    .promo__input {
      margin-bottom: 0;
    }
  }
`;

const CardContainer = styled('div')`
  label: card-container;
  margin-top: 32px;

  .title {
    margin: 0 0 16px;
    color: ${colors.blackLight};
  }

  .ft-promo-card__empty--wrapper {
    img {
      max-width: 100%;
    }
  }

  .ft-promo-card__container {
    padding: 0;
    margin: 0 0 16px;
    overflow: hidden;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .promo__banner--wrapper {
    display: block;
  }

  .promo__banner {
    display: block;
    width: 100%;
    min-height: 80px;
    object-fit: contain;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    margin: 0px auto;
    -webkit-mask: url('https://ecs7.tokopedia.net/mutualfund/img/background/coupon-mask.svg') 0px 0px / 100% 100%;
  }

  .promo__detail--wrapper {
    padding: 16px;
    display: flex;
    justify-content: space-between;

    .promo__detail {
      width: 48%;
    }

    .text--wrapper {
      width: calc(100% - 24px);
      display: inline-block;
      padding-left: 8px;
      vertical-align: middle;

      .label {
        margin: 0;
        color: ${colors.blackLight};
        font-size: 10px;
      }

      .value {
        margin: 0;
        font-size: 12px;
      }
    }
  }

  .promo__cta--wrapper {
    padding: 8px 16px;
    border-top: 1px solid ${colors.grayAlto};
  }
`;

const promoCodeStyle = css`
  label: promo-code;
`;

export { FintechIcon, TriggerContainer, BoxContainer, CardContainer, promoCodeStyle };
