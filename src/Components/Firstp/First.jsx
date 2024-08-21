import React from 'react';
import Header from '../Header';
import Second from './Second';
import './style.css'; 
import Banner from '../images/hero.png'; // Adjust this path based on your folder structure
import Third from './Third';
import Four from './Four';

export default function First() {
  return (
    <>
      <Header />
      <div className='firstdiv'>
        <div className='first'>
          <div className='name'>
            <span></span>
            <p>Hello, I’m</p> 
          </div>
          <h2>Deep</h2>
          <h2>Mehta</h2>
          <h4>Product Designer | Based in Germany</h4>
          <div className='homebtn'>
          <a className='black'>Let's Talk <span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M7 7H17V17" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </span></a>

              <a className='white'>My Work <span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M7 7H17V17" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </span></a>
              </div>
        </div>
        <div className='second'>
          <img className='banner' src={Banner} alt="Up Arrow" />
        </div>
      </div>
      <Second/>
      <Third/>
      <Four/>
    </>
    
  );
}
