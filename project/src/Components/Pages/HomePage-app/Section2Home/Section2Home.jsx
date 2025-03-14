import React from 'react'
import '../Section2Home/Section2Home.css';
import Direcional from '../../../../assets/img/direcional.png'
import BC from '../../../../assets/img/BC.png';
import ND from '../../../../assets/img/ND.png';

import { FaLongArrowAltRight } from "react-icons/fa";
const Section2Home = () => {
  
  return (
    <div className='all-section2home'>
      <div className='section2home-title'><h1>Experiences</h1></div>
        <div className='card-exp-container'>

{/* Card1-container-BC*/}
<div className='card-exp-bc-container'>
<div className='card-exp-bc-firstCard'>
  <div className='card-exp-bc-firstCard-image'>
    <img src={BC} alt="bc-logo" />
  </div>

</div>

<div className='arrow'><FaLongArrowAltRight /></div>

{/* Card2-container-BC */}
<div className='card-exp-bc-second'>
  <div className='card-exp-bc-secondCard-title'>
    <h1>Blue Code </h1>
    <h1> Systems </h1>
    <div className='card-exp-bc-secondCard-text'>
    <p className='card-exb-bc-secondCard-text-firstP'>Internship in Fullstack Development (July 2024 - December 2024).</p>
<p className='card-exb-bc-secondCard-text-secondP'> I worked on the developm- <br /> ent of fullstack applications<br /> collaborating with an agile team composed of junior, mid-level and senior deve- <br /> lopers, Scrum Master and other professionals.</p>
    </div>
  </div>
</div>
<div className='arrow'><FaLongArrowAltRight /></div>

{/* Card3-container-BC */}
<div className='card-exp-bc-third'>
  <div className='card-exp-bc-thirdCard-title1'>
    <h1>Hard Skills</h1>
    <div className='card-exp-bc-thirdCard-text1'>
    <p>- React </p>
        <p>- Node</p>
        <p>- MongoDB || SQL</p>
        <p>- APIs RESTfull</p>
      
        <div className='card-exp-bc-thirdCard-title2'>
          <h1> Soft Skills</h1>
         <div className='card-exp-bc-thirdCard-text2'>
         <p>- Comunication</p>
        <p>- Troubleshooting </p>
        <p>- Time management</p>
        <p>- Adaptability</p>
        <p>- Teamwork</p>
         </div>
        </div>
    </div>
  </div>
</div>
</div>
{/* Card1 Container Nordic Store */}
<div className='card-exp-nd-container'>
<div className='card-exp-nd-firstCard'>
  <div className='card-exp-nd-firstCard-image'>
    <a href="https://nordic-store.onrender.com"><img src={ND} alt="nd-logo" /></a>
  </div>

</div>

<div className='arrow'><FaLongArrowAltRight /></div>

{/* Card2-container-NordicStore */}
<div className='card-exp-nd-second'>
  <div className='card-exp-nd-secondCard-title'>
    <h1>Nordic Store </h1>
    <div className='card-exp-nd-secondCard-text'>
      <p className='card-exp-nd-secondCard-firstP' >
I developed a full-stack application for a client as a freelance developer. </p>
<p className='card-exp-nd-secondCard-secondP'>The system is an e-comerce for clothing created entirely by me. It integrates the front-end with the back-end and uses a cloud database. </p>
<p className='card-exp-nd-secondCard-thirdP'>The project is in its final phase, click on the image or  and check it out!</p>
    </div>
  </div>
</div>
<div className='arrow'><FaLongArrowAltRight /></div>

{/* Card3-container-Nordic Store */}
<div className='card-exp-nd-third'>
  <div className='card-exp-nd-thirdCard-title1'>
    <h1>Hard Skills</h1>
    <div className='card-exp-nd-thirdCard-text1'>
    <p>- React</p>
        <p>- Node.js + Express</p>
        <p>- MongoDB Atlas </p>
        <p>- APIs RESTful</p>
      
        <div className='card-exp-nd-thirdCard-title2'>
          <h1> Soft Skills</h1>
         <div className='card-exp-nd-thirdCard-text2'>
         <p>- Project management</p>
        <p>- Continuous learning </p>
        <p>- Adaptability</p>
        <p>- Problem solving</p>
        <p>- Time Management</p>
         </div>
        </div>
    </div>
  </div>
</div>
</div>


 {/* Card1-container- Direcional */}
 <div className='card-exp-direcional-container'>
 <div className='card-exp-direcional-firstCard'>
<div className='card-exp-direcional-firstCard-image'>
    <a href="https://www.direcional.com.br" target='blank'> <img src={Direcional} alt="direcional-logo" /></a>
</div>

 </div>

 <div className='arrow'><FaLongArrowAltRight /></div>

{/* Card2-container-Direcional */}
 <div className='card-exp-direcional-second'>
   <div className='card-exp-direcional-secondCard-title'> <h1>Direcional</h1>
   </div>
   <div className='card-exp-direcional-secondCard-text'>
   <p className='card-exp-direcionalsecondCard-firstP'>I worked at Direcional as a real estate agent for over 1 year (August 2022 - January 2024).</p>
<p className='card-exp-direcionalsecondCard-secondP'>During this period, I was responsible for selling apa- <br />  rtments in  off-plan and ready-to-move-in develop- <br /> ments, both individually.</p>

<p className='card-exp-direcionalsecondCard-thirdP'> My focus was to meet cus- <br /> tomer needs and offer cus- <br /> tomized solutions, contri- <br />  buting to sales success."</p>
   </div>
   
 </div>

 <div className='arrow'><FaLongArrowAltRight /></div>
 {/* Card3-container-Direcional */}
 <div className='card-exp-direcional-third'>
    <div className='card-exp-direcional-thirdCard-title'>
      <h1>Skills </h1>
      <h1>Developed</h1>
      <div className='card-exp-direcional-thirdCard-text'>
      <p>- Everything is a sell</p>
        <p>- Comunication</p>
        <p>- Active listening </p>
        <p>- Teamwork</p>
        <p>- Time Management</p>
        <p> - Conflict Resolution</p>
        <p>- Flexibility</p>
        <p>- Trust</p>
        <p>- Planning</p>
      </div>
    </div>
 </div>

</div>
        </div>
        
    </div>
  )
}

export default Section2Home