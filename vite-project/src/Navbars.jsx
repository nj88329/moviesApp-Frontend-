// import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './index.css';
import { Link } from 'react-router-dom';
const Navbars = () => {
  return (
    
     <Navbar bg="primary" data-bs-theme="dark" style = {{ position: 'sticky', width: '100%', zIndex: 100 ,  rightMargin:'0'   }}>
        <Container>
          <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/features">Features</Nav.Link>
          {/* <Nav.Link as={Link} to="/pdf">Pdf</Nav.Link> */}
          <Nav.Link as={Link} to="/viewpdf">Watched Movies </Nav.Link>
          <Nav.Link as={Link} to="/login">Login</Nav.Link>
          <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
          <Nav.Link as = {Link} to='/video'>Videos</Nav.Link>
          {/* <Nav.Link as={Link} to='/animation'>Welcome</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
  
  )
}

export default Navbars
