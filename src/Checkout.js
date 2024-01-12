import React, { useState } from 'react';
import './Checkout.css'; // Ensure to create this CSS file

const Checkout = () => {
  const [step, setStep] = useState(1); // State to track checkout step

  const goToPayment = (e) => {
    e.preventDefault(); // Prevent form submission and page reload
    setStep(2); // Proceed to the payment step
  };

  // Define the state variables for payment information
const [paymentInfo, setPaymentInfo] = useState({
    email: '',
    firstName: '',
    lastName: '',
    cardNumber: '',
    expiryDate: '',
    postalCode: '',
    cvc: ''
  });
  
  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    // Here you would handle the submission of payment info
    console.log(paymentInfo);
    // Navigate to the next step or confirmation page
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentInfo({ ...paymentInfo, [name]: value });
  };

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className={step === 1 ? "step active" : "step"}>
          <div className="step-number">1</div>
          <div className="step-title">Ship To</div>
        </div>
        <div className={step === 2 ? "step active" : "step"}>
          <div className="step-number">2</div>
          <div className="step-title">Payment and Billing</div>
        </div>
        {/* ... add step 3 ... */}
      </div>

      {step === 1 && (
        <form className="shipping-form">
        <div className="form-row">
          <input type="text" placeholder="First Name (required)" />
          <input type="text" placeholder="Last Name (required)" />
        </div>
        <div className="form-row">
          <input type="text" placeholder="Street Address (required)" />
        </div>
        <div className="form-row">
          <input type="text" placeholder="Postal Code (required)" />
          <input type="text" placeholder="Town/City (required)" />
        </div>
        <div className="form-row">
          <input type="text" placeholder="State (required)" />
          <input type="text" placeholder="Phone Number (required)" />
        </div>
        <button type="button" className="next-button" onClick={goToPayment}>Next</button>
      </form>
      )}

      {step === 2 && (
      <form className="payment-form" onSubmit={handlePaymentSubmit}>
        {/* ... your existing payment fields ... */}

        <div className="form-row">
          <input
            type="password"
            name="cardNumber"
            placeholder="Card Number (required)"
            value={paymentInfo.cardNumber}
            onChange={handleInputChange}
            required
            pattern="\d{0,12}\d{4}" // Allows for the last 4 digits to be shown
            maxLength="16"
          />
        </div>

        <div className="form-row">
          <input
            type="text"
            name="expiryMonth"
            placeholder="MM"
            value={paymentInfo.expiryMonth}
            onChange={handleInputChange}
            required
            pattern="\d{2}"
            maxLength="2"
          />
          <span>/</span>
          <input
            type="text"
            name="expiryYear"
            placeholder="YYYY"
            value={paymentInfo.expiryYear}
            onChange={handleInputChange}
            required
            pattern="\d{4}"
            maxLength="4"
          />
        </div>

        <div className="form-row">
          <input
            type="text"
            name="postalCode"
            placeholder="Postal Code (required)"
            value={paymentInfo.postalCode}
            onChange={handleInputChange}
            required
            pattern="\d{5}"
            maxLength="5"
          />
    </div>
    <div className="form-row">
      <input
        type="password"
        name="cvc"
        placeholder="CVC (required)"
        value={paymentInfo.cvc}
        onChange={handleInputChange}
        required
        pattern="\d{3}"
        maxLength="3"
      />
    </div>
    <button type="submit" className="next-button">Submit Order</button>
  </form>
)}

      {/* ... step 3 form ... */}
    </div>
  );
};

export default Checkout;
