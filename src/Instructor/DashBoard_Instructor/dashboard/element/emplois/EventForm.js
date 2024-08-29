// src/components/SchedulePage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import dayjs from 'dayjs';
import 'dayjs/locale/fr'; // Importer la locale française pour les mois en français
import { Col, Container, Row } from 'react-bootstrap';
import "./Event.css"
// Optionnel : Configurer la locale pour afficher les mois en français
dayjs.locale('fr');

const SchedulePage = () => {
  const { date } = useParams(); // Date in YYYY-MM-DD format
  const formattedDate = dayjs(date).format('D MMMM YYYY'); // Formater la date

  return (
    <Container>
      <Row>
       <Col>
       <div className='cadreDate'>
        <h1>{formattedDate}</h1>
        
        <Container>
          <Row>
            <Col>
            <div>
              <p className='paraSession'>Le matin</p>
            </div>
            <div>
              <input  type='checkbox'/>
              <label className='hourLabel'>06h00 - 07h00</label>

              <input type='checkbox'/>
              <label className='hourLabel'>08h00 - 08h00</label>

              <input type='checkbox'/>
              <label className='hourLabel'>08h00 - 09h00</label>

              <input type='checkbox'/>
              <label className='hourLabel'>09h00 - 10h00</label>

              <input type='checkbox'/>
              <label className='hourLabel'>10h00 - 11h00</label>
              
              <input type='checkbox'/>
              <label className='hourLabel'>11h00 - 12h00</label>
            </div>
            
            </Col>
          </Row>
          <Row>
          <div>
              <p className='paraSession'>Midi</p>
            </div>
            <div>
              <input  type='checkbox'/>
              <label className='hourLabel'>12h00 - 13h00</label>

              <input type='checkbox'/>
              <label className='hourLabel'>01h00 - 02h00</label>
            </div>
            
          </Row>
          <Row>
          <div>
              <p className='paraSession'>L'après-midi</p>
            </div>
            <div>
              <input  type='checkbox'/>
              <label className='hourLabel'>02h00 - 03h00</label>

              <input type='checkbox'/>
              <label className='hourLabel'>03h00 - 04h00</label>
            
              <input  type='checkbox'/>
              <label className='hourLabel'>04h00 - 05h00</label>

              <input type='checkbox'/>
              <label className='hourLabel'>05h00 - 06h00</label>
            
            </div>
          </Row>
          <Row>
          <div>
              <p className='paraSession'>le soir</p>
            </div>
            <div>
              <input  type='checkbox'/>
              <label className='hourLabel'>18h00 - 19h00</label>

              <input type='checkbox'/>
              <label className='hourLabel'>20h00 - 21h00</label>
            
              <input  type='checkbox'/>
              <label className='hourLabel'>21h00 - 22h00</label>

              <input type='checkbox'/>
              <label className='hourLabel'>22h00 - 23h00</label>
            
            </div>
          </Row>
        </Container>
        </div>
       </Col>
      </Row>
    </Container>
  );
};

export default SchedulePage;
