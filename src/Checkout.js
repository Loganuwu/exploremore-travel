import React, { useState } from 'react';
import './Checkout.css'; // Make sure to create and link this CSS file
import boardingPassImage1 from './images/paris.webp';
import boardingPassImage2 from './images/tokyo.jpg';

const Checkout = () => {

    const [orderNumber, setOrderNumber] = useState('');

    const handlePayNow = () => {
        // Generate a random order number: 2 letters followed by 4 digits
        const randomOrderNumber = 
          Math.random().toString(36).substring(2, 4).toUpperCase() + 
          Math.floor(Math.random() * 10000).toString().padStart(4, '0');
        setOrderNumber(randomOrderNumber);
      };

    const items = [
        {
          id: 1,
          flightNumber: "EXP123",
          passengerName: "John Doe",
          from: "New York (JFK)",
          to: "Paris (CDG)",
          departureTime: "10:00 AM",
          arrivalTime: "8:00 PM",
          date: "12/01/2024",
          seat: "21A",
          gate: "G5",
          price: 1300,
          image: boardingPassImage1
        },
        {
          id: 2,
          flightNumber: "EXP456",
          passengerName: "Jane Smith",
          from: "Paris (CDG)",
          to: "Tokyo (HND)",
          departureTime: "9:00 PM",
          arrivalTime: "11:00 AM",
          date: "12/10/2024",
          seat: "15B",
          gate: "H8",
          price: 450,
          image: boardingPassImage2
        }
      ];

      const total = items.reduce((acc, item) => acc + item.price, 0);


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
                <button className="pay-now-button" onClick={handlePayNow}>Pay Now</button>
                {orderNumber && <p>Order Number: {orderNumber}</p>}
            </div>
        </form>
        </div>
      </div>
      <div className="review-container">
        <span className="step-number">3</span>
        {/* Add Review details here */}
        <h2>Review</h2>
        {/* Display summary, taxes, total, etc. */}
        {items.map(item => (
          <div key={item.id} className="flight-review">
            <img src={item.image} alt={`Flight ${item.flightNumber}`} className="flight-image" />
            <p>{item.flightNumber} - {item.passengerName}</p>
            <p>{item.from} to {item.to}</p>
            <p>Departure: {item.departureTime} - Arrival: {item.arrivalTime}</p>
            <p>Date: {item.date}</p>
            <p>Seat: {item.seat} - Gate: {item.gate}</p>
            <p>Price: ${item.price}</p>
          </div>
        ))}
        <div className="grand-total">
          <h3>Grand Total: ${total}</h3>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
