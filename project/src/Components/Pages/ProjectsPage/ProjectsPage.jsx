import React from 'react'
import '../ProjectsPage/ProjectsPage.css'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import Section1Projects from '../ProjectsPage/Section1ProjectsPage/Section1Projects';
import Section2Projects from './Section2ProjectsPage/Section2Projects';

const ProjectsPage = () => {
  return (
    <div className='projectsPage'>
    <div className='header-projects'>
       <Header/>
       </div>
       <div className='body-projects'>
        <Section1Projects/>
        <hr />
        <Section2Projects/>
        <hr />
       </div>
    <div className='footer-projects'>
      <Footer/>
      </div>
    </div>
  )
}

export default ProjectsPage