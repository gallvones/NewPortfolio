import React from 'react'
import '../Section1/Section1objective.css'
import myImage2 from '../../../../assets/img/perfil2.png'
import Section1Icons from '../../HomePage-app/Section1/Section1Icons/Section1Icons'
import { IoMdCloudDownload } from "react-icons/io";
const Section1objective = () => {
  return (
    <div className='all-section'>
        <div className='galvaoimage2-container'>
            <img src={myImage2} alt="My image2" />
        </div>
        <div className='objective-text'>
            <h1> Relocation in the job market </h1>
            <br />
            <p> - Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel libero ipsum
            ea aperiam quae dolorem quis tenetur molestias iusto eius, laborum 
            nam, eos aspernatur. Enim repellat sapiente facere ad aliquid?</p>
            <br />
            <p> - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiaebr  non hic porro, nihil magni aperiam, adipisci magnam animi repudiandae
            quisquam facere impedit, aspernatur ipsam illo voluptatibus 
            ipsa error modi laboriosam.</p>
            <br />
            <div className='SocialMedia-icons'>
                <Section1Icons/>
            </div>
  
            
        </div>
        
        
        
        </div>
  )
}

export default Section1objective