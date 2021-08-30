import React from 'react';
import './Proyects.css';
import { Link } from 'react-router-dom'

export default function Proyects(){

    return (
        <div className="container">
            <Link to='/' >
            <h1>/:Baltasar Aguirre</h1>
            </Link>
            <div>
                <ul>
                    <Link to='/home'> 
                    <li>└/:home</li>
                    </Link>
                    <p>└/:proyects</p>
                </ul>
                </div>
                <div className='proyects'>

                </div>
        </div>
    )
}