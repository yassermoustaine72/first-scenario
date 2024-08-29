import React from 'react';
import './Postuler.css';
import bg from './image/bg-postuler.png';
import { Container, Row, Col } from 'react-bootstrap';

function PostulerHero() {
  return (
    <Container fluid className="postuler-container">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6} className="postuler" style={{ backgroundImage: `url(${bg})` }}>
          <div className="text-content">
            <p className='textPostule fw-bold'>
              Postulez <br />
              maintenant<br />
              pour devenir<br />
              moniteur <br />
              <span>d'auto-école</span>
            </p>
            <div className='explore-container'>
              <a className='explore a-text fw-semibold' id='a-text'>Explorez maintenant</a>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default PostulerHero;
