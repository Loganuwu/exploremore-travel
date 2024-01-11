import React from 'react';
import './ShoppingCart.css'; // Ensure to create this CSS file
import boardingPassImage1 from './images/paris.webp';
import boardingPassImage2 from './images/tokyo.jpg';
import trashCanIcon from './images/trashcan.svg'; // Replace with actual path


const ShoppingCart = () => {
    const items = [
      {
        id: 1,
        title: "Flight: EXP123",
        price: 1400,
        dateRange: "12/01/2024 - 12/07/2024",
        image: boardingPassImage1
      },
      {
        id: 2,
        title: "Flight: EXP456",
        price: 2050,
        dateRange: "12/10/2024 - 12/15/2024",
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
              <h3>{item.title}</h3>
              <p>Price: ${item.price}</p>
              <p>Date Range: {item.dateRange}</p>
            </div>
            <img src={trashCanIcon} alt="Remove" className="remove-item-icon" onClick={() => handleRemoveItem(item.id)} />
          </div>
        ))}
        <div className="cart-total">
          <h2>Total: ${totalPrice}</h2>
        </div>
      </div>
    );
  };
  
  export default ShoppingCart;