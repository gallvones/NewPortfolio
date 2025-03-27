import React from 'react'
import myImage from '../../../../assets/img/perfil.jpg';
import { FaWhatsapp,FaLinkedin } from "react-icons/fa";
import '../Section1ContactPage/Section1Contact.css'
const Section1Contact = () => {
  return (
    <div className='all-section1-Contact'>
        <div className='galvaoimage-container-Contact'>
         <img src={myImage} alt="My image" />
        </div>
        <div className='about-me-Contact'>
      <h1> Contact Me</h1> 
      <br />
      <p>  - This form was created to collect your informa- tion and send it to my personal database (MongoDB  Atlas).</p> 
        <p> If you prefer, you can also reach out to me dire- ctly via my personal WhatsApp or LinkedIn.</p>
         <div className='socialMedia-icons-container-Contact'>
         <div className='icons-Contact'>
            <a href="https://wa.me/5561999831708?text=Hello,%20I%20would%20like%20to%20talk%20about%20web%20development!" target='blank'><FaWhatsapp className='zap-Contact'/></a>
            <a href="https://www.linkedin.com/in/luiz-galvão-64057a251" target='blank'><FaLinkedin className='linkedin-Contact'/></a>
            </div>
         </div>
         
        </div>
        
  
        </div>
  )
}

export default Section1Contact