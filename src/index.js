import React from "react";
import ReactDOM from "react-dom";
import { Accordion } from "./lib/components";

ReactDOM.render(
  <div>
    Hello world
    <Accordion isBordered title="accordion title">
      <code>
        {'<Accordion isBordered title="accordion title">'}
        <br />
        {"  this is the content sample"}
        <br />
        {"</Accordion>"}
      </code>
    </Accordion>
  </div>,
  document.getElementById("root")
);
