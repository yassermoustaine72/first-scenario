import React from 'react'
import "./Shedule.css"
import { Col,Row, Container } from 'react-bootstrap'
import CalendarComponent from '../Calendar'
import { Route, Routes } from 'react-router-dom'
import SchedulePage from '../EventForm'
function Shedule() {
  return (
    <div className='shed'>
      <Container>
        <Row>
            <Col>
                <div>
                    <p className='titre1'>votre emploi du temps</p>
                </div>
            </Col>
            
        </Row>
        
      </Container>
      <Container>
        {/**calendar */}
        <div className='cadre'>
        <Row>
            <Col>
                <div>
                    <p className='p-soustitle'>créez votre disponibilité</p>
                    <p className='p-sous'>créez vos disponibilités tout au long d'une semaine</p>
                </div>
            </Col>
        </Row>
        <Row>
            <Col>
                <div className='calendar1'>
                <Routes>
                  <Route path="/" element={<CalendarComponent />} /> {/* Affiche le calendrier par défaut */}
                  <Route path=":date" element={<SchedulePage />} /> {/* Utiliser un chemin relatif */}
                </Routes>
                </div>
            </Col>
        </Row>
        </div>
      </Container>
    </div>
  )
}

export default Shedule
