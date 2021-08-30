import React from 'react';
import './Landing.css';
import { Link } from 'react-router-dom'

export default function Landing(){

    return (
        <div className="containerLand">
            <h1>/:Baltasar Aguirre</h1>
            <div>
                <ul><Link to='/home' >
                    <li>└/:home</li>
                    </Link>
                    <Link to='/about'>
                    <li>└/:about</li>
                    </Link>
                </ul>
                </div>
        </div>
    )
}