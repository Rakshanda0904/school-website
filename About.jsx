import React from 'react'
import './About.css'
import about_img from '../../assets/about.jpeg'

const About = () => {
  return (
    <div  id="About" className='about' >
      <div className="about-left">
        <img src={about_img} alt="" className='about-img' />
      </div>
      <div className="about-right">
        <h3>ABOUT US</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p> We believe that education should be accessible, affordable, and enriching. 
            We offer classes from Nursery to 10th grade, following the State Board curriculum, 
            ensuring a strong academic foundation for every student. Our focus is on nurturing young minds in a supportive,
             inclusive environment that encourages both academic excellence and personal development.</p>
        <p>We’re committed to keeping education affordable without compromising quality. 
            With low fees and a curriculum designed for the holistic development of every student,
             we prepare children for success both in and outside the classroom.</p>
             <div className="fee-structure">
      <h2>Fee Structure</h2>
      <table>
        <thead>
          <tr>
            <th>Class</th>
            <th>Admission Charge</th>
            <th>Monthly Fee</th>
            <th>Total Yearly Fee</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Pre-Primary</td>
            <td>₹1000</td>
            <td>₹500</td>
            <td>₹7000</td>
          </tr>
          <tr>
            <td>Primary (1st - 4th)</td>
            <td>₹1300</td>
            <td>₹550</td>
            <td>₹7700</td>
          </tr>
          <tr>
            <td>Secondary (5th - 8th)</td>
            <td>₹1600</td>
            <td>₹600</td>
            <td>₹8400</td>
          </tr>
          <tr>
            <td>9th Std</td>
            <td>-</td>
            <td>₹860</td>
            <td>₹12000</td>
          </tr>
        </tbody>
      </table>
    </div>
      </div>
    </div>
  )
}

export default About
