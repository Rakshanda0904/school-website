/*import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/mail.png'
import email_icon from '../../assets/email.png'
import phone_icon from '../../assets/telephone.png'
import add_icon from '../../assets/location.png'

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "4d4461b4-4c4a-4661-a8cc-faaf7793d7ee");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div id="Contact" className='contact'>
      <div className="contact-title">
        <p>Contact us</p>
        <h2>Get in touch</h2>
      </div>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>Feel free to reach out through contact form or find our contact
            information below. Your feeback, your questions, and suggestions are
            important to us as we strive to provide exceptional service to our
            school community.</p>
        <ul>
            <li><img src={email_icon} alt="" />psvhighschoolvasai@gmail.com</li>
            <li><img src={phone_icon} alt="" />8850837459</li>
            <li><img src={add_icon} alt="" /> Om shanti bhavan gauraipada hawaipada rd<br /> near datta mandir vasai (east) 401208</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input type="text" name='name' placeholder='Enter your name' required/>
          <label>Phone number</label>
          <input type="tel" name='phone' placeholder='Enter your phone number' required />
          <label>Write your message here</label>
          <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
          <button type='submit' className='btn'>Submit now</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact*/
import React from 'react';
import './Contact.css';
import msg_icon from '../../assets/mail.png';
import email_icon from '../../assets/email.png';
import phone_icon from '../../assets/telephone.png';
import add_icon from '../../assets/location.png';

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "4d4461b4-4c4a-4661-a8cc-faaf7793d7ee");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="Contact">
      {/* Move the Contact Title here */}
      <div className="contact-title">
        <p>Contact us</p>
        <h2>Get in touch</h2>
      </div>

      <div className="contact">
        <div className="contact-col">
          <h3>Send us a message <img src={msg_icon} alt="" /></h3>
          <p>Feel free to reach out through our contact form or find our contact
            information below. Your feedback, questions, and suggestions are
            important to us as we strive to provide exceptional service to our
            school community.</p>
          <ul>
            <li><img src={email_icon} alt="" />psvhighschoolvasai@gmail.com</li>
            <li><img src={phone_icon} alt="" />8850837459</li>
            <li><img src={add_icon} alt="" /> Om Shanti Bhavan, Gauraipada Hawaipada Rd, <br /> Near Datta Mandir, Vasai (East) 401208</li>
          </ul>
        </div>

        <div className="contact-col">
          <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type="text" name='name' placeholder='Enter your name' required />
            <label>Phone number</label>
            <input type="tel" name='phone' placeholder='Enter your phone number' required />
            <label>Write your message here</label>
            <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn'>Submit now</button>
          </form>
          <span>{result}</span>
        </div>
      </div>

      {/* Embedded Google Map */}
      <div className="map-container">
    <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15051.765958784254!2d72.83973144617856!3d19.414933869536032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sOm%20Shanti%20Bhavan%2C%20Gauraipada%20Hawaipada%20Rd%2C%20Near%20Datta%20Mandir%2C%20Vasai%20(East)%20401208!5e0!3m2!1sen!2sin!4v1741509826684!5m2!1sen!2sin"
        width="100%"
        height="350"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade">
    </iframe>
</div>

    </div>
  );
};

export default Contact;

