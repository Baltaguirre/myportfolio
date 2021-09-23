import React from 'react';
import Navbar from '../Navbar/Navbar.jsx'
import './Home.css'
import pixel from '../../public/Home/pixelastronaut2.png'


export default function Home({ button,play, playNavbar}) {
  
  return (

    <div className="containerHome">
    {button}
   <Navbar
   playNavbar={playNavbar}/>

      <div className='home'>
        <h2>Hello & welcome to my Portfolio!</h2>
        <p>If you're looking for what i've been doing, step into the /proyects section.</p>
        <p>In the /about section you'll find some information about me, my stack & also my contact channels. </p>
        <p>Hope you enjoy the little journey & thanks for passing by! </p> 
        </div>
        <img 
        clasName='astronaut_home'
        src={pixel} 
        alt='astronauta'
        onClick={play} />
    </div>
  )
}