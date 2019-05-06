import { css } from "emotion";
import { colors } from "../../styles";

const historyCardStyle = css`
  .ft-oms {
    &__status {
      background-color: #f3fef3;
      font-size: 11px;
      text-align: center;
      color: ${colors.blackLight};
      padding: 4px 0;

      &.failed {
        background-color: #fdebec;
      }
    }

    &__info {
      padding: 8px 16px;
      border-bottom: solid 1px #e5e7e9;
      display: flex;
      justify-content: space-between;

      .date {
        font-size: 10px;
        color: ${colors.blackLighter};
      }

      .inv {
        font-size: 12px;
        color: ${colors.blackBase};
      }

      .dropdown {
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: rgba(0, 0, 0, 0.7);
        box-shadow: 0px 8px 0px rgba(0, 0, 0, 0.7),
          0px 16px 0px rgba(0, 0, 0, 0.7);
        float: right;
        margin-top: 6px;

        @media (max-width: 320px) {
          width: 4px;
          height: 4px;
          box-shadow: 0px 6px 0px rgba(0, 0, 0, 0.7),
            0px 12px 0px rgba(0, 0, 0, 0.7);
        }
      }
    }

    &__detail {
      display: flex;
      align-items: flex-start;
      padding: 16px;
      &-wrapper {
        display: inline-block;
      }
      &-list:not(:last-child) {
        margin-bottom: 12px;
      }

      .icon {
        margin-right: 8px;
        max-width: 40px;
        float: left;
        display: inline-block;
      }

      .label {
        &--title {
          font-size: 12px;
          color: ${colors.blackBase};
        }

        &--inv {
          font-weight: bold;
        }

        &--main {
          font-size: 12px;
          color: ${colors.blackLight};
        }

        &--inv,
        &--value {
          font-size: 14px;
          color: ${colors.blackBase};
        }

        &--amount {
          color: #ff5722;
          font-size: 14px;
          font-weight: bold;
        }
      }
    }

    &__action {
      border-top: solid 1px #e5e7e9;
    }

    &__additional {
      margin: 12px 16px 0;
    }
  }
`;

export { historyCardStyle };
