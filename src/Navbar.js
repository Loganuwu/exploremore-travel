import React from 'react';
import { Link } from 'react-router-dom'; // Make sure you have react-router-dom installed
import './Navbar.css'; // Make sure to create a Navbar.css file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">ExploreMore</Link>
      <Link to="/support">Support</Link>
      {/* Add other links as needed */}
    </nav>
  );
};

export default Navbar;
