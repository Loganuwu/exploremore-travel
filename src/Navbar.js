import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // useNavigate replaces useHistory
import './Navbar.css';
import ShoppingCartIcon from './images/shoppingcart.svg'; // Update the path as necessary
import OrderIcon from './images/order.svg'; // Update the path as necessary
import { useHistory } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const hamburger = document.querySelector('.hamburger-menu');
    const navMenu = document.querySelector('.nav-menu');

    const toggleMenu = () => {
      navMenu.classList.toggle('show');
    };

    hamburger.addEventListener('click', toggleMenu);

    return () => {
      hamburger.removeEventListener('click', toggleMenu);
    };
  }, []);
  

    return (
      <nav className="navbar">
      <div className="hamburger-menu">
        <span></span>
        <span></span>
        <span></span>
      </div>
        <Link to="/home" className="nav-link">Home</Link>
        <Link to="/support" className="nav-link">Support</Link>
        <Link to="/contact-us" className="nav-link">Contact Us</Link>
        <Link to="/about-us" className="nav-link">About Us</Link>
        <Link to="/privacy" className="nav-link">Privacy</Link>
        <Link to="/destinations" className="nav-link">Destinations Guide</Link>
        <Link to="/resources" className="nav-link">Resources</Link>
        <Link to="/orders" className="nav-link order">
        <img src={OrderIcon} alt="Order" />
      </Link>
      <Link to="/shopping-cart" className="nav-link">
        <img src={ShoppingCartIcon} alt="Shopping Cart" />
      </Link>
        {/* Add more nav links as needed */}
      </nav>
    );
  };

export default Navbar; 