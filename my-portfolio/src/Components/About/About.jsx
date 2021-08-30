import React from 'react';
import './About.css';
import { Link } from 'react-router-dom'

export default function Landing(){

    return (
        <div className="containerAbout">
            <Link to='/' >
            <h1>/:Baltasar Aguirre</h1>
            </Link>
            <div>
                <ul>
                    <li>└/:about</li> 
                </ul>
                </div>
                <div className='about'>
                    <p>Full Stack Developer based in Córdoba Argentina.</p>
                </div>
                
        </div>
    )
}