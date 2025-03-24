import React from 'react'
import '../Section1/Section1home.css';
import myImage from '../../../../assets/img/perfil.jpg';
import Section1Icons from './Section1Icons/Section1Icons'
import { IoMdCloudDownload } from "react-icons/io";
const Section1home = () => {
  return (
    <div className='all-section'>
        <div className='galvaoimage-container'>
         <img src={myImage} alt="My image" />
        </div>
        <div className='about-me '>
      <h1> About Me</h1> 
      <br />
      <div className='about-me-text '><p> 
        Hello, World! My name is Luiz Galvão, and I am a Fullstack Developer with a degree in Systems Analysis and Development. With two years of experience, I have developed complete systems and contributed to innovative projects. My expertise includes React.js, Node.js, MongoDB and Cloud solutions.
        </p>
        </div>
         <div className='SocialMedia-icons-homepage'>
         <Section1Icons/>
         </div>
         
        </div>
        
  
        </div>
  )
}

export default Section1home