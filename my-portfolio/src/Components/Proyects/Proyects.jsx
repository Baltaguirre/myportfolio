import React from 'react';
import Navbar from '../Navbar/Navbar.jsx';
import './Proyects.css';
import image from './astroboy.png'

export default function Proyects() {

    return (

        <div className='containerProyects'>
       <Navbar/>
       <img src={image} alt='astronauta'/>
       <div className='proyects'>
     
        </div>
        
        </div>
      )
    }