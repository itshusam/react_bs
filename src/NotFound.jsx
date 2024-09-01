import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NotFound.css'; 
import notFoundImage from './assets/NotFound.jpg'; 

const NotFound = () => {
  return (
    <Container className="not-found-page text-center p-5" fluid style={{ minHeight: '100vh' }}>
      <Row className="align-items-center justify-content-center">
        <Col md={6}>
          <Image 
            src={notFoundImage} 
            alt="Page Not Found" 
            fluid 
            rounded 
            className="mb-4"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </Col>
      </Row>
      <Row className="text-center">
        <Col>
          <h1 className="display-4">404 - Page Not Found</h1>
          <p>Oops! The page you're looking for doesn't exist.</p>

          <NavLink to="/">
            <Button variant="primary" className="mt-4">
              Go Back to Home
            </Button>
          </NavLink>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
