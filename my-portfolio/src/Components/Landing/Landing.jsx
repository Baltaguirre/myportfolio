import React from 'react';
import './Landing.css';
import pixel from './astronauta2.png'
import Navbar from '../Navbar/Navbar.jsx'

export default function Landing() {

    return (
        <div className="containerLand">
            <Navbar />
            <img src={pixel} alt='astronauta' className='astronauta' id='animated-example' />
        </div>
    )
}
