import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Contact.css';
import linkedin from './linkedin.png';
import gmail from './gmail.png';
import github from './github.png'



export default function Contact(){
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
            <Navbar/>
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