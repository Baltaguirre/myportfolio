import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'

export default function Nabvar({ playNavbar,stopNavbar }) {
    const location = useLocation()
   
    return (
        location.pathname === '/home' ?
            <div >
                <Link to='/'  >
                    <h1>/:Baltasar Aguirre</h1>
                </Link>
                <div>
                    <ul>
                        <li >└/:home</li>
                        <Link
                            to='/proyects'
                            className='homeLinkProyects'
                            data-text='└/:proyects'
                            onMouseEnter={playNavbar}
                            onMouseLeave={stopNavbar}>
                            └/:proyects
                        </Link>
                        <li >│</li>
                        <li >│</li>
                        <li >│</li>
                        <li >│</li>
                        <li >│</li>
                        <Link
                            to='/about'
                            className='homeLinkAbout'
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
                   {/*  {speakerButton()} */}
                    <Link to='/'>
                        <h1>/:Baltasar Aguirre</h1>
                    </Link>
                    <div>
                        <ul>  
                            <Link
                                to='/contact'
                                className='aboutNavLinkContact'
                                data-text='└/:contactMe'
                                onMouseEnter={playNavbar}
                                onMouseLeave={stopNavbar}>
                                └/:contactMe
                            </Link>
                             <li>└/:about</li>
                             <li>|</li>
                          <Link
                                to='/home'
                                className='aboutNavLinkHome'
                                data-text='└/:home'
                                onMouseEnter={playNavbar}
                                onMouseLeave={stopNavbar}>
                                └/:home
                            </Link>   
                        </ul>
                    </div>
                </div>
                : location.pathname === '/proyects' ?
                    <div className="containerNav">
                        {/* {speakerButton()} */}
                        <Link to='/' >
                            <h1>/:Baltasar Aguirre</h1>
                        </Link>
                        <div>
                            <ul>
                                <Link
                                    to='/home'
                                    className='proyectsLinkHome'
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
                        <div className="containerNav" >
                           {/*  {speakerButton()} */}
                            <h1>/:Baltasar Aguirre</h1>
                            <div>
                                <ul>
                                    <Link
                                        to='/about'
                                        className='landLinkAbout'
                                        data-text='└/:about'
                                        onMouseEnter={playNavbar}
                                        onMouseLeave={stopNavbar}
                                        onMouseClick={stopNavbar}>
                                        └/:about
                                    </Link>
                                    <li>│</li>
                                    <Link to='/home'
                                        className='landLinkHome'
                                        data-text='└/:home'
                                        onMouseEnter={playNavbar}
                                        onMouseLeave={stopNavbar}>
                                        └/:home
                                    </Link>
                                </ul>
                            </div>
                        </div> : location.pathname === '/contact' ?
                            <div className="containerNav" >
                                {/* {speakerButton()} */}
                                <Link to='/'>
                                    <h1>/:Baltasar Aguirre</h1>
                                </Link>
                                <div>
                                    <ul>
                                        <Link to='/about'
                                            className='contactNavLinkAb'
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