import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // useNavigate replaces useHistory
import './Navbar.css';
import { useHistory } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

  const handleSupportClick = () => {
    navigate('/support'); // Navigate to the support page using useNavigate
  };

  return (
    <nav className="navbar">
      <Link to="/">ExploreMore</Link>
      <button onClick={handleSupportClick}>Support</button>
      {/* Add other navigation items here */}
    </nav>
  );
};

export default Navbar; // Ensure this is at the end of the Navbar.js file