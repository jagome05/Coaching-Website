import React from "react";
import {
  UncontrolledAccordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";

export default function FAQ() {
  return (
    <div>
      <h1 className="p-3 text-3xl">
        FAQ: What is the difference between Coaching, Consulting, and
        Counseling?
      </h1>
      <UncontrolledAccordion stayOpen>
        <AccordionItem>
          <AccordionHeader targetId="1">
            <strong>Coaching</strong>
          </AccordionHeader>
          <AccordionBody accordionId="1">
            <h1 className="text-sm lg:text-xl">
              <strong>Coaching</strong> is a partnership (defined as an
              alliance, not a legal business partnership) between the Coach and
              the Client in a thought-provoking and creative process that
              inspires the client to maximize personal and professional
              potential. It is designed to facilitate the creation/development
              of personal, professional, or business goals and to develop and
              carry out a strategy /plan for achieving those goals.
            </h1>
          </AccordionBody>
        </AccordionItem>

        <AccordionItem>
          <AccordionHeader targetId="2">
            <strong>Consulting or Mentoring</strong>
          </AccordionHeader>
          <AccordionBody accordionId="2">
            <h1 className="text-sm lg:text-xl">
              A consultant or mentor advises the client by giving input in ways
              such as giving advice or providing them with information and
              suggestions.
            </h1>
          </AccordionBody>
        </AccordionItem>

        <AccordionItem>
          <AccordionHeader targetId="3">
            <strong>Therapy or Counseling</strong>
          </AccordionHeader>
          <AccordionBody accordionId="3">
            <h1 className="text-sm lg:text-xl">
              This form of input can involve dealing with issues in the client’s
              past that are blocking them from moving forward and causing
              problems in their current lives. Exploring issues such as family
              of origin and deep emotional trauma can uncover why they behave
              the way they do.
            </h1>
          </AccordionBody>
        </AccordionItem>
      </UncontrolledAccordion>
    </div>
  );
}
