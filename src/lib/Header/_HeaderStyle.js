import styled from "react-emotion";
import { css } from "emotion";
import { colors, breakpoints } from "../../styles/";

import LogoFintechProduct from "./assets/logo-product-name.png";
import IconMarketplace from "./assets/icon-bw-marketplace.png";
import IconOs from "./assets/icon-bw-os.png";
import IconDigital from "./assets/icon-bw-digital.png";
import IconTiket from "./assets/icon-bw-tiket.png";
import IconDonation from "./assets/icon-bw-donation.png";
import IconFintech from "./assets/icon-bw-fintech.png";

import IconLogout from "./assets/icon-logout.svg";

/* eslint-disable */
const LogoTokopediaWhite =
  "https://cdn7.tokopedia.net/img/ovo/logo-tokopedia.png";
const IconBridgeWidget =
  "https://ecs7.tokopedia.net/assets-giftcard-frontend/production/ecb263d773d0ad10077beb2f7acd491b.png";
/* eslint-enable */

export const IconHeader = css`
  .icon {
    display: block;
    height: 35px;
    width: 35px;
    margin: auto;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }

  .icon--marketplace {
    background-image: url(${IconMarketplace});
  }

  .icon--os {
    background-image: url(${IconOs});
  }

  .icon--digital {
    background-image: url(${IconDigital});
  }

  .icon--tiket {
    background-image: url(${IconTiket});
  }

  .icon--donation {
    background-image: url(${IconDonation});
  }

  .icon--fintech {
    background-image: url(${IconFintech});
  }

  .icon--logout {
    background-image: url(${IconLogout});
  }
`;

const FintechHeader = styled("header")`
  .ft-navbar {
    position: fixed;
    top: 0;
    left: 0;
    display: block;
    height: 52px;
    width: 100%;
    background-color: ${colors.whiteBase};
    z-index: 36;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);

    @media (max-width: ${breakpoints.medium}) {
      background-color: ${colors.greenBase};
    }
  }
  .ft-subnavbar {
    margin-top: 52px;
  }

  .burger__container {
    display: none;

    @media (max-width: ${breakpoints.medium}) {
      display: block;
      margin-right: 16px;
    }

    .burger__bar {
      height: 2px;
      width: 18px;
      background-color: ${colors.whiteBase};
      border-radius: 2px;

      &:nth-child(2) {
        margin: 4px 0;
      }
    }
  }

  .header__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 8;

    @media (max-width: ${breakpoints.medium}) {
      justify-content: left;
    }
  }

  .header__logo--wrapper {
    padding: 12px 0;
    display: block;
    width: 250px;
    height: 52px;
    background-color: ${colors.transparent};
    background-position: 50%;
    background-repeat: no-repeat;

    @media (max-width: ${breakpoints.medium}) {
      padding: 10px 0;
      width: 125px;
    }

    .header__logo {
      display: block;
      width: 250px;
      height: 35px;
      text-indent: -9999px;
      background-image: url(${LogoFintechProduct});
      background-size: contain;
      background-repeat: no-repeat;

      @media (max-width: ${breakpoints.medium}) {
        width: 125px;
        background-image: url(${LogoTokopediaWhite});
      }
    }
  }

  .header__menu {
    font-size: 13px;

    @media (max-width: ${breakpoints.medium}) {
      display: none;
    }

    li {
      display: inline-block;
      margin: 0 8px;
      vertical-align: middle;

      &:first-child {
        margin-left: 0;
      }

      &:last-child {
        margin-right: 0;
      }

      a {
        color: ${colors.blackLight};
        transition: color 0.3s ease-in-out;

        &:hover {
          color: ${colors.greenBase};
        }

        &.menu__button {
          padding: 8px 16px;
          border: 1px solid ${colors.grayAlto};
          border-radius: 4px;

          &:hover {
            color: ${colors.blackLight};
          }
        }
      }

      .header__avatar--wrapper {
        position: relative;
        padding: 4px 6px;
        background-color: ${colors.whiteBase};
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s ease-in-out;

        &:hover {
          background-color: ${colors.graySeashell};
        }

        &:hover > .user__name {
          color: ${colors.greenBase};
        }

        &:hover > .user__profile__overlay {
          opacity: 1;
          visibility: visible;
        }

        &:hover > .user__profile__overlay:hover {
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.3s ease-in-out 0.05s,
            visibility 0.3s ease-in-out 0.05s;
        }

        &:hover > .user__profile--wrapper {
          top: 42px;
          opacity: 1;
          visibility: visible;
        }

        .user__avatar {
          height: 24px;
          width: 24px;
          margin-right: 8px;
          display: inline-block;
          border-radius: 999px;
          border: 2px solid ${colors.whiteBase};
          vertical-align: middle;

          &.large {
            height: 48px;
            width: 48px;
            margin-right: 16px;
          }
        }

        .user__name {
          display: inline-block;
          color: ${colors.blackLight};
          font-size: 12px;
          vertical-align: middle;
          transition: color 0.3s ease-in-out;
        }

        .user__profile__overlay {
          position: fixed;
          top: 52px;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.38);
          z-index: 4;
          height: calc(100vh - 52px);
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.3s ease-in-out 0.05s,
            visibility 0.3s ease-in-out 0.05s;

          &:hover + .user__profile--wrapper {
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s ease-in-out 0.25s,
              visibility 0.3s ease-in-out 0.25s, top 0.3s ease-in-out 0.25s;
          }
        }

        .user__profile--wrapper {
          position: absolute;
          top: 34px;
          right: -6px;
          width: 300px;
          padding: 16px;
          font-size: 12px;
          background-color: ${colors.whiteBase};
          border: 1px solid ${colors.grayAlto};
          border-radius: 0 0 8px 8px;
          z-index: 5;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.3s ease-in-out 0.25s,
            visibility 0.3s ease-in-out 0.25s, top 0.3s ease-in-out 0.25s;

          &::before {
            content: "";
            display: block;
            position: absolute;
            top: -7px;
            right: 12px;
            width: 12px;
            height: 12px;
            transform: rotate(45deg);
            background-color: ${colors.whiteBase};
            border-top: 1px solid ${colors.grayAlto};
            border-left: 1px solid ${colors.grayAlto};
          }

          .user__info {
            padding: 8px 12px;
            display: flex;
            align-items: center;
            border-radius: 4px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            background: ${colors.whiteBase};
          }

          .user__account {
            width: calc(100% - 64px);

            p:first-child {
              margin: 0;
              font-size: 16px;
            }

            p:last-child {
              margin: 0;
              color: ${colors.blackLight};
              font-size: 11px;
            }
          }

          .user__saldo {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 8px;
            margin: 16px 0;
            padding: 8px 0 16px;
            border-bottom: 1px solid ${colors.grayAlto};

            a {
              color: ${colors.greenBase};
            }
          }

          .link__logout {
            vertical-align: middle;
            transition: opacity 0.3s ease-in-out;

            &:hover {
              opacity: 0.7;
              color: ${colors.blackLight};
            }

            .icon {
              height: 18px;
              width: 18px;
              display: inline-block;
              margin-right: 8px;
              vertical-align: middle;
            }
          }
        }
      }

      .bridge-widget:hover > .bridge-widget--wrapper {
        top: 52px;
        opacity: 1;
        visibility: visible;
      }

      .bridge-widget:hover > .bridge-widget__overlay {
        opacity: 1;
        visibility: visible;
      }

      .bridge-widget:hover > .bridge-widget__overlay:hover {
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s ease-in-out 0.05s,
          visibility 0.3s ease-in-out 0.05s;
      }

      .bridge-widget__overlay:hover + .bridge-widget--wrapper {
        top: 44px;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s ease-in-out 0.25s,
          visibility 0.3s ease-in-out 0.25s, top 0.3s ease-in-out 0.25s;
      }

      .bridge-widget {
        display: block;
        position: relative;
        height: 25px;
        width: 25px;
        padding: 26px 0;
        background-image: url(${IconBridgeWidget});
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        cursor: pointer;

        &--wrapper {
          position: absolute;
          top: 44px;
          right: -6px;
          width: 250px;
          padding: 16px;
          background-color: ${colors.whiteBase};
          border: 1px solid ${colors.grayAlto};
          border-radius: 0 0 8px 8px;
          z-index: 5;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.3s ease-in-out 0.25s,
            visibility 0.3s ease-in-out 0.25s, top 0.3s ease-in-out 0.25s;

          &::before {
            content: "";
            display: block;
            position: absolute;
            top: -7px;
            right: 12px;
            width: 12px;
            height: 12px;
            transform: rotate(45deg);
            background-color: ${colors.whiteBase};
            border-top: 1px solid ${colors.grayAlto};
            border-left: 1px solid ${colors.grayAlto};
          }
        }

        &__item {
          width: 50%;
          padding: 16px 8px;
          display: inline-block;
          text-align: center;
          border-radius: 4px;
          background-color: ${colors.transparent};
          transition: background-color 0.3s ease-in-out,
            box-shadow 0.3s ease-in-out;

          &:hover {
            background-color: ${colors.greenFeta};
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }

          p {
            margin: 10px 0 0;
            font-size: 11px;
            color: ${colors.blackLight};
          }
        }

        .bridge-widget__overlay {
          position: fixed;
          top: 52px;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.38);
          z-index: 4;
          height: calc(100vh - 52px);
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.3s ease-in-out 0.05s,
            visibility 0.3s ease-in-out 0.05s;
        }
      }
    }
  }
`;

export { FintechHeader };
