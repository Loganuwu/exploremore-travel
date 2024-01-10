// Support.js
import React from 'react';
import './Support.css'; // Make sure you have the CSS file for styles

const Support = () => {
  return (
    <div className="support-container">
      <div className="support-column">
        <h2 className="support-title">Contact Us</h2>
        <p>For any inquiries, assistance, or feedback, our ExploreMore customer support team is ready to help you. Reach out to us via email at <a href="mailto:support@exploremore.com">support@exploremore.com</a>, or call us at 1-800-EXPLORE for immediate assistance. Our dedicated team is available 24/7 to ensure your travel planning is seamless and enjoyable. Whether you have a question about your booking or need travel advice, we're here to support your journey every step of the way.</p>
      </div>

      <div className="support-column">
        <h2 className="support-title">About Us</h2>
        <p>ExploreMore is your trusted travel partner, dedicated to enriching your travel experiences. We believe in creating unforgettable journeys that cater to your unique travel desires. From exotic destinations to local retreats, our extensive network ensures you have access to the best flights, accommodations, and activities. Our passionate team works tirelessly to bring you the most up-to-date travel information and personalized service, ensuring your adventures with ExploreMore are nothing short of extraordinary.</p>
      </div>
      <div className="support-column">
        <h2 className="support-title">Privacy</h2>
        <p>Your privacy is paramount at ExploreMore. We are committed to protecting your personal information with the highest standards of security. Our privacy policy ensures that your data is used solely for enhancing your travel experience and is never shared without your explicit consent. We employ state-of-the-art encryption and security measures to safeguard your information, providing you with peace of mind as you explore the world with us.</p>
      </div>
    </div>
  );
};

export default Support;
