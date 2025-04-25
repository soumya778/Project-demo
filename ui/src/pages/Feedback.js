// src/pages/Feedback.js
import React, { useState } from 'react';
import '../App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: '',
    rating: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you would typically send the data to your backend
    alert('Thank you for your feedback!');
    setFormData({ name: '', email: '', feedback: '', rating: 0 });
  };

  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="feedback-page py-5">
      <Container>
        <h2 className="text-center mb-5" data-aos="fade-up">We Value Your Feedback</h2>

        <Row className="justify-content-center">
          <Col md={8} data-aos="fade-up">
            <Card className="shadow-sm p-4">
              <Card.Body>
                <h4 className="mb-4">Share Your Thoughts</h4>
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="formEmail">
                    <Form.Label>Your Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="formFeedback">
                    <Form.Label>Your Feedback</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Your message"
                      name="feedback"
                      value={formData.feedback}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="formRating">
                    <Form.Label>Rate Us</Form.Label>
                    <div>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span
                          key={star}
                          style={{
                            cursor: 'pointer',
                            color: star <= formData.rating ? '#ffcc00' : '#ccc',
                          }}
                          onClick={() => setFormData({ ...formData, rating: star })}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </Form.Group>

                  <Button variant="primary" type="submit" className="mt-3">
                    Submit Feedback
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Feedback;
