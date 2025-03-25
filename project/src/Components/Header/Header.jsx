import React from 'react';
import '../Header/Header.css';
import { Link } from 'react-router-dom';
import MyLogo from '../../assets/img/logo.png';
const Header = () => {


  return (
    <div className='all'>
      <div className='logo-container'>
      <Link to='/'> <div className='img-link'> <img src={MyLogo} alt="" /></div></Link>
      </div>
    <div className='links-container'>
    
    <Link  to='/objective'><h2 className='links'>Objective</h2></Link>
    <Link to='/projects'><h2 className='links'>Projects</h2></Link>
    <Link to='/contact'><h2 className='links'>Contact</h2></Link>
     <a href="mailto:luizgalvao.dev@gmail.com"><h2 className='links'> Mail </h2></a>
    </div>

    <div className='links2-container'>
    <Link  to='/objective'><h2 className='links'>Objective</h2></Link>
    <Link to='/projects'><h2 className='links'>Projects</h2></Link>
    <Link to='/contact'><h2 className='links'>Contact</h2></Link>
    </div>

   
<div className='logo2-container'>
<Link to='/'> <div className='img-link'> <img src={MyLogo} alt="" /></div></Link>
</div>
<div className='logo3-container'>
<div className='img3-link'> <img src={MyLogo} alt="" /></div>

</div>
    </div>
  )
}

export default Header