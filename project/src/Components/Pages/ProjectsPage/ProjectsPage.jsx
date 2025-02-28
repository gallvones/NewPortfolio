import React from 'react'
import '../ProjectsPage/ProjectsPage.css'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'

const ProjectsPage = () => {
  return (
    <div className='projectsPage'>
    <div className='header'>
       <Header/>
       </div>
       <div className='body'>
        {/* Section1Projects */}
        <hr />
        {/* Section2Projects */}
        <hr />
       </div>
    <div className='footer'>
      <Footer/>
      </div>
    </div>
  )
}

export default ProjectsPage