import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // useNavigate replaces useHistory
import './Navbar.css';
import { useHistory } from 'react-router-dom';

const Navbar = () => {
    return (
      <nav className="navbar">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/support" className="nav-link">Support</Link>
        <Link to="/contact-us" className="nav-link">Contact Us</Link>
        <Link to="/about-us" className="nav-link">About Us</Link>
        <Link to="/privacy" className="nav-link">Privacy</Link>
        <Link to="/destinations" className="nav-link">Destinations Guide</Link>
        <Link to="/resources" className="nav-link">Resources</Link>
        <Link to="/orders" className="nav-link">Order Status</Link>
        <Link to="/shopping-cart" className="nav-link">Shopping Cart</Link>
        {/* Add more nav links as needed */}
      </nav>
    );
  };

export default Navbar; 