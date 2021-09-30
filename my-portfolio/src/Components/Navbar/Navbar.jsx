import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'

export default function Nabvar({ playNavbar,stopNavbar }) {
    const location = useLocation()
   
    return (
        location.pathname === '/home' ?
            <div >
                <Link to='/'>
                    <h1>/:Baltasar Aguirre</h1>
                </Link>
                <div>
                    <ul>
                        <li >└/:home</li>
                        <Link
                            to='/proyects'
                            className='NavLink'
                            id='HomeLinkProyects'
                            data-text='└/:proyects'
                            onMouseEnter={playNavbar}
                            onMouseLeave={stopNavbar}>
                            └/:proyects
                        </Link>
                        <li>│</li>
                        <li>│</li>
                        <li>│</li>
                        <li>│</li>
                        <li>│</li>
                        <Link
                            to='/about'
                            className='NavLink'
                            id='HomeLinkAbout'
                            data-text='└/:about'
                            onMouseEnter={playNavbar}
                            onMouseLeave={stopNavbar}>
                            └/:about
                        </Link>
                    </ul>
                </div>
            </div>
            : location.pathname === '/about' ?
                <div >
                    <Link to='/'>
                        <h1>/:Baltasar Aguirre</h1>
                    </Link>
                    <div>
                        <ul>  
                            <Link
                                to='/contact'
                                className='NavLink'
                                id='AboutLinkContact'
                                data-text='└/:contactMe'
                                onMouseEnter={playNavbar}
                                onMouseLeave={stopNavbar}>
                                └/:contactMe
                            </Link>
                             <li>└/:about</li>
                             <li>|</li>
                          <Link
                                to='/home'
                                className='NavLink'
                                id='AboutLinkHome'
                                data-text='└/:home'
                                onMouseEnter={playNavbar}
                                onMouseLeave={stopNavbar}>
                                └/:home
                            </Link>   
                        </ul>
                    </div>
                </div>
                : location.pathname === '/proyects' ?
                    <div>
                        <Link to='/' >
                            <h1>/:Baltasar Aguirre</h1>
                        </Link>
                        <div>
                            <ul>
                                <Link
                                    to='/home'
                                    className='NavLink'
                                    id='ProyectsLinkHome'
                                    data-text='└/:home'
                                    onMouseEnter={playNavbar}
                                    onMouseLeave={stopNavbar}>
                                    └/:home
                                </Link>
                                <p>└/:proyects</p>
                            </ul>
                        </div>
                    </div>
                    : location.pathname === '/' ?
                        <div >
                            <h1 data-text='/:Baltasar Aguirre'>/:Baltasar Aguirre</h1>
                            <div>
                                <ul>
                                    <Link
                                        to='/about'
                                        className='NavLink'
                                        id='LandLinkAbout'
                                        data-text='└/:about'
                                        onMouseEnter={playNavbar}
                                        onMouseLeave={stopNavbar}
                                        onMouseClick={stopNavbar}>
                                        └/:about
                                    </Link>
                                    <li>│</li>
                                    <Link to='/home'
                                        className='NavLink'
                                        id='LandLinkHome'
                                        data-text='└/:home'
                                        onMouseEnter={playNavbar}
                                        onMouseLeave={stopNavbar}>
                                        └/:home
                                    </Link>
                                </ul>
                            </div>
                        </div> : location.pathname === '/contact' ?
                            <div >
                                <Link to='/'>
                                    <h1>/:Baltasar Aguirre</h1>
                                </Link>
                                <div>
                                    <ul>
                                        <Link to='/about'
                                            className='NavLink'
                                            id='ContactLinkAbout'
                                            data-text='└/:about'
                                            onMouseEnter={playNavbar}
                                            onMouseLeave={stopNavbar} >
                                            └/:about
                                        </Link>
                                        <p>└/:contactMe</p>
                                    </ul>
                                </div>
                            </div> : null

    )
}