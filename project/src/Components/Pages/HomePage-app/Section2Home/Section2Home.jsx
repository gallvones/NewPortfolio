import React from 'react'
import '../Section2Home/Section2Home.css';
import Direcional from '../../../../assets/img/direcional.png'
import SL from '../../../../assets/img/SLwebsolutions.jpeg';
import ND from '../../../../assets/img/ND.png';
const Section2Home = () => {
    const arrow = '------->' 
  return (
    <div className='all-section2home'>
      <div className='section2home-title'><h1>Experiencias</h1></div>
        <div className='card-exp-container'>
            {/* Card1-container- Direcional */}
            <div className='card-exp-direcional-container'>
 <div className='card-exp-direcional-firstCard'>
<div className='card-exp-direcional-firstCard-image'>
    <img src={Direcional} alt="direcional-logo" />
</div>

 </div>

 <div className='arrow'>{arrow }</div>

{/* Card2-container-Direcional */}
 <div className='card-exp-direcional-second'>
   <div className='card-exp-direcional-secondCard-title'> <h1>Direcional</h1>
   <div className='card-exp-direcional-secondCard-text'>
   <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni at officiis, ea nemo recusandae </p>
   <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ape</p>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, vitae impedit iste vel minus explicabo dolorum ipsam corporis </p>
   </div>
   </div>
 </div>

 <div className='arrow'>{arrow }</div>
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

{/* Card1 Container Nordic Store */}
<div className='card-exp-nd-container'>
<div className='card-exp-nd-firstCard'>
  <div className='card-exp-nd-firstCard-image'>
    <img src={ND} alt="nd-logo" />
  </div>

</div>

<div className='arrow'>{arrow }</div>

{/* Card2-container-NordicStore */}
<div className='card-exp-nd-second'>
  <div className='card-exp-nd-secondCard-title'>
    <h1>SL </h1>
    <h1> WebSolutions</h1>
    <div className='card-exp-nd-secondCard-text'>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus vitae quam, ?</p>
      <p> nisi error incidunt cupiditate nesciunt itaque! Aliquid tenetur possimus</p>
      <p>dolorum dignissimos asper natur ad. Ullam poss incidunt commodi</p>
    </div>
  </div>
</div>
<div className='arrow'>{arrow }</div>

{/* Card3-container-Nordic Store */}
<div className='card-exp-nd-third'>
  <div className='card-exp-nd-thirdCard-title1'>
    <h1>Hard Skills</h1>
    <div className='card-exp-nd-thirdCard-text1'>
    <p>- Comunication</p>
        <p>- Active listening </p>
        <p>- Teamwork</p>
        <p>- Time Management</p>
      
        <div className='card-exp-nd-thirdCard-title2'>
          <h1> Soft Skills</h1>
         <div className='card-exp-nd-thirdCard-text2'>
         <p>- Comunication</p>
        <p>- Active listening </p>
        <p>- Teamwork</p>
        <p>- Time Management</p>
         </div>
        </div>
    </div>
  </div>
</div>
</div>
{/* Card1-container-SL*/}
<div className='card-exp-sl-container'>
<div className='card-exp-sl-firstCard'>
  <div className='card-exp-sl-firstCard-image'>
    <img src={SL} alt="SL-logo" />
  </div>

</div>

<div className='arrow'>{arrow }</div>

{/* Card2-container-SL */}
<div className='card-exp-sl-second'>
  <div className='card-exp-sl-secondCard-title'>
    <h1>SL </h1>
    <h1> WebSolutions</h1>
    <div className='card-exp-sl-secondCard-text'>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus vitae quam, ?</p>
      <p> nisi error incidunt cupiditate nesciunt itaque! Aliquid tenetur possimus</p>
      <p>dolorum dignissimos asper natur ad. Ullam poss incidunt commodi</p>
    </div>
  </div>
</div>
<div className='arrow'>{arrow }</div>

{/* Card3-container-SL */}
<div className='card-exp-sl-third'>
  <div className='card-exp-sl-thirdCard-title1'>
    <h1>Hard Skills</h1>
    <div className='card-exp-sl-thirdCard-text1'>
    <p>- Comunication</p>
        <p>- Active listening </p>
        <p>- Teamwork</p>
        <p>- Time Management</p>
      
        <div className='card-exp-sl-thirdCard-title2'>
          <h1> Soft Skills</h1>
         <div className='card-exp-sl-thirdCard-text2'>
         <p>- Comunication</p>
        <p>- Active listening </p>
        <p>- Teamwork</p>
        <p>- Time Management</p>
         </div>
        </div>
    </div>
  </div>
</div>
</div>



        </div>
        
    </div>
  )
}

export default Section2Home