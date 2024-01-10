import React from 'react';
import './ContactUs.css';
import { ReactComponent as ContactIcon } from './images/contact.svg'; 
import { ReactComponent as EmailIcon } from './images/email.svg';
import { ReactComponent as PhoneIcon } from './images/phone.svg';

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <h1>Contact Us</h1>
      <div className="contact-us-grid">
        
        <div className="contact-info email">
        <EmailIcon className="contact-icon" /> {/* Email SVG icon */}
          <p>
            For any inquiries, assistance, or feedback, our ExploreMore customer support team is ready to help you. Reach out to us via email at
            <a href="mailto:support@exploremore.com"> support@exploremore.com</a>
          </p>
        </div>
        
        <div className="contact-form-container">
          <ContactIcon className="contact-icon" /> {/* SVG icon */}
          <form className="contact-form">
            <input type="text" id="name" name="name" placeholder="Your Name" required />
            <input type="email" id="email" name="email" placeholder="Your Email" required />
            <textarea id="message" name="message" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
        
        <div className="contact-info phone">
        <PhoneIcon className="contact-icon" /> {/* Phone SVG icon */}
          <p>
            Or call us at <a href="tel:1-800-EXPLORE">1-800-EXPLORE</a> for immediate assistance. Our dedicated team is available 24/7 to ensure your travel planning is seamless and enjoyable.
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default ContactUs;