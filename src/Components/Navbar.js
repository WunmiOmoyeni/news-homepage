import React, { useState } from 'react'
import logo from '../images/logo.svg'
import togglebutton from '../images/icon-menu.svg'
import closebutton from '../images/icon-menu-close.svg'

export const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDropdownItemClick = (itemName) => {
    console.log('Clicked on ${itemName}');
    setIsDropdownOpen(false);
  }

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  }
  return (
    <div>
      {isDropdownOpen && <div className='overlay' onClick={closeDropdown}></div>}
      <div className='navbar'>
      <nav>
      <img src={logo} alt='Logo' className='logo-navbar'></img>
      <div className='navbar-content'>
        <a href='#'>Home</a>
        <a href='#'>New</a>
        <a href='#'>Popular</a>
        <a href='#'>Trending</a>
        <a href='#'>Categories</a>
      </div> 
      

        <img src={togglebutton} className='toggle-button' onClick={toggleDropdown}></img>
      {isDropdownOpen && (
        <div className='background-blur'>
          <div className='dropdown-menu'>
            <img src={closebutton} onClick={closeDropdown}></img>
          <ul>
            <li>Home</li>
            <li>New</li>
            <li>Popular</li>
            <li>Trending</li>
            <li>Categories</li>
          </ul>
          </div>
        </div>
        
        
      )}


      </nav>
      
    </div>
    </div>
    
  )
}


export default Navbar;
