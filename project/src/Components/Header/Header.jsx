import React from 'react';
import '../Header/Header.css';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className='all'>
    <div className='links_container'>
   <Link to='/'><h2>Home</h2></Link> 
    <Link  to='/objective'><h2>Objective</h2></Link>
    <Link to='/projects'><h2>Projects</h2></Link>
    <Link to='/contact'><h2>Contact</h2></Link>
    </div>


    </div>
  )
}

export default Header