import React from 'react'
import '../ContactPage/ContactPage.css'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import Section1 from '../ContactPage/Section1ContactPage/Section1Contact'
import Section2 from '../ContactPage/Section2ContactPage/Section2Contact'
const ContactPage = () => {
  return (
    <div className='contactPage'>
        <div className='header'>
           <Header/>
           </div>
           <div className='body'>
            <Section1/>
            <hr  className='hr2'/>
            <Section2/>
            <hr className='hr3'/>
           </div>
        <div className='footer'>
          <Footer/>
          </div>
        </div>
  )
}

export default ContactPage