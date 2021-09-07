import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'

export default function Nabvar() {

    const location = useLocation()
    
    
    const linkStyle = {
        textDecoration: 'none',
        color:'white',
    }
    const linkStyleAbHome = {
        textDecoration: 'none',
       marginTop:'45px',
       color:'white',
       marginLeft:'-3px'
    }
    const linkStyleAbout = {
        textDecoration: 'none',
        color:'white',
        marginTop:'-50px',
        marginBottom: '30px',
        marginLeft:'13px'
    }

    const linkStyleLand = {
        color: 'white',
        textDecoration: 'none',
        alignItems:'start',
        marginLeft:'1px',
        marginTop:'-5px',
    }
    const  linkStyleLandAb = {
        color: 'white',
        textDecoration: 'none',
        alignItems:'start',
        marginLeft:'1px',
        marginTop:'5px',
    }

    const linkStyleProyects = {
        textDecoration: 'none',
        color:'white',
        marginTop:'-5px'
       
    }
   
    return (
        location.pathname === '/home' ?
            <div className="containerNavHome">
                <Link to='/'  >
                    <h1>/:Baltasar Aguirre</h1>
                </Link>
                <div>
                    <ul>
                        <li className='homeLi'>└/:home</li>
                        <Link to='/proyects' style={linkStyle} >
                            <p>└/:proyects</p>
                        </Link>
                         <li className='homeLi'>│</li>
                         <li className='homeLi'>│</li>
                         <li className='homeLi'>│</li>
                        <Link to='/about' style={linkStyleAbHome} >
                            └/:about
                        </Link>
                    </ul>
                </div>
            </div>
            : location.pathname === '/about' ?
                <div className="containerNav" >
                    <Link to='/'>
                        <h1>/:Baltasar Aguirre</h1>
                    </Link>
                    <div>
                        <ul>
                            <Link to='/home' style={linkStyleAbout} >
                            └/:home
                            </Link>
                            <li>│</li>
                            <li>└/:about</li>
                        </ul>
                    </div>
                </div>
                : location.pathname === '/proyects' ?
                    <div className="containerNav">
                        <Link to='/' >
                            <h1>/:Baltasar Aguirre</h1>
                        </Link>
                        <div>
                            <ul>
                                <Link to='/home' style={linkStyleProyects}>
                                    └/:home
                                </Link>
                                <p>└/:proyects</p>
                            </ul>
                        </div>
                    </div>
                    : location.pathname === '/' ?
                        <div className="containerNav" >
                            <h1>/:Baltasar Aguirre</h1>
                            <div>
                                <ul>
                                    <Link to='/home' style={linkStyleLand}>
                                    └/:home
                                    </Link>
                                    <li>│</li>
                                    <Link to='/about' style={linkStyleLandAb}>
                                    └/:about
                                    </Link>
                                </ul>
                            </div>
                        </div> : null
    )
}