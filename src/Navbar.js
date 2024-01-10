import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/support">Support</Link>
      {/* Add more navigation links as needed */}
    </nav>
  );
};

export default Navbar;
