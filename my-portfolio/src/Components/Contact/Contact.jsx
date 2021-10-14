import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Contact.css';
import linkedin from '../../public/Contact/linkedin.png';
import gmail from '../../public/Contact/gmail.png';
import github from '../../public/Contact/github.png'
import cv from '../../public/Contact/CV Aguirre Baltasar EN.pdf'
import cvpixel from '../../public/Contact/CV.png'

export default function Contact({ button, playNavbar }){
    const gmailStyle = {
        height:'100%',
        width:'80%',
        marginLeft:'6%',
        marginTop:'-20%'
    }
    const githubStyle = {
        height:'140%',
        width:'70%',
        marginLeft:'9%'
    }
    const linkedinStyle = {
        height:'120%',
        width:'70%',
        marginLeft:'9%'
    }
    const cvStyle = {
        height:'230%',
        width:'50%',
        marginLeft:'25%',
        marginBottom:'-5%',
        marginTop:'-18%'
    }
    return (
        <div className="containerContact">
            {button}
            <Navbar
            playNavbar={playNavbar}/>
            <div className="contact">
               <a href="https://www.linkedin.com/in/baltasar-aguirre-fullstack/" target="blank">
                    <img src={linkedin} alt="linkedin" style={linkedinStyle}/>LinkedIn</a>
                    <a href="https://github.com/Baltaguirre" target="blank">
                    <img src={github} alt="github" style={githubStyle}/>GitHub</a>
                    <a  href="mailto:baltasar.aguirre@gmail.com" target="blank">
                    <img src={gmail} alt="g-mail" style={gmailStyle}/>Gmail</a>
                    <a href={cv} download="CV Baltasar Aguirre" >
                    <img src={cvpixel} alt="CV" style={cvStyle}/>Download Resume</a>
            </div>
        </div>
    )
}