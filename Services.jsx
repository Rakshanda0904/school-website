import React from 'react';
import './Services.css';
import academic from '../../assets/academic.jpeg';
import meditation from '../../assets/meditation.jpg';
import cultural from '../../assets/cultural.jpg';
import academic_icon from '../../assets/academic.png';
import cultural_icon from '../../assets/cultural.png';
import meditation_icon from '../../assets/exercise.png';

const Services = () => {
  return (
    <div  id="Services" className='services-container'>
      {/* Title Section */}
      <div className="services-title">
        <p>Services offered</p>
        <h2>What we offer</h2>
      </div>

      {/* Services Section */}
      <div className='services'>
        <div className="service">
          <img src={academic} alt="Academic" />
          <div className="caption">
            <img src={academic_icon} alt="Academic Icon" />
            <p>Academic Programs</p>
          </div>
        </div>
        <div className="service">
          <img src={meditation} alt="Meditation" />
          <div className="caption">
            <img src={meditation_icon} alt="Meditation Icon" />
            <p>Co-Curricular Activities</p>
          </div>
        </div>
        <div className="service">
          <img src={cultural} alt="Cultural" />
          <div className="caption">
            <img src={cultural_icon} alt="Cultural Icon" />
            <p>Cultural & Community Engagement</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
