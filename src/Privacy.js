import React from 'react';
import './Privacy.css';

const Privacy = () => {
  return (
    <div className="privacy-container">
      <h1>Privacy Policy</h1>
      <div className="privacy-grid">
        <section>
          <h2>Introduction</h2>
          <p>Welcome to the ExploreMore Privacy Policy. Here, we explain how we handle your personal data when you visit our website or use our services.</p>
        </section>

        <section>
          <h2>Information We Collect</h2>
          <p>We collect information that you provide directly to us when you book a trip, create an account, or communicate with our customer service team.</p>
        </section>

        <section>
          <h2>How We Use Your Information</h2>
          <p>Your information helps us handle your bookings, personalize your travel experience, and communicate important travel updates.</p>
        </section>

        <section>
          <h2>Sharing Your Information</h2>
          <p>We do not sell your data. We only share information with third parties that help us provide our services, such as payment processors and hotel partners.</p>
        </section>

        <section>
          <h2>Your Rights and Choices</h2>
          <p>You have the right to access, correct, or delete your personal data. You can also opt-out of receiving marketing communications from us at any time.</p>
        </section>

        <section>
          <h2>Updates to This Policy</h2>
          <p>We may update this privacy policy from time to time. The latest version will always be posted on our website.</p>
        </section>

        <section>
          <h2>Contact Us</h2>
          <p>If you have questions about this privacy policy, please contact us at support@exploremore.com.</p>
        </section>
      </div>
    </div>
  );
};

export default Privacy;