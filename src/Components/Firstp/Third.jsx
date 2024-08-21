import React, { useState } from 'react';
import './style.css';
import seo from '../images/seo.png';
import om from '../images/shopping-online.png';
import dm from '../images/social-media (2).png';
import bd from '../images/iteration.png';
import ec from '../images/shopping.png';



export default function Third() {
    // State to track the active button; default to 'about'
    const [activeTab, setActiveTab] = useState('about');
    const [showMore, setShowMore] = useState(false); // State to handle "Read More" toggle

    // Sample data for "About Me" content
    const aboutMeContent = `Deep Mehta is the Co-Founder of Digichefs, an independent high performance creative agency based out of Mumbai. An entrepreneur and passion driven individual, Deep started this agency with his co-founder Marmik Ajmera in the later part of the year 2015. They've grown to a team size of 65 people, having worked with over 350 clients over, 50 of whom include fortune 1000 / NSE listed companies.
    
    Deep brings in the aspect of growth at DigiChefs and his role comprises business development & strategic partnerships. Deep has worked on leading brands like Aditya Birla Money, RBL Bank, Arena Animation, Eris Lifesciences, Lupin Pharma, Business Standard, The Art of Living, Tata Motors, Crossword Bookstores, Delhivery and many more.

    Deep started his IT career back in 2012 as an app developer, then moved to digital marketing with SEO as his core area of expertise. He worked with some of the best ecommerce marketplaces in India on their SEO strategies before upskilling himself into a full fledged integrated digital marketer.

    He's worked with brands in a variety of business verticals like Health, BFSI, Real Estate, Fashion, Lifestyle, Nutrition, Technology, B2B and so many more. He helps these brands in achieving their business objectives like ecommerce sales, lead generation, building brand SoV or awareness.

    Recognized as one of the top 100 smartest digital marketing leaders for 2019-20 by World Marketing Congress & CMO Asia in association with ET Rise. He also received the “Atmanirbhar Bharat” award by Indian Achievers Forum in 2021 for helping brands in India sustain.

    Deep also shares his knowledge in digital marketing via seminars in digital marketing institutes across Mumbai. He teaches in institutes like Learning Catalyst, Freelancer's Academy, MCTA, etc.

    Deep also advises startups in multiple incubation centers like RIIDL at Somaiya Vidyavihar, Atal Incubation Center at NMIMS, JITO, SP Jain. He's also a visiting faculty for the entrepreneurship courses offered by RIIDL & SP Jain.

    Deep typically talks on the subjects of Entrepreneurship, Integrated Digital Marketing, Mobile Marketing, Search Engine Optimization, Email Marketing, Google Analytics, Lead Generation and more.`;

    // Function to handle button clicks
    const handleButtonClick = (tab) => {
        setActiveTab(tab);
        setShowMore(false); // Reset "Read More" state when changing tabs
    };

    // Function to toggle "Read More"
    const handleReadMore = () => {
        setShowMore(!showMore);
    };

    return (
        <>
            <div className='thirdbox'>
                <div className='tfirst'>
                    <div className="childone">
                        <p>Resume</p>
                        <h3>All over my details find here...</h3>
                    </div>
                    <button
                        className={activeTab === 'about' ? 'active' : ''}
                        onClick={() => handleButtonClick('about')}
                    >
                        About me
                        <span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 17L17 7" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M7 7H17V17" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </span>
                    </button>
                    <button
                        className={activeTab === 'experience' ? 'active' : ''}
                        onClick={() => handleButtonClick('experience')}
                    >
                        Experience
                        <span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 17L17 7" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M7 7H17V17" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </span>
                    </button>
                    <button
                        className={activeTab === 'education' ? 'active' : ''}
                        onClick={() => handleButtonClick('education')}
                    >
                        Education
                        <span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 17L17 7" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M7 7H17V17" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </span>
                    </button>
                    <button
                        className={activeTab === 'skills' ? 'active' : ''}
                        onClick={() => handleButtonClick('skills')}
                    >
                        Skills
                        <span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 17L17 7" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M7 7H17V17" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </span>
                    </button>
                    <button
                        className={activeTab === 'awards' ? 'active' : ''}
                        onClick={() => handleButtonClick('awards')}
                    >
                        Awards
                        <span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 17L17 7" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M7 7H17V17" stroke="currentColor" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </span>
                    </button>
                </div>
                <div className='tsecond'>
                    {activeTab === 'about' && (
                        <div className='about'>
                            <h2>About Me</h2>
                            <p>
                                {showMore ? aboutMeContent : `${aboutMeContent.substring(0, 200)}...`} {/* Show part of the text initially */}
                                <button onClick={handleReadMore}>
                                    {showMore ? 'Read Less' : 'Read More'}
                                </button>
                            </p>
                            <ul>
                                <li><span className="label">Name</span> <span className="value">Deep Mehta</span></li>
                                <li><span className="label">Nationality</span> <span className="value">India</span></li>
                                <li><span className="label">Phone</span> <span className="value">+91 9892975622</span></li>
                                <li><span className="label">Email</span> <span className="value">hello@henry.com</span></li>
                                <li><span className="label">Experience</span> <span className="value">17+ years</span></li>
                                <li><span className="label">Skype:</span> <span className="value">henry.halk23</span></li>
                                <li><span className="label">Language</span> <span className="value">German, English</span></li>
                            </ul>

                        </div>
                    )}
                    {activeTab === 'experience' && <div className='exp'><h2>Experience</h2>
                        <div className='expbox'>
                            <p>Oct 2015 - Present </p>
                            <span>DigiChefs</span>
                            <h3>Co-Founder
                            </h3>
                        </div>

                        <div className='expbox'>
                            <p>Apr 2019 - Present </p>
                            <span>Research Innovation Incubation Design Laboratory Foundation (Riidl)</span>
                            <h3>Startup Mentor</h3>
                        </div>

                        <div className='expbox'>
                            <p>Jan 2019 - Present </p>
                            <span>AIC-NMIMS Incubation Centre</span>
                            <h3>Startup Mentor</h3>
                        </div>

                        <div className='expbox'>
                            <p>Feb 2021 - Present </p>
                            <span>S.P. Jain Institute of Management & Research · Part-time</span>
                            <h3>Startup Mentor</h3>
                        </div>

                        <div className='expbox'>
                            <p>Sep 2020 - Present </p>
                            <span>Indian Institute of Technology, Kharagpur</span>
                            <h3>Startup Mentor</h3>
                        </div>

                        <div className='expbox'>
                            <p>Aug 2019 - Present </p>
                            <span>JITO INCUBATION & INNOVATION FOUNDATION · Part-time</span>
                            <h3>Startup Mentor</h3>
                        </div>

                        <div className='expbox'>
                            <p>Jun 2013 - Sep 2015 </p>
                            <span>iksula</span>
                            <h3>Business Development Analyst</h3>
                        </div>
                    </div>}
                    {activeTab === 'education' && <div className='edu'>
                        <h2>Education</h2>
                        <div className='expbox'>
                            <p>2009 - 2013 </p>
                            <span>K. J. Somaiya College of Engineering</span>
                            <h3>Bachelor of Engineering - BE, Electronics and Telecommunication Engineering</h3>
                        </div>

                    </div>}
                    {activeTab === 'skills' && <div className='skill'>
                        <h2>Skills</h2>

                        <div className='expbox'>
                            <img src={seo} />
                            <h3>SEO</h3>
                        </div>

                        <div className='expbox'>
                            <img src={om} />
                            <h3>
                                Online Marketing</h3>
                        </div>

                        <div className='expbox'>
                            <img src={dm} />
                            <h3>

                                Digital Marketing</h3>
                        </div>

                        <div className='expbox'>
                            <img src={bd} />
                            <h3>


                                Business Development</h3>
                        </div>

                        <div className='expbox'>
                            <img src={ec} />
                            <h3>



                                E-commerce</h3>
                        </div>

                    </div>}
                    {activeTab === 'awards' && <div>Content for Awards</div>}
                </div>
            </div>
        </>
    );
}
