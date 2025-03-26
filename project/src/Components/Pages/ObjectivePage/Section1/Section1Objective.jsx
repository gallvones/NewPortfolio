import React from 'react'
import '../Section1/Section1Objective.css'
import myImage2 from '../../../../assets/img/perfil2.png'
import Section1Icons from '../../HomePage-app/Section1/Section1Icons/Section1Icons';

const Section1objective = () => {
  return (
    <div className='all-section-objective'>
        <div className='galvaoimage2-container'>
            <img src={myImage2} alt="My image2" />
        </div>
        <div className='objective-text'>
            <h1> FullStack Developer</h1>
            <br />
            <p>Specializing in React, Node.js, and MongoDB, I have experience using Vite for efficient builds, hooks like useState and useContext, and react-router-dom for route management. </p>
            <br />
               <p> On the back end, I work with Express, HTTPS routes, JWT authentication, middlewares, and testing with Jest/Supertest. I use Mongoose for MongoDB data manipulation and implement RESTful APIs for internal and third-party integrations.</p>
<br />
<p> Familiar with Git for version control, Trello for organization, Figma for prototyping, and Postman for API testing. </p>
<br />
<p>I am looking for a Junior FullStack Developer position.</p>
            <br />
            <div className='SocialMedia-icons'>
                <Section1Icons/>
            </div>
  
            
        </div>
        
        
        
        </div>
  )
}

export default Section1objective