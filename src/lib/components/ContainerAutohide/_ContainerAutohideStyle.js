import styled from "react-emotion";

const Wrapper = styled("div")`
  width: 100%;
  max-width: 576px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.12);
  transition: transform 0.4s ease-in-out;
  transform: translate(0, ${props => (props.sticky ? "0" : "200px")});
  font-size: 12px;
  margin: auto;
  text-align: center;
  background: #fff;
  padding: ${props => (props.noPadding ? "0" : "16px")};
  .caption {
    margin-bottom: 8px;
    font-weight: bold;
  }
`;

export { Wrapper };
