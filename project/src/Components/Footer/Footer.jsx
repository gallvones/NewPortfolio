import React from 'react'
import '../Footer/Footer.css'
import { FaRegCopyright,FaLinkedin, } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer-container'>
      <p> "The most important thing is not to get there, but to bear fruits from the journey"  </p>
       <p>Luiz Galvão</p> <FaRegCopyright className='copyright'/>
        </div>
  )
}

export default Footer