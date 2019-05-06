import React from "react";
import { storiesOf } from "@storybook/react";

// import Accordion from '../components/Accordion';
// import { AccordionGroup } from '../components/Accordion/_AccordionStyle';
import { Accordion } from "fintech-unify/dist/components";
import { AccordionGroup } from "fintech-unify/dist/components/Accordion/_AccordionStyle";

storiesOf("Accordion", module)
  .add("single", () => (
    <Accordion isBordered title="accordion title">
      <code>
        {'<Accordion isBordered title="accordion title">'}
        <br />
        {"  this is the content sample"}
        <br />
        {"</Accordion>"}
      </code>
    </Accordion>
  ))
  .add("with accordionGroup", () => (
    <AccordionGroup>
      <div className="group-header">
        FAQ
        <a
          className="group-header__link"
          href="https://www.tokopedia.com/bantuan/faq-seputar-tokopedia-emas/"
        >
          Lihat Selengkapnya
        </a>
      </div>
      <Accordion isBordered title="accordion title" value="value">
        this is the content sample
      </Accordion>
      <Accordion isBordered title="accordion title">
        this is the content sample
      </Accordion>
      <Accordion isBordered title="accordion title">
        this is the content sample
      </Accordion>
      <Accordion isBordered title="accordion title">
        this is the content sample
      </Accordion>
    </AccordionGroup>
  ));
