import React from 'react';
import './style.css'; 
import png1 from '../images/calendar.png';
import png2 from '../images/employees.png';
import png3 from '../images/brand.png';
import png4 from '../images/ranking.png';
import png5 from '../images/social-media.png';
import png6 from '../images/revenue.png';

// Define an array of boxes
const boxes = [
  {
    title: 'Mobile Apps Design',
    image: png1,
    svg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 17L17 7" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M7 7H17V17" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
    )
  },
  {
    title: 'UI/UX Design',
    image: png2,
    svg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 17L17 7" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M7 7H17V17" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
    )
  },
  {
    title: 'Website Design',
    image: png3,
    svg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 17L17 7" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M7 7H17V17" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
    )
  },
  {
    title: 'Webflow Development',
    image: png4,
    svg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 17L17 7" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M7 7H17V17" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
    )
  },
  {
    title: 'Brand Identity',
    image: png5,
    svg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 17L17 7" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M7 7H17V17" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
    )
  },
  {
    title: 'Interaction Design',
    image: png6,
    svg: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 17L17 7" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        <path d="M7 7H17V17" stroke="currentColor" stroke-opacity="0.6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
      </svg>
    )
  },
];

export default function Second() {
  return (
    <>
      <div className='secondbox'>
        <div className='childbox'>
          <div className='childone'>
            <p>Services</p>
            <h3>My specialties</h3>
          </div>
          <div className='childsecond'>
            <p>Synergistically seize front-end methods of empowerment without extensive core competencies. Progressively repurpose alternative platforms</p>
          </div>
        </div>
        <div className='childboxsecond'>
          <div className='one'>
            {boxes.map((box, index) => (
              <div className='boxes' key={index}>
                <div className='svgbox'>
                  <img src={box.image} alt={box.title} /> 
                </div>
                <h4>
                  {box.title}
                  <span>
                    {box.svg}
                  </span>
                </h4>
              </div>
            ))}
          </div>
          <div className='two'>
            
          </div>
        </div>
      </div>
    </>
  );
}
