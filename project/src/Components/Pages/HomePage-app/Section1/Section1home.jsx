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
        <div className='about-me'>
      <h1> About me</h1> 
      <br />
      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        <br />
        Asperiores eos repellendus labore. Voluptate veritatis deleniti
         <br />
         perspiciatis dicta reiciendis velit fuga laboriosam animi iusto enim,
          <br />
          expedita, eos commodi quas non optio?</p>
         <div className='SocialMedia-icons'>
         <Section1Icons/>
         </div>
         <div className='curriculo-container'>
          <a href="" target='blank'><button className='viewCV' > View CV</button></a>
          <a href="" ><button className='downloadCV'> <IoMdCloudDownload />
</button></a>
          
         </div>
        </div>
        
  
        </div>
  )
}

export default Section1home