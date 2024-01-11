import React from 'react';
import './ShoppingCart.css'; // Ensure to create this CSS file
import boardingPassImage1 from './images/paris.webp';
import boardingPassImage2 from './images/tokyo.jpg';

const ShoppingCart = () => {
  return (
    <div className="shopping-cart-container">
      <h1>Your Boarding Passes</h1>
      <div className="boarding-pass">
        <img src={boardingPassImage1} alt="Boarding Pass 1" className="boarding-pass-image" />
        <div className="boarding-pass-info">
          <h3>Flight: EXP123</h3>
          <p>Passenger: John Doe</p>
          <p>From: New York (JFK) to Paris (CDG)</p>
          <p>Departure: 12/01/2024, 10:00 AM</p>
          <p>Seat: 21A</p>
          {/* Add more flight information as needed */}
        </div>
      </div>
      <div className="boarding-pass">
        <img src={boardingPassImage2} alt="Boarding Pass 2" className="boarding-pass-image" />
        <div className="boarding-pass-info">
          <h3>Flight: EXP456</h3>
          <p>Passenger: Jane Smith</p>
          <p>From: Paris (CDG) to Tokyo (HND)</p>
          <p>Departure: 12/10/2024, 9:00 PM</p>
          <p>Seat: 15B</p>
          {/* Add more flight information as needed */}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
