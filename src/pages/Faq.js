import React, { useState } from 'react';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
  Container
} from 'reactstrap';
import { FAQS } from '../features/faqs/FAQS';

function Faq(props) {
  const [open, setOpen] = useState('1');
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <Container className="mt-5">
        <h2 className='text-center'>Frequently Asked Questions</h2>
      <Accordion open={open} toggle={toggle}>
        {FAQS.map((faq, index) => (
            <AccordionItem key={index}>
          <AccordionHeader targetId={index}>{faq.question}</AccordionHeader>
          <AccordionBody accordionId={index}>
            {faq.answer}
          </AccordionBody>
        </AccordionItem>
        ))
        }
      </Accordion>
    </Container>
  );
}

export default Faq;