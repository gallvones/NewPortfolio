import React from 'react'
import '../Section1ProjectsPage/Section1Projects.css'
import IMGperfil from '../../../../assets/img/perfil.jpg'
import NDLOGO from '../../../../assets/img/NDLOGO.png'
const Section1Projects = () => {
  return (
    <div className='all-Projects-section1'>
        <div className='Projects-section1-container'>
            <div className='title-section1'>
                <h1> Projects</h1>
            </div>
            <div className='section1-text1'>
                <p> - Here, you can check out the projects I developed in complete and detailed form.</p>
            </div>
            <div className='firstlineCards-section1'>

                {/* FIrstlineCard1 */}
                <div className='firstline-firstCard-section1'>
                  <div className='firstline-firstCard-img-container-section1'> <img src= {NDLOGO} alt="Nordic Store Img" /></div>
                   <div className='firstline-firstCard-title'><h2> Nordic Store </h2> </div>
                </div>

                {/* FirstlineCard2 */}
                <div className='firstline-secondCard-section1'>
                    <div className='firstline-secondCard-img-container-section1'><img src={IMGperfil} alt="My image" /></div>
                    <div className='firstline-secondCard-title'><h2> My Portfolio</h2> </div>
                </div>


                 {/* ThirdlineCard3 */}

                <div className='firstline-thirdCard-section1'>
                    <div className='firstline-thirdCard-img-container-section1'><img src= ''alt="#30 days project" /> </div>
                    <div className='firstline-thirdCard-title'><h2> Linkedin Posts</h2> </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Section1Projects