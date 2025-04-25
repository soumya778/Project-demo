import React from 'react';

import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-scroll';

const Main = () => {
  return (
    <div className="hero-section" id="home" data-aos="fade-up">
      <Container fluid>
        <Row className="justify-content-center text-center">
          <Col md={8}>
            <h1>Welcome to Suggestify</h1>
            <p>Your personal recommendation engine for everything you love</p>
            <Link to="features" smooth={true} duration={500}>
              <Button variant="primary" size="lg">
                Explore Features
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
