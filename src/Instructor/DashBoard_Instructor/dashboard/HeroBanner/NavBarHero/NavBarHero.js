import React, { useState } from 'react';
import '../NavBarHero/Navbar.css';
import img1 from "./image/1.png";
import img2 from "./image/2.png";
import img3 from "./image/3.png";
import img4 from "./image/4.png";
import img5 from "./image/5.png";
import img6 from "./image/6.png";
import { Link } from 'react-router-dom';

function NavBarHero() {
  const [activeItem, setActiveItem] = useState('Dashboard'); // État pour suivre l'élément actif

  const handleItemClick = (item) => {
    setActiveItem(item); // Mettre à jour l'état actif
  };

  return (
    <div>
      <div className="vertical-navbar">
        <Link 
          to="/instructor/dashboard/emploi" 
          className={activeItem === 'Dashboard' ? 'active' : ''} 
          onClick={() => handleItemClick('Dashboard')}
        >
          <span className='spanh3 justify-content-center'>
            <span className='mx-2'>
              <img src={img1} alt="Dashboard" />
            </span>
            <span>Dashboard</span>
          </span>
        </Link>
        <Link 
          to="/instructor/dashboard/planification" 
          className={activeItem === 'Planification' ? 'active' : ''} 
          onClick={() => handleItemClick('Planification')}
        >
          <span className='spanh3 justify-content-center'>
            <span className='mx-2'>
              <img src={img2} alt="Planification" />
            </span>
            <span>Planification</span>
          </span>
        </Link>
        <Link 
          to="/instructor/dashboard/etudiant" 
          className={activeItem === 'Etudiant' ? 'active' : ''} 
          onClick={() => handleItemClick('Etudiant')}
        >
          <span className='spanh3 justify-content-center'>
            <span className='mx-2'>
              <img src={img3} alt="Etudiant" />
            </span>
            <span>Etudiant</span>
          </span>
        </Link>
        <Link 
          to="/instructor/dashboard/message" 
          className={activeItem === 'Message' ? 'active' : ''} 
          onClick={() => handleItemClick('Message')}
        >
          <span className='spanh3 justify-content-center'>
            <span className='mx-2'>
              <img src={img4} alt="Message" />
            </span>
            <span>Message</span>
          </span>
        </Link>
        <Link 
          to="/instructor/dashboard/parametre" 
          className={activeItem === 'Paramètre' ? 'active' : ''} 
          onClick={() => handleItemClick('Paramètre')}
        >
          <span className='spanh3 justify-content-center'>
            <span className='mx-2'>
              <img src={img5} alt="Paramètre" />
            </span>
            <span>Paramètre</span>
          </span>
        </Link>
        <Link 
          to="/instructor/dashboard/support" 
          className={activeItem === 'Support' ? 'active' : ''} 
          onClick={() => handleItemClick('Support')}
        >
          <span className='spanh3 justify-content-center'>
            <span className='mx-2'>
              <img src={img6} alt="Support d'aide" />
            </span>
            <span>Support d'aide</span>
          </span>
        </Link>
      </div>
    </div>
  );
}

export default NavBarHero;
