import React from 'react'
import '../Footer/Footer.css'
import { FaRegCopyright,FaLinkedin, } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer-container'>
      <p> "The path we take is as important as the destination we reach, because it is there that we learn, grow and transform." </p>
       <p>Luiz Galvão <FaRegCopyright className='copyright'/></p> 
        </div>
  )
}

export default Footer