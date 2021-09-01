import React from 'react';
import './Proyects.css';
import { Link } from 'react-router-dom'
import image from './astroboy.png'
export default function Proyects(){
    const linkStyle = {
        marginLeft:'4.4px',
        marginBottom:'15px',
        marginTop:'10px',
        textDecoration: "none"
       
      };
    return (
        <div className="container">
            <Link to='/' >
            <h1>/:Baltasar Aguirre</h1>
            </Link>
            <div>
                <ul>
                    <Link to='/home' style={linkStyle}> 
                    <li>└/:home</li>
                    </Link>
                    <p>└/:proyects</p>
                </ul>
                </div>
                <img src={image} alt='astronauta' className='image' />
                <div className='proyects'>

                </div>
                <div className='proyects'>

                </div>
        </div>
    )
}