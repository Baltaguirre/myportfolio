import React from 'react';
import './About.css';
import { Link } from 'react-router-dom'
import stack from './Stackpixel1.png'
import astronaut from './astronauta4.png'
export default function Landing(){
    const linkStyle = {
        marginLeft:'4.4px',
        marginBottom:'15px',
        marginTop:'10px',
        textDecoration: "none"
       
      };
    return (
        <div className="containerAbout">
            <Link to='/' >
            <h1>/:Baltasar Aguirre</h1>
            </Link>
            <div>
                <ul>
                    <Link to='/home' style={linkStyle} >
                <li>└/:home</li> 
                </Link>
                <li>│</li>
                <li>│</li>
                <li>└/:about</li> 
                </ul>
                </div>
                <img src={astronaut} alt='astronauta' className='astronaut'/>
                <div className='about'>
                    <p>Full Stack Developer based in Córdoba Argentina.</p>
                    <p>In search for constant knowledge & improvement.</p>
                    <p>My stack:</p>
                    <img src={stack} alt='stack' className='stack'/>
                    <p>Javascript React & Redux Node.js NPM PostgreSQL Css HTML5</p>
                </div>
                
        </div>
    )
}