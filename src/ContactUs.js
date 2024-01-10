import React from 'react';
import './ContactUs.css'; // Make sure to create this CSS file
import { ReactComponent as ContactIcon } from './images/contact.svg'; // Adjust the path to your SVG file


const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <h1>Contact Us</h1>
      <ContactIcon className="contact-icon" />
      <form className="contact-form">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactUs;
