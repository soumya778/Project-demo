// // src/pages/Signup.js
// import React, { useState } from 'react';
// import '../App.css';
// import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

// const Signup = () => {
//   const [form, setForm] = useState({ name: '', email: '', password: '' });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // handle signup logic
//     console.log('Signing up with', form);
//   };

//   return (
//     <section className="auth-page py-5" style={{ backgroundColor: '#f7f9fc' }}>
//       <Container>
//         <Row className="justify-content-center">
//           <Col md={6} lg={5}>
//             <Card className="shadow-sm p-4" data-aos="fade-up">
//               <Card.Body>
//                 <h2 className="text-center mb-4">Create an Account</h2>
//                 <Form onSubmit={handleSubmit}>
//                   <Form.Group className="mb-3" controlId="signupName">
//                     <Form.Label>Name</Form.Label>
//                     <Form.Control
//                       type="text"
//                       placeholder="Your name"
//                       name="name"
//                       value={form.name}
//                       onChange={handleChange}
//                       required
//                     />
//                   </Form.Group>
//                   <Form.Group className="mb-3" controlId="signupEmail">
//                     <Form.Label>Email</Form.Label>
//                     <Form.Control
//                       type="email"
//                       placeholder="Enter email"
//                       name="email"
//                       value={form.email}
//                       onChange={handleChange}
//                       required
//                     />
//                   </Form.Group>
//                   <Form.Group className="mb-3" controlId="signupPassword">
//                     <Form.Label>Password</Form.Label>
//                     <Form.Control
//                       type="password"
//                       placeholder="Enter password"
//                       name="password"
//                       value={form.password}
//                       onChange={handleChange}
//                       required
//                     />
//                   </Form.Group>
//                   <Button variant="success" type="submit" className="w-100">
//                     Sign Up
//                   </Button>
//                 </Form>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default Signup;

// src/pages/Signup.js
import React, { useState } from 'react';
import '../App.css';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import API from '../services/api'; // 👈 import API instance

const Signup = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate(); // 👈 for navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/auth/signup', {
        username: form.name,  // 👈 send "username" (not name) to backend
        email: form.email,
        password: form.password,
      });
      console.log('Signup Success:', res.data);

      alert('Account created successfully! Please log in.');
      navigate('/login'); // Redirect to login page after signup
    } catch (error) {
      console.error('Signup Error:', error.response?.data?.message || error.message);
      alert(error.response?.data?.message || 'Signup failed. Please try again.');
    }
  };

  return (
    <section className="auth-page py-5" style={{ backgroundColor: '#f7f9fc' }}>
      <Container>
        <Row className="justify-content-center">
          <Col md={6} lg={5}>
            <Card className="shadow-sm p-4" data-aos="fade-up">
              <Card.Body>
                <h2 className="text-center mb-4">Create an Account</h2>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="signupName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Your name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="signupEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="signupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter password"
                      name="password"
                      value={form.password}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  <Button variant="success" type="submit" className="w-100">
                    Sign Up
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

export default Signup;

