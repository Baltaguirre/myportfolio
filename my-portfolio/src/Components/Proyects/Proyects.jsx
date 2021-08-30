import React from 'react';
import './Proyects.css';
import { Link } from 'react-router-dom'

export default function Proyects(){

    return (
        <div className="container">
            <Link to='/home' >
            <h1>/:home</h1>
            </Link>
            <div>
                <ul>
                    <li>/:proyects</li>
                </ul>
                </div>
                <div className='proyects'>

                </div>
        </div>
    )
}