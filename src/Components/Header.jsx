// src/Header.jsx
import React, { useState } from 'react';
import './HamburgerMenu.css'; // Create or update this CSS file
import logo from '../Assets/offcanvas-logo.png'; // Adjust path if necessary

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className={`hamburger-menu ${isOpen ? 'open' : ''}`}>
        <button className="hamburger-button" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>
        <div className={`menu ${isOpen ? 'open' : ''}`}>
          <div className='openmenu'>
          <img className='brandlogo' src={logo} alt="Up Arrow" />   
            <button className="hamburger-button close" onClick={toggleMenu}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </button>  
          </div> 
          <ul>
            <li><a href="#home">Home <span class="inline-block group-hover:animate-arrow-move-up">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M7 7H17V17" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </span></a></li>
            <li><a href="#about">About <span class="inline-block group-hover:animate-arrow-move-up">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M7 7H17V17" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </span></a></li>
            <li><a href="#services">Services <span class="inline-block group-hover:animate-arrow-move-up">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M7 7H17V17" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </span></a></li>
            <li><a href="#contact">Contact <span class="inline-block group-hover:animate-arrow-move-up">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M7 7H17V17" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </span></a></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
