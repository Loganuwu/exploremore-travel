import React, { useState } from 'react';
import './CustomerServiceChat.css'; 
import CustomerServiceIcon from './images/chatperson.svg'; // Update this path


const CustomerServiceChat = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleToggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would handle sending the message
    console.log(message);
    setMessage("");
  };

  return (
    <div className="chat-container">
      {!isChatOpen && (
        <button onClick={handleToggleChat} className="chat-toggle">
          Chat with us!
        </button>
      )}

      {isChatOpen && (
        <div className="chat-popup">
          <img src={CustomerServiceIcon} alt="Customer Service" className="customer-service-icon"/>
          <div className="chat-content">
            <p>We are here 24/7 to help you.</p>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={message}
                onChange={handleMessageChange}
                placeholder="Type your message here..."
              />
              <button type="submit">Send</button>
            </form>
            <button onClick={handleToggleChat} className="close-chat">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerServiceChat;