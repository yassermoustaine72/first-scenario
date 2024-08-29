import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./style.css"
import notif from "./notif.png"
import param from './param.png'
import sim from './sim.png'
import entre from "./entree.png"
function ParametreDash() {
  return (
    <div>
      <Container>
        <Row>
            <Col>
                <div>
                    <p className='msg'>Parametre</p>
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
      <Container>
        <div className='divBG1'>
            <Container>
                <Row>
                    <Col><p className='title'>Professional documents</p></Col>
                    <Col>
                        <div >
                            <button className='float-end btnRetour'><span className='textspan'>Retour</span></button>
                        </div>
                    </Col>
                </Row>
                <Container>
                    <Row>
                        <Col>
                            
                            <div className='divProf'>
                            <img src={sim} className='sim'/>
                            <div><p className='para'>Pro labilitc insurance</p></div>
                            <img src={entre} className='entre'/>
                            </div>
                            
                        </Col>
                        <Col>
                            
                            <div className='divProf'>
                            <img src={sim} className='sim'/>
                            <div><p className='para'>SIRENE / KBIS certificate</p></div>
                            <img src={entre} className='entre'/>
                            </div>
                            
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            
                            <div className='divProf'>
                            <img src={sim} className='sim'/>
                            <div><p className='para'>Certificate of Vigilance</p></div>
                            <img src={entre} className='entre'/>
                            </div>
                            
                        </Col>
                        <Col>
                            
                            <div className='divProf'>
                            <img src={sim} className='sim'/>
                            <div><p className='para'>Authorization to teach</p></div>
                            <img src={entre} className='entre'/>
                            </div>
                            
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
      </Container>
    </div>
  )
}

export default ParametreDash
