import React, { useState } from 'react';
import './OrderStatus.css'; // Make sure to create this CSS file

const OrderStatus = () => {
  const [orderId, setOrderId] = useState('');
  const [orderStatus, setOrderStatus] = useState('');

  const handleOrderIdChange = (event) => {
    setOrderId(event.target.value);
  };

  const checkOrderStatus = () => {
    // Placeholder for order status check logic
    // You would typically make an API call here to retrieve the order status
    console.log("Checking status for order ID:", orderId);
    // For demonstration, let's assume an order status
    setOrderStatus("Your order is being processed.");
  };

  return (
    <div className="order-status-container">
      <h1>Check Your Order Status</h1>
      <input
        type="text"
        value={orderId}
        onChange={handleOrderIdChange}
        placeholder="Enter your Order ID"
      />
      <button onClick={checkOrderStatus}>Check Status</button>
      {orderStatus && <div className="status-display">{orderStatus}</div>}
    </div>
  );
};

export default OrderStatus;
