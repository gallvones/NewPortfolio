import React from 'react'
import '../Section1Icons/Section1Icons.css'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube,IoIosCloudDownload } from "react-icons/io";
const Section1Icons = () => {
  return (
    <div className='all-container'>
    <div className='icons'>
       <a href='https://www.linkedin.com/in/luiz-galvão-64057a251' target='blank'> <FaLinkedin  className='linkedin' /></a>
        <a href="https://github.com/gallvones" target='blank'><FaGithub  className='github'/></a>
        <a href="https://www.youtube.com" target='blank'><IoLogoYoutube className='youtube' /></a>
        </div>
        <div className='curriculo-allContainer'>
          <a href="" target='blank'><button className='viewCV' > <p> View CV</p></button></a>
          <a href="" ><button className='downloadCV'> <IoIosCloudDownload className='download-icon'/>
</button></a>
          
         </div>
        </div>
  )
}

export default Section1Icons