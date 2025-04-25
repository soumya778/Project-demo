// src/pages/Faq.js
import React from 'react';
import '../App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Container, Accordion } from 'react-bootstrap';

const Faq = () => {
  React.useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="faq" className="py-5 bg-white">
      <Container>
        <h2 className="text-center mb-4" data-aos="fade-up">Frequently Asked Questions</h2>
        <Accordion>
          <Accordion.Item eventKey="0" data-aos="fade-up">
            <Accordion.Header>How does Suggestify work?</Accordion.Header>
            <Accordion.Body>
              We use your inputs, filters, and machine learning APIs to generate smart suggestions in real time.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1" data-aos="fade-up" data-aos-delay="200">
            <Accordion.Header>Is my data private?</Accordion.Header>
            <Accordion.Body>
              Yes, your data is stored securely and never shared with third parties.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" data-aos="fade-up" data-aos-delay="400">
            <Accordion.Header>Can I customize recommendations?</Accordion.Header>
            <Accordion.Body>
              Absolutely! Use the filters page to customize results by category, rating, or date.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </section>
  );
};

export default Faq;
