import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // useNavigate replaces useHistory
import './Navbar.css';
import ShoppingCartIcon from './images/shoppingcart.svg'; // Update the path as necessary
import OrderIcon from './images/order.svg'; // Update the path as necessary
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
        <a href="/exploremore-travel/orders" className="nav-link order">
        <img src={OrderIcon} alt="Order" />
      </a>
        <a href="/exploremore-travel/shopping-cart" className="nav-link">
        <img src={ShoppingCartIcon} alt="Shopping Cart" />
      </a>
        {/* Add more nav links as needed */}
      </nav>
    );
  };

export default Navbar; 