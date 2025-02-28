import React from 'react'
import '../Section2Home/Section2Home.css';
import Direcional from '../../../../assets/img/direcional.png'
const Section2Home = () => {
    const arrow = '------->'
  return (
    <div className='all-section2home'>
        <div className='card-exp-container'>
            {/* Card1-container- Direcional */}
            <div className='card-exp-direcional-container'>
 <div className='card-exp-direcional-firstCard'>
<div className='card-exp-direcional-firstCard-image'>
    <img src={Direcional} alt="direcional-logo" />
</div>

 </div>

 {arrow}

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

{arrow}
 {/* Card3-container-Direcional */}
 <div className='card-exp-direcional-third'>
    <div className='card-exp-direcional-thirdCard-title'>
      <h1>Skills </h1>
      <h1>Developed</h1>
      <div className='card-exp-direcional-thirdCard-text'>
        <p>- Comunication</p>
        <p>- Active listening </p>
        <p>- Teamwork</p>
        <p>- Time Management</p>
        <p> - Conflict Resolution</p>
        <p>- Flexibility</p>
        <p>- Empathy</p>
        <p>- Trust</p>
        <p>- Planning</p>
      </div>
    </div>
 </div>

</div>

{/* Card1-container-NordicStore*/}
<div className=''></div>
        </div>
        
    </div>
  )
}

export default Section2Home