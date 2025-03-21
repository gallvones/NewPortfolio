import React from 'react';
import '../Header/Header.css';
import { Link } from 'react-router-dom';
import MyLogo from '../../assets/img/logo.png';
const Header = () => {
  return (
    <div className='all'>
    <div className='links_container'>
   <Link to='/'><h2 className='links'>Home</h2></Link> 
    <Link  to='/objective'><h2 className='links'>Objective</h2></Link>
    <Link to='/'> <div className='img-link'> <img src={MyLogo} alt="" /></div></Link>
    <Link to='/projects'><h2 className='links'>Projects</h2></Link>
    <Link to='/contact'><h2 className='links'>Contact</h2></Link>
    </div>


    </div>
  )
}

export default Header