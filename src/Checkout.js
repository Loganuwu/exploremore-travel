import React from 'react';
import './Checkout.css';
import { useNavigate } from 'react-router-dom';


const Checkout = () => {
  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      <form>
        <label>
          Address:
          <input type="text" name="address" />
        </label>
        <label>
          Contact Information:
          <input type="text" name="contact" />
        </label>
        <label>
          Credit Card Number:
          <input type="text" name="credit-card" />
        </label>
        {/* Add additional fields for expiration date, CVV, etc. */}
        <button type="submit">Submit Order</button>
      </form>
    </div>
  );
};

export default Checkout;
