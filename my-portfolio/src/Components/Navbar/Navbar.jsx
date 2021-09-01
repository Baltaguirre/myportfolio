import react, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Nabvar(){
    const [homeClicked, setHomeClicked] = useState(false)
    const[landingClicked, setLandingClicked] = useState(false)
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
      
      function handleHomeClick(event){
        if(event){
            setHomeClicked(true)
           
        } 
        }
        function handleLandingClick(event){
            if(event){
                setLandingClicked(true)
               
            } 
            }
    return (
        homeClicked ? 
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
    </div> : landingClicked ?
        <div className="containerLand">
            <Link to='/' >
            <h1>/:Baltasar Aguirre</h1>
            </Link>
            <div>
                <ul>
                    <Link to='/home' style={linkStyleHome}  onClick={handleHomeClick} >
                    <li>└/:home</li>
                    </Link>
                    <li>│</li>
                    <Link to='/about' style={linkStyle}>
                    <li>└/:about</li>
                    </Link>
                </ul>
                </div>
        </div> : null
    
    )
}