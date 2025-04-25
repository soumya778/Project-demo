// src/pages/About.js
import React from 'react';
import '../App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="about-page py-5" style={{ backgroundColor: '#f7f9fc' }}>
      <Container>
        <h2 className="text-center mb-5">About Suggestify</h2>

        {/* Centered “Our Story” */}
        <Row
          className="justify-content-center align-items-center text-center"
          data-aos="fade-up"
        >
          {/* Text Column */}
          <Col
            xs={12}
            md={8}
            className="d-flex flex-column justify-content-center text-center"
          >
            <div>
              <h4 className="mb-3">Our Story</h4>
              <p className="mx-auto" style={{ maxWidth: '600px' }}>
                Suggestify was born from a desire to simplify decision‑making. Whether it’s finding a song, a book, or a place to visit, our AI‑powered system helps you get the best suggestions in seconds.
              </p>
            </div>
          </Col>
        </Row>

        {/* Our Milestones */}
        <h4 className="text-center mb-4" data-aos="fade-right">
          Our Milestones
        </h4>
        <Row>
          <Col md={4} data-aos="fade-up">
            <Card className="shadow-sm mb-4">
              <Card.Body>
                <Card.Title>💡Idea Spark</Card.Title>
                <Card.Text>
                  It started as a College Final Year Project, aiming to build smarter recommendations for music and movies.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} data-aos="fade-up" data-aos-delay="200">
            <Card className="shadow-sm mb-4">
              <Card.Body>
                <Card.Title>🎯 Concept & Vision</Card.Title>
                <Card.Text>
                  Born to simplify everyday decisions, Suggestify leverages AI to tailor suggestions—making your life effortlessly better.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} data-aos="fade-up" data-aos-delay="400">
            <Card className="shadow-sm mb-4">
              <Card.Body>
                <Card.Title>🚀 Prototype Impact</Card.Title>
                <Card.Text>
                  Our MVP delivers real‑time recommendations across music, movies, and shopping—saving users time and enhancing experiences.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} data-aos="fade-up" data-aos-delay="600">
            <Card className="shadow-sm mb-4">
              <Card.Body>
                <Card.Title>🌐 Global Ambition</Card.Title>
                <Card.Text>
                  Scaling worldwide, Suggestify aims to embed AI‑driven recommendations into everyday apps—empowering millions across the globe.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;

