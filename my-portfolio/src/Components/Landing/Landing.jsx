import React from 'react';
import './Landing.css';
import pixel from '../../public/Landing/astronauta2.png'
import Navbar from '../Navbar/Navbar.jsx'


export default function Landing({ button,play, play2,stop,playNavbar, stopNavbar}) {
    
    return (
        <div className="containerLand">
            {button}
            <Navbar
            playNavbar={playNavbar}
            stopNavbar={stopNavbar} />
            <img 
            src={pixel} 
            alt='astronauta' 
            className='astronauta' 
            id='animated-example'
            onClick={play}
            onMouseEnter={play2}
            onMouseLeave={stop}
         />
        </div>
    )
}
