import React from 'react';
import { Container, Row, Col, ListGroup, Button } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#343a40', color: '#fff', padding: '2rem 0' }}>
      <Container>
        <Row>
          <Col md={4} className="mb-4">
            <h5>About Us</h5>
            <p>
              Suggestify is a recommendation platform designed to make decisions easier. 
              Whether you're looking for books, music, or movies, we provide personalized suggestions.
            </p>
          </Col>
          <Col md={4} className="mb-4">
           
            
          </Col>
          <Col md={4} className="mb-4">
            <h5>Connect With Us</h5>
            <div>
              <Button variant="link" className="text-white" href="https://facebook.com" target="_blank">
                <FaFacebook size={30} />
              </Button>
              <Button variant="link" className="text-white" href="https://twitter.com" target="_blank">
                <FaTwitter size={30} />
              </Button>
              <Button variant="link" className="text-white" href="https://linkedin.com" target="_blank">
                <FaLinkedin size={30} />
              </Button>
              <Button variant="link" className="text-white" href="https://instagram.com" target="_blank">
                <FaInstagram size={30} />
              </Button>
            </div>
          </Col>
        </Row>
        <Row className="text-center mt-4">
          <Col>
            <p>&copy; 2025 Suggestify. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;



