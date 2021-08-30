import React from 'react';
import { Link } from 'react-router-dom'
import './Home.css'
export default function Landing(){

    return (
        <div className="containerHome">
            <Link to='/' >
            <h1>/:Baltasar Aguirre</h1>
            </Link>
            <div>
                <ul>
                    <li>└/:home</li>
                    <Link to='/proyects'>
                    <p>└/:proyects</p>
                    </Link>
                </ul>
                </div>
        </div>
    )
}