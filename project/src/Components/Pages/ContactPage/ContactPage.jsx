import React from 'react'
import '../ContactPage/ContactPage.css'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'

const ContactPage = () => {
  return (
    <div className='contactPage'>
        <div className='header'>
           <Header/>
           </div>
           <div className='body'>
            {/* Section1Contact */}
            <hr />
            {/* Section2Contact */}
            <hr />
           </div>
        <div className='footer'>
          <Footer/>
          </div>
        </div>
  )
}

export default ContactPage