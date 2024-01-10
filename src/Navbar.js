import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // useNavigate replaces useHistory
import './Navbar.css';
import { useHistory } from 'react-router-dom';

const Navbar = () => {
    return (
      <nav className="navbar">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/support" className="nav-link">Support</Link>
        {/* Add more nav links as needed */}
      </nav>
    );
  };

export default Navbar; // Ensure this is at the end of the Navbar.js file