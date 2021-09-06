import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Navbar.css'

export default function Nabvar() {

    const [homeClicked, setHomeClicked] = useState(false);
    const [aboutClicked, setAboutClicked] = useState(false);
    let history = useHistory()
    
    const handleHomeClick = () => {
       
       
     
            console.log('hanlde')
           setHomeClicked(true)
           
       
        if(!homeClicked) history.push('/home')

    }


    console.log(homeClicked)
    const handleAboutClick = (event) => {
        if (event) {
            setAboutClicked(true)
        }
    }

useEffect(() => {
    setHomeClicked(true)
},[homeClicked])


    return (
        !homeClicked ? 
        <div className="containerLanding" >
                <h1>/:Baltasar AguirreAAAA</h1>
                <div>
                  <button onClick={(event) => handleHomeClick(event)}>
                        └/:homeeee
                        </button>
                    <p>│</p>
                    <Link to='/about' onClick={() => handleAboutClick()} >
                        └/:about
                    </Link>

                </div>
            </div> 


            : <div className="containerHome">
            <Link to='/'>
                <h1>/:Baltasar AguirreAE</h1>
            </Link>
            <div>
                <ul>
                    <li>└/:home</li>
                    <Link to='/proyects' >
                        <p>└/:proyects</p>
                    </Link>
                    <li>│</li>
                    <li>│</li>
                    <Link to='/about' >
                        <li>└/:about</li>
                    </Link>
                </ul>
            </div>
        </div>



    )



}