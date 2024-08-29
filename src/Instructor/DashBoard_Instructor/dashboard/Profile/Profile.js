// src/Profile.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Profile.css";
import Shedule from "../element/emplois/YourShedule/Shedule";
import bg from './image/bg.png';
import girl from './image/girl.png';
import { Box } from './svg/Notif';
import Parametre from './svg/Parametre';
import { Col, Container, Row } from 'react-bootstrap';
import CalendarComponent from '../element/emplois/Calendar';
import SchedulePage from '../element/emplois/EventForm';
import { Routes, Route } from 'react-router-dom'; 

function Profile() {
  return (
    <div>
      {/* Nom sur le tableau de bord */}
      <div>
        <div className="container2">
          <div className="left">
            <p className='textDASH fw-semibold'>Tableau de bord</p>
          </div>
          <div className="right">
            <Box />
            <Parametre />
          </div>
        </div>
      </div>

      {/* Nom */}
      <div style={{ paddingTop: 70 }}>
        <Container className='profile1' style={{ backgroundImage: `url(${bg})` }}>
          <Row>
            <Col>
              <div>
                <div>
                  <span>
                    <p className='text1 fw-bold'>Bonjour!.</p>
                  </span>
                  {/* Nom */}
                  <span>
                    <p className='text1 fw-bold'>Maria Wilson</p>
                  </span>
                </div>
                <div>
                  <span>
                    <p className='text2 fw-semibold'>Bienvenue à bord!<br />
                      Commençons.</p>
                  </span>
                </div>
              </div>
            </Col>
            <Col>
              <div>
                <div>
                  <img src={girl} className='imgGirl' alt="Girl" />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Calendrier */}
      <div>
        <Container>
          <Row>
            <Col>
              {/* Inclure les Routes ici */}
              <Shedule/>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Profile;
