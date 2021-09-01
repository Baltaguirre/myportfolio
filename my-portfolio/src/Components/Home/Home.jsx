import React, { useState} from 'react';
import { Link } from 'react-router-dom'
import './Home.css'
import pixel from './pixelastronaut2.png'

export default function Landing(){
    
    
    const linkStyle = {
     
        textDecoration: "none",
        marginBottom: "-3em"
      };



    return (
    
        <div className="containerHome">
            <Link to='/' style={linkStyle} >
            <h1>/:Baltasar Aguirre</h1>
            </Link>
            <div>
                <ul>
                    <li>└/:home</li>
                    <Link to='/proyects' style={linkStyle}>
                    <p>└/:proyects</p>
                    </Link>
                    <li>│</li>
                    <li>│</li>
                    <Link to='/about' style={linkStyle}>
                    <li>└/:about</li>
                    </Link>
                </ul>
                </div>
                <div className='home'>
                <img src={pixel} alt='astronauta'/>
                </div>
        </div>
    )
}