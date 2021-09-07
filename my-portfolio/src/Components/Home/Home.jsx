import React from 'react';
import Navbar from '../Navbar/Navbar.jsx'
import './Home.css'
import pixel from './pixelastronaut2.png'

export default function Home() {

  return (

    <div className="containerHome">
    
   <Navbar/>

      <div className='home'>
        <p>Hello & welcome to my Portfolio!</p>
        </div>
        <img src={pixel} alt='astronauta' />
    </div>
  )
}