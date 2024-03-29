import React, { useState } from 'react';
import './OrderStatus.css';
import orderImage1 from './images/Utah-mountains.jpg';
import orderImage2 from './images/sedonasnow.jpg';

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

      <div className="orders-display">
      <div class="order-item">
      <img src={orderImage1} alt="Order 1" className="order-image" />
        <div class="order-details">
                <h3 class="trip-title">Utah Trip</h3>
            </div>
            <div class="order-total">
            <p>Total: $650</p>
            </div>
        </div>
        <div class="order-item">
        <img src={orderImage2} alt="Order 2" className="order-image" />
          <div class="order-details">
                  <h3 class="trip-title">Northern Arizona Trip</h3>
              </div>
              <div class="order-total">
              <p>Total: $350</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default OrderStatus;