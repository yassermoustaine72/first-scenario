// src/components/Dashboard.js
import React from 'react';
import "../dashboard/dashboard.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import HeroBanner from './HeroBanner/HeroBanner';
import bg from "./image/bgDASH.png";
import { Routes, Route } from 'react-router-dom';
import Planification from './element/Planification';
import Etudiant from './element/Etudiant';
import Message from './element/Message';
import Parametre from './Profile/svg/Parametre';
import Support from './element/Support';
import Profile from './Profile/Profile';
import SetSchedule from './element/emplois/SetShedule/SetShedule';
import DoesNotSet from "./element/emplois/DoesNotSetShedule/DoesNotSet"
import ParametreDash from './element/parametre/Parametre';
import EtudiantMessages from './element/message/Message';

function Dashboard() {
  return (
    <div style={{
      backgroundImage: `url(${bg})`,
      backgroundSize: 'cover',         // L'image couvre toute la zone
      backgroundRepeat: 'no-repeat',   // Empêche la répétition de l'image
      backgroundPosition: 'center',    // Centre l'image pour un meilleur rendu
      backgroundAttachment: 'fixed',   // Garde l'image fixe lors du défilement
                       // Assure que l'image prend toute la hauteur de la vue
      width: '100vw',                  // Assure que l'image prend toute la largeur de la vue
      overflow: 'hidden',              // Empêche tout débordement
    }}>
      <Container fluid className="p-3">
        <Row className="g-0">
          {/* Première colonne - Colonne fixe */}
          <Col xs={4} className="div-1 banner">
            <HeroBanner /> {/* Contient NavBarHero */}
          </Col>

          {/* Deuxième colonne - Ajustable */}
          <Col xs={8} className="col2">
            {/* Routes Imbriquées pour le Dashboard */}
            <Routes>
              <Route path='emploi/*' element={<Profile />} /> {/* Ajout du composant Profile avec route imbriquée */}
              <Route path='planification' element={<SetSchedule />} />
              <Route path='etudiant' element={<DoesNotSet />} />
              <Route path='message' element={<EtudiantMessages />} />
              <Route path='parametre' element={<ParametreDash />} />
              <Route path='support' element={<Support />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Dashboard;
