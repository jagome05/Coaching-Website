import React from "react";
import {
  UncontrolledAccordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";

export default function FAQ() {

  return(

  <div>
    <h1 className="p-5">FAQ: What is the difference between Coaching, Consulting, and Counseling?</h1>
    <UncontrolledAccordion stayOpen>

      <AccordionItem>
        <AccordionHeader targetId="1">Coaching</AccordionHeader>
          <AccordionBody accordionId="1">
            <h1>Coaching is...</h1>
          </AccordionBody>
      </AccordionItem>

      <AccordionItem>
        <AccordionHeader targetId="2">Consulting</AccordionHeader>
          <AccordionBody accordionId="2">
            <h1>Consulting is...</h1>
          </AccordionBody>
      </AccordionItem>

      <AccordionItem>
        <AccordionHeader targetId="3">Counseling</AccordionHeader>
          <AccordionBody accordionId="3">
            <h1>Counseling is....</h1>
          </AccordionBody>
      </AccordionItem>

    </UncontrolledAccordion>
  </div>
    )
  }
