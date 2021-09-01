import React from 'react';
import './Landing.css';
import { Link } from 'react-router-dom'
import pixel from './astronauta.png'
export default function Landing(){
    const linkStyle = {
        marginBottom: '-17px',
        textDecoration: "none",
        marginLeft:'0.2px'
       
      };
      const linkStyleHome = {
        marginBottom: '-17px',
        textDecoration: "none",
        marginLeft:'2px'
       
      };
    return (
        <div className="containerLand">
            <h1>/:Baltasar Aguirre</h1>
            <div>
                <ul>
                    <Link to='/home' style={linkStyleHome} >
                    <li>└/:home</li>
                    </Link>
                    <li>│</li>
                    <Link to='/about' style={linkStyle}>
                    <li>└/:about</li>
                    </Link>
                </ul>
                <img src={pixel} alt='astronauta'className='astronauta' id='animated-example'/>
                </div>
        </div>
    )
}