import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import param from "./param.png"
import notif from "./notif.png"
import student from './etudiant.png'
import "./message.css"
function EtudiantMessages() {
  return (
    <div className='messageM'>
      <div className='barre'>
      <Container>
        <Row>
            <Col>
                <div>
                    <p className='msg'>Message</p>
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
            <Col>
                <div className='divBGM'>
                    <img className='image22' src={student}/>
                    <div>
                        <p className='paragraphe'>Aucun étudiant n'a encore rejoint</p>
                    </div>
                    <div>
                        <button className='btn'>Commencer</button>
                    </div>
                </div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default EtudiantMessages
