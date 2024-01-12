import React from 'react';
import './ShoppingCart.css'; // Ensure to create this CSS file
import boardingPassImage1 from './images/paris.webp';
import boardingPassImage2 from './images/tokyo.jpg';
import trashCanIcon from './images/trashcan.svg'; //
import barcodeImage from './images/barcode.svg'; 
import { useNavigate } from 'react-router-dom';



const ShoppingCart = () => {
    const navigate = useNavigate();
    const handleCheckout = () => {
        navigate('/checkout'); // This will navigate to the checkout page when clicked
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
  
    const totalPrice = items.reduce((acc, item) => acc + item.price, 0);
  
    const handleRemoveItem = (itemId) => {
      // Placeholder for remove item logic
      console.log("Removing item with ID:", itemId);
      // Implement the logic to remove the item from the cart
    };
  
    return (
        <div className="shopping-cart-container">
          <h1>Your Boarding Passes Shopping Cart</h1>
          {items.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={`Boarding Pass ${item.id}`} className="cart-item-image" />
              <div className="cart-item-info">
                <h3>{item.flightNumber}</h3>
                <p>Passenger: {item.passengerName}</p>
                <p>From: {item.from} - To: {item.to}</p>
                <p>Date: {item.date}</p>
                <p>Departure: {item.departureTime} - Arrival: {item.arrivalTime}</p>
                <p>Seat: {item.seat} - Gate: {item.gate}</p>
                <p>Price: ${item.price}</p>
              </div>
              <img src={barcodeImage} alt="Barcode" className="barcode-image" />
              <img src={trashCanIcon} alt="Remove" className="remove-item-icon" onClick={() => handleRemoveItem(item.id)} />
            </div>
          ))}
          <div className="cart-summary">
            <div className="cart-total">
              <h2>Total: ${totalPrice}</h2>
            </div>
            <button className="checkout-button">Checkout</button>
          </div>
        </div>
      );
    };
    
    export default ShoppingCart;