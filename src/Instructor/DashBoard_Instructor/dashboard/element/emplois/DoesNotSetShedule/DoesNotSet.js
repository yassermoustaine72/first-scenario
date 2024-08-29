import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./styles.css"
import man from "./rafiki.png"
import param from "./param.png"
import notif from "./notif.png"
function DoesNotSet() {
  return (
    <div className='messageD'>
      <div className='barre2'>
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
        <Row  className="CADRE" style={{ height: '100vh' }}>
            <Col xs={12} md={8} lg={6}>
                <div className='divBGS  d-flex flex-column justify-content-center align-items-center'>
                    <img className='imageD' src={man}/>
                    <div>
                        <p className='paragraphe'>Veuillez d'abord définir votre emploi du temps</p>
                    </div>
                    <div>
                        <button className='btnD'>définissez votre emploi du temps</button>
                    </div>
                </div>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default DoesNotSet
