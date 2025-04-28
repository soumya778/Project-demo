// // src/pages/Login.js

// import React, { useState } from 'react';
// import '../App.css';
// import { Container, Row, Col, Form, Button, Card, InputGroup, FormControl } from 'react-bootstrap';
// import { EyeFill, EyeSlashFill } from 'react-bootstrap-icons';

// const Login = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [form, setForm] = useState({ email: '', password: '' });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // handle login logic
//     console.log('Logging in with', form);
//   };

//   return (
//     <section className="auth-page py-5" style={{ backgroundColor: '#f7f9fc' }}>
//       <Container>
//         <Row className="justify-content-center">
//           <Col md={6} lg={5}>
//             <Card className="shadow-sm p-4" data-aos="fade-up">
//               <Card.Body>
//                 <h2 className="text-center mb-4">Log in to Suggestify</h2>
//                 <Form onSubmit={handleSubmit}>
//                   <Form.Group className="mb-3" controlId="loginEmail">
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
//                   <Form.Group className="mb-3" controlId="loginPassword">
//                     <Form.Label>Password</Form.Label>
//                     <InputGroup>
//                       <FormControl
//                         type={showPassword ? 'text' : 'password'}
//                         placeholder="Enter password"
//                         name="password"
//                         value={form.password}
//                         onChange={handleChange}
//                         required
//                       />
//                       <Button
//                         variant="outline-secondary"
//                         onClick={() => setShowPassword(!showPassword)}
//                       >
//                         {showPassword ? <EyeSlashFill /> : <EyeFill />}
//                       </Button>
//                     </InputGroup>
//                   </Form.Group>
//                   <div className="d-flex justify-content-between mb-3">
//                     <a href="#" className="link-primary">Forgot password?</a>
//                     <a href="/signup" className="link-primary">Sign up</a>
//                   </div>
//                   <Button variant="primary" type="submit" className="w-100">
//                     Login
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

// export default Login;

// src/pages/Login.js
import React, { useState } from 'react';
import '../App.css';
import { Container, Row, Col, Form, Button, Card, InputGroup, FormControl } from 'react-bootstrap';
import { EyeFill, EyeSlashFill } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import API from '../services/api'; // 👈 importing API instance

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate(); // 👈 for navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/auth/login', form);
      console.log('Login Success:', res.data);

      // Save token and user info
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));

      navigate('/'); // Redirect to dashboard after login
    } catch (error) {
      console.error('Login Error:', error.response?.data?.message || error.message);
      alert(error.response?.data?.message || 'Login failed. Please try again.');
    }
  };

  return (
    <section className="auth-page py-5" style={{ backgroundColor: '#f7f9fc' }}>
      <Container>
        <Row className="justify-content-center">
          <Col md={6} lg={5}>
            <Card className="shadow-sm p-4" data-aos="fade-up">
              <Card.Body>
                <h2 className="text-center mb-4">Log in to Suggestify</h2>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="loginEmail">
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
                  <Form.Group className="mb-3" controlId="loginPassword">
                    <Form.Label>Password</Form.Label>
                    <InputGroup>
                      <FormControl
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Enter password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        required
                      />
                      <Button
                        variant="outline-secondary"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <EyeSlashFill /> : <EyeFill />}
                      </Button>
                    </InputGroup>
                  </Form.Group>
                  <div className="d-flex justify-content-between mb-3">
                    <a href="#" className="link-primary">Forgot password?</a>
                    <a href="/signup" className="link-primary">Sign up</a>
                  </div>
                  <Button variant="primary" type="submit" className="w-100">
                    Login
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

export default Login;
