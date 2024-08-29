import React from 'react';
import logo from "../HeroBanner/heroImage/logoHero.png";
import HeroProfile from './heroProfile/HeroProfile';
import NavBarHero from './NavBarHero/NavBarHero'; // Importer NavBarHero
import PostulerHero from './PostulerHero/PostulerHero';
import "../HeroBanner/HeroBanner.css";
import { Col, Container, Row } from 'react-bootstrap';

function HeroBanner() {
  return (
    <Container fluid className="p-0">
      <Row className="g-0">
        <Col xs={12} md={4} className="hero-col">
          <div className='hero'>
            {/* Logo */}
            <div className='text-center'>
              <img src={logo} className="imag1" alt="Logo" />
            </div>

            {/* Profile */}
            <div className="profile3">
              <HeroProfile />
            </div>

            {/* Navbar */}
            <div className='px-lg-4 pb-4'>
              <NavBarHero /> {/* Navbar dans HeroBanner */}
            </div>

            {/* Postuler */}
            <div className='px-lg-4'>
              <PostulerHero />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default HeroBanner;
