import React from 'react';
import './Checkout.css'; // Make sure to create and link this CSS file

const Checkout = () => {
  // Add any state or functions you need here

  return (
    <div className="checkout-page">
      <div className="checkout-forms">
      <div className="ship-to-container">
          <span className="step-number">1</span>
          <h2>Ship To</h2>
          <form>
            <div className="form-row">
                <input type="text" placeholder="First Name" className="first-name" />
                <input type="text" placeholder="Last Name" className="last-name" />
            </div>
            <div className="form-row">
              <input type="text" placeholder="Street Address" className="full-width" />
            </div>
            <div className="form-row">
                <input type="text" placeholder="Postal Code" className="postal-code" />
                <input type="text" placeholder="City" className="city" />
            </div>
            <div className="form-row">
                <input type="text" placeholder="State" className="state-input" />
                <input type="text" placeholder="Phone Number" className="phone" />
            </div>
            {/* Add submit button or navigation buttons as needed */}
          </form>
        </div>
        <div className="payment-container">
          <span className="step-number">2</span>
          {/* Add Payment form fields here */}
          <h2>Payment</h2>
          {/* Form fields */}
          <form>
            <div className="form-row">
            <input type="text" placeholder="Name on Card" className="full-width" />
            </div>
            <div className="form-row">
            <input type="text" placeholder="Card Number" className="full-width" />
            </div>
            <div className="form-row">
            <input type="text" placeholder="Expiration Date" className="half-width" />
            <input type="text" placeholder="CVC" className="cvc" />
            </div>
            <div className="form-checkbox">
            <input type="checkbox" id="save-card" />
            <label htmlFor="save-card">Save Card for future use</label>
            </div>
            <div className="form-button">
            <button type="submit" className="pay-now-button">Pay Now</button>
            </div>
        </form>
        </div>
      </div>
      <div className="review-container">
        <span className="step-number">3</span>
        {/* Add Review details here */}
        <h2>Review</h2>
        {/* Display summary, taxes, total, etc. */}
      </div>
    </div>
  );
};

export default Checkout;
