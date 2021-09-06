import React from 'react';
import './About.css';
import stack from './Stackpixel1.png'
import Nabvar from '../Navbar/Navbar';
import astronaut from './astronauta4.png'

export default function Landing() {

    return (
        <div className="containerAbout">
            <Nabvar />
            <img src={astronaut} alt='astronauta' className='astronaut' />
            <div className='about'>
                <p>Full Stack Developer based in Córdoba Argentina.</p>
                <p>In search for constant knowledge & improvement.</p>
                <p>My stack:</p>
                <img src={stack} alt='stack' className='stack' />
                <p>Javascript React & Redux Node.js NPM PostgreSQL Css HTML5</p>
            </div>

        </div>
    )
}