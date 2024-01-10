import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FlightSearch from './FlightSearch';
import StaysSearch from './StaysSearch';
import AttractionsSearch from './attractionSearch';
import Support from './Support';
import './App.css';
import Navbar from './Navbar';

const App = () => {
  const [activeSearchType, setActiveSearchType] = useState('Flights'); // Default to 'Flights'

  const Home = () => (
    <>
      <header className="app-header">
        <h1 className="website-title">ExploreMore</h1>
      </header>
      <div className="search-container">
        <div className="search-toggle">
          <button onClick={() => setActiveSearchType('Flights')} className={activeSearchType === 'Flights' ? 'active' : ''}>Flights</button>
          <button onClick={() => setActiveSearchType('Stays')} className={activeSearchType === 'Stays' ? 'active' : ''}>Stays</button>
          <button onClick={() => setActiveSearchType('Attractions')} className={activeSearchType === 'Attractions' ? 'active' : ''}>Attractions</button>
        </div>

        {activeSearchType === 'Flights' && <FlightSearch />}
        {activeSearchType === 'Stays' && <StaysSearch />}
        {activeSearchType === 'Attractions' && <AttractionsSearch />}
      </div>
    </>
  );

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/support" element={<Support />} />
        {/* Define other routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
