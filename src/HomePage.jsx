import React from 'react';
import { Button, Container, Card, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'; 
import candyImage from './assets/candy.jpg'; 

const HomePage = () => {
  return (
    <Container 
      className="home-page d-flex flex-column justify-content-center align-items-center text-center vh-100" 
      fluid 
    >
   
      <Image 
        src={candyImage} 
        alt="Candy Shop Welcome" 
        className="mb-4 welcome-image" 
        fluid 
        rounded 
        style={{ maxWidth: '80%', height: 'auto' }} 
      />

      <Card className="mt-4 shadow-sm border-primary" style={{ maxWidth: '600px', width: '100%' }}>
        <Card.Body>
          <Card.Title>Featured Candy</Card.Title>
          <Card.Text>
            Discover our new range of delicious candies. Grab yours today!
          </Card.Text>
        </Card.Body>
      </Card>

      <Button 
        variant="primary" 
        className="mt-4 shadow-lg" 
        style={{ fontSize: '1.5rem', padding: '10px 30px', maxWidth: '300px', width: '100%' }}
      >
        Shop Now
      </Button>
    </Container>
  );
};

export default HomePage;
