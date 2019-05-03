import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "unify-react-mobile/build/Button";
import ContainerAutohide from "../lib/ContainerAutohide";

storiesOf("Container Auto-hide", module).add("default", () => (
  <div style={{ minHeight: "150vh" }}>
    Scroll down to show
    <ContainerAutohide> you can put any content here </ContainerAutohide>
  </div>
));
storiesOf("Container Auto-hide", module).add("with Button", () => (
  <div style={{ minHeight: "150vh" }}>
    Scroll down to show
    <ContainerAutohide>
      <Button primary block>
        Click Me
      </Button>
    </ContainerAutohide>
  </div>
));
storiesOf("Container Auto-hide", module).add("without padding", () => (
  <div style={{ minHeight: "150vh" }}>
    Scroll down to show
    <ContainerAutohide noPadding>
      <Button primary block>
        Click Me
      </Button>
    </ContainerAutohide>
  </div>
));
