import React from 'react';
import { Link } from 'react-router-dom';
import './Support.css'; 
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import InfoIcon from '@mui/icons-material/Info';
import SecurityIcon from '@mui/icons-material/Security';

const Support = () => {
  return (
    <div className="support-container">
      <div className="support-column">
        <Link to="/contact-us" className="support-link">
            <div className="contact-header">
              <h2 className="support-title">Contact Us</h2> {/* Contact Us Title */}
              <ContactPhoneIcon /> {/* Contact Phone Icon */}
            </div>
          </Link>
        <p>For any inquiries, assistance, or feedback, our ExploreMore customer support team is ready to help you. Reach out to us via email at <a href="mailto:support@exploremore.com" style={{ color: '#007bff' }}>support@exploremore.com</a>, or call us at 1-800-EXPLORE for immediate assistance. Our dedicated team is available 24/7 to ensure your travel planning is seamless and enjoyable. Whether you have a question about your booking or need travel advice, we're here to support your journey every step of the way.</p>
      </div>

      <div className="support-column">
          <Link to="/about-us" className="support-link">
            <div className="contact-header">
              <h2 className="support-title">About Us</h2>
              <InfoIcon /> {/* Info icon for About Us */}
            </div>
          </Link>
        <p>ExploreMore is your trusted travel partner, dedicated to enriching your travel experiences...</p>
      </div>

      <div className="support-column">
        <Link to="/privacy" className="support-link">
            <div className="contact-header">
              <h2 className="support-title">Privacy</h2>
              <SecurityIcon /> {/* Security icon for Privacy */}
            </div>
          </Link>
        <p>Your privacy is paramount at ExploreMore...</p>
      </div>
    </div>
  );
};

export default Support;
