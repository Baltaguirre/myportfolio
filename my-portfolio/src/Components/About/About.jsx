import React from 'react';
import './About.css';
import stack from '../../public/About/Stackpixel1.png';
import astronaut from '../../public/About/astronauta4.png';
import Nabvar from '../Navbar/Navbar';


export default function About({ button, playNavbar }) {

    return (
        <div className="containerAbout">
            {button}
            <Nabvar 
            playNavbar={playNavbar}/>
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