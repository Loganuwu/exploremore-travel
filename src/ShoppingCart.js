import React from 'react';
import './ShoppingCart.css'; // Ensure to create this CSS file
import boardingPassImage1 from './images/paris.webp';
import boardingPassImage2 from './images/tokyo.jpg';
import trashCanIcon from './images/trashcan.svg'; // Replace with actual path
import barcodeImage from './images/barcode.svg'; 


const ShoppingCart = () => {
    const items = [
      {
        id: 1,
        flightNumber: "EXP123",
        passengerName: "John Doe",
        from: "New York (JFK)",
        to: "Paris (CDG)",
        departureTime: "10:00 AM",
        arrivalTime: "8:00 PM",
        seat: "21A",
        gate: "G5",
        price: 100,
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
        seat: "15B",
        gate: "H8",
        price: 150,
        image: boardingPassImage2
      }
    ];
  
    const totalPrice = items.reduce((acc, item) => acc + item.price, 0);
  
    const handleRemoveItem = (itemId) => {
      // Placeholder for remove item logic
      console.log("Removing item with ID:", itemId);
      // Implement the logic to remove the item from the cart
    };
  
    return (
        <div className="shopping-cart-container">
          <h1>Your Boarding Passes</h1>
          {items.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={`Boarding Pass ${item.id}`} className="cart-item-image" />
              <div className="cart-item-info">
                <h3>{item.flightNumber}</h3>
                <p>Passenger: {item.passengerName}</p>
                <p>From: {item.from} - To: {item.to}</p>
                <p>Departure: {item.departureTime} - Arrival: {item.arrivalTime}</p>
                <p>Seat: {item.seat} - Gate: {item.gate}</p>
                <p>Price: ${item.price}</p>
              </div>
              <img src={barcodeImage} alt="Barcode" className="barcode-image" />
            </div>
          ))}
        </div>
      );
    };
  
  export default ShoppingCart;