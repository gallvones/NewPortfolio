import React from 'react'
import '../Section2ContactPage/Section2Contact.css'
const Section2Contact = () => {
  return (
    <div className='all-section2-Contact'>
        <div className='form-container'>
            <form action="post" className='form'>
<input type="text"  name='firstline' placeholder='Name and Surname' className='firstline'/>
<input type="text" name='secondline'  placeholder='Number or @SocialMedia Profile' className='secondline'/>
<input type="text" name='thirdline' placeholder='Reason for Contact' className='thirdline' />
<textarea name='fourdline'placeholder='Description'className='fourdline' />
<button type='submit' className='btn'>Send</button>
            </form>
        </div>
        
        </div>
  )
}

export default Section2Contact