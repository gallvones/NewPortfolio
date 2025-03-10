import React from 'react'
import '../../../app.css'
import '../ObjectivePage/ObjectivePage.css'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import Section1 from  './Section1/Section1objective.jsx'
import Section2 from './Section2/Section2'

const ObjectivePage = () => {
  return (
    <div className='objectPage'>
    <div className='header'>
       <Header/>
       </div>
       <div className='body'>
        <Section1/>
        <hr />
        <Section2/>
        <hr />
       </div>
    <div className='footer'>
      <Footer/>
      </div>
    </div>
  )
}

export default ObjectivePage