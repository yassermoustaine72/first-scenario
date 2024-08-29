// src/components/SetSchedule.js
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "./styles.css";
import man from "./voiture.png";
import param from "./param.png"
import notif from "./notif.png"

function SetSchedule() {
  return (
    <div className='messageS'>
      <div className='barre'>
      <Container>
        <Row>
            <Col>
                <div>
                    <p className='msg1'>Tableau de bord</p>
                </div>
            </Col> 
            <Col>
                <div className='float-end '>
                    <img src={notif} className='imag' />
                    <img src={param} className='imag'/>
                </div>
            </Col>
        </Row>
      </Container>
      </div>
      <Container>
        <Row className="CADRE" style={{ height: '100vh' }}>
          <Col xs={12} md={8} lg={6}>
            <div className='divBGS d-flex flex-column justify-content-center align-items-center'>
              <img className='imageS' src={man} alt="Car" />
              <p className='paragraphe'>You haven't been assigned any Étudiants yet.</p>
              <button className='btnS'>Back to dashboard</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SetSchedule;
