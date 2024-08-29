import React from 'react'
import './Location.css'
import maan from "./image/maan.png"
 
import google from "./image/google.png"
import fb from "./image/f1.png"
import groupImage from '../image/Group.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import SVG1 from './image/GoogleSVG'
import Svg2 from './image/Svg2'
import Vector1 from './image/Vector1'
import Vector2 from './image/Vector2'
import Vector3 from './image/Vector3'
import Vec4 from './image/Vec4'
import Vec5 from './image/Vec5'
import ToggleSwitch from './image/ToggleSwitch'
import Svg7 from './Svg7'
import vec from "./image/v.png"
import flech from "./image/flech.png"
import point from "./image/point.png"
function Location() {
  return (
    <div style={{
        backgroundImage: `url(${groupImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100vw',
      }} className='bod'>
        <div className='container-fluid m-0 p-0'>
          <div className='row'>
            <div className='col'>
              <div className='image-container'>
                <div className='vecBG'>
                  <img src={vec} className='img-fluid vec' alt="Vector" />
                  <img src={maan} className='img-fluid imageGirl' style={{position: "absolute"}} alt="Girl" />
                </div>
                <div className='icons'>
                  <SVG1 />
                  <img src={point} className='point'/>
                  <Svg2 />
                  <Vector1 />
                  <Vector2 />
                  <Vector3 />
                  <Vec4 />
                  <Vec5 />
                </div>
              </div>
            </div>
        
            {/***connexion */}
            <div className='col text-center login'>
            <div>
                <img src={flech} className='flech1'/>
            </div>
            <div style={{width:400,margin:70}}>
            <div>
                <h3 style={{fontSize: 36}}>Ajouter <br/>un emplacement</h3>
                
            </div>


            <div>
            
                
            </div>

            {/**formulaire */}
            <div>
                <input type='text' placeholder='emplacement *' className='inp'/><br/>
               
            </div>

          

            {/**button connect */}
            <div>
                <button className='log'>
                    <span style={{fontSize:18,color:'white'}}>Ajouter un emplacement</span>
                </button>
            </div>

            
            <img src={flech} className='flech2'/>
                <Svg7/>
            
        </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Location