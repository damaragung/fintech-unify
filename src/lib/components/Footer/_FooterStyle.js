import styled from "react-emotion";
import { colors } from "../../styles/utils/_ColorStyle";
import { breakpoints } from "../../styles";

const FintechFooter = styled("footer")`
  background-color: ${colors.whiteBase};
  color: ${colors.blackLight};
  font-size: 13px;
  border-top: 1px solid ${colors.grayAlto};

  .footer__container {
    display: flex;
    height: 84px;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    @media (max-width: ${breakpoints.medium}) {
      padding-top: 16px;
      padding-bottom: 16px;
      display: block;
      height: auto;
      text-align: center;
    }

    .content {
      display: inline-block;
      padding: 0 8px;
      border-right: 1px solid ${colors.grayAlto};

      &:last-child {
        border-right: 0;

        @media (max-width: ${breakpoints.medium}) {
          margin: 0;
        }
      }

      @media (max-width: ${breakpoints.medium}) {
        display: block;
        border-right: 0;
        margin: 16px 0 8px;
      }

      li {
        display: inline-block;
        margin: 0 4px;
      }
    }
  }
`;

export { FintechFooter };
