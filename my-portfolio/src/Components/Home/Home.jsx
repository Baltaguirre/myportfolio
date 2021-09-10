import React from 'react';
import Navbar from '../Navbar/Navbar.jsx'
import './Home.css'
import pixel from './pixelastronaut2.png'

export default function Home() {

  return (

    <div className="containerHome">
    
   <Navbar/>

      <div className='home'>
        <h2>Hello & welcome to my Portfolio!</h2>
        <p>If you're looking for what i've been doing, step into the /proyects section.</p>
        <p>In the /about section you'll find some information about me, my stack & also my contact channels. </p>
        <p>Hope you enjoy the little journey & thanks for passing by! </p> 
        </div>
        <img src={pixel} alt='astronauta' />
    </div>
  )
}