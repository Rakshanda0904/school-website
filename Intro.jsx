import React from 'react';
import './Intro.css';

const Intro = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('About'); // Ensure 'About' section has this ID
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div id='Intro' className="intro">
      <div className="intro-text">
        <h3>Shiv Shakti Charitable Trust</h3>
        <h1>PARMATMA SHIV VIDAYALAYA</h1>
        <button className='btn' onClick={scrollToAbout}>Know more</button>
      </div>
    </div>
  );
};

export default Intro;
 