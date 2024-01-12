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
        <Link to="/exploremore-travel/support" className="nav-link">Support</Link>
        <Link to="/exploremore-travel/contact-us" className="nav-link">Contact Us</Link>
        <Link to="/exploremore-travel/about-us" className="nav-link">About Us</Link>
        <Link to="/exploremore-travel/privacy" className="nav-link">Privacy</Link>
        <Link to="/exploremore-travel/destinations" className="nav-link">Destinations Guide</Link>
        <Link to="/exploremore-travel/resources" className="nav-link">Resources</Link>
        <Link to="/exploremore-travel/orders" className="nav-link order">
        <img src={OrderIcon} alt="Order" />
      </Link>
      <Link to="/exploremore-travel/shopping-cart" className="nav-link">
        <img src={ShoppingCartIcon} alt="Shopping Cart" />
      </Link>
        {/* Add more nav links as needed */}
      </nav>
    );
  };

export default Navbar; 