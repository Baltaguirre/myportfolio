import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Contact.css';
import linkedin from '../../public/Contact/linkedin.png';
import gmail from '../../public/Contact/gmail.png';
import github from '../../public/Contact/github.png'



export default function Contact({ button, playNavbar }){
    const gmailStyle = {
        height:'100%',
        marginLeft:'15%'
    }
    const githubStyle = {
        height:'150%',
        marginLeft:'15%'
    }
    const linkedinStyle = {
        height:'170%',
        marginLeft:'15%'
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
                    <img src={github} alt="linkedin" style={githubStyle}/>GitHub</a>
                    <a  href="mailto:baltasar.aguirre@gmail.com" target="blank">
                    <img src={gmail} alt="linkedin" style={gmailStyle}/>Gmail</a>
            </div>
        </div>
    )
}