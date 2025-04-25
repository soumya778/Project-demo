// src/components/Header.js
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Header() {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          Suggestify
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" end>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              About
            </Nav.Link>
            
            <Nav.Link as={NavLink} to="/feedback">
              Feedback
            </Nav.Link>
            <Nav.Link as={NavLink} to="/faq">
              FAQ
            </Nav.Link>
            <Nav.Link as={NavLink} to="/login">
              Login
            </Nav.Link>
            <Nav.Link as={NavLink} to="/signup">
              Signup
            </Nav.Link>
          </Nav>
          <Nav className="ms-3">
            <Nav.Link href="https://facebook.com"><FaFacebookF /></Nav.Link>
            <Nav.Link href="https://twitter.com"><FaTwitter /></Nav.Link>
            <Nav.Link href="https://instagram.com"><FaInstagram /></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}