import React, { useState } from "react";
import {
  UncontrolledAccordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";

export default function FAQ() {
  // const [open, setOpen] = useState('1');
  // const toggle = (id) => {
  //   if (open === id) {
  //     setOpen();
  //   } else {
  //     setOpen(id);
  //   }
  // };

  return(
  <div>
    <h1>FAQ</h1>
    <UncontrolledAccordion stayOpen>
      <AccordionItem>
        <AccordionHeader targetId="1">FAQ 1</AccordionHeader>
          <AccordionBody accordionId="1">
            <h1>Hello!</h1>
          </AccordionBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader targetId="2">FAQ 2</AccordionHeader>
          <AccordionBody accordionId="2">
            <h1>Open Me!</h1>
          </AccordionBody>
      </AccordionItem>
    </UncontrolledAccordion>
  </div>
    )
  }
