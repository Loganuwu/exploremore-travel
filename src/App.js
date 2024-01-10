import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FlightSearch from './FlightSearch';
import StaysSearch from './StaysSearch';
import AttractionsSearch from './attractionSearch';
import Support from './Support';
import './App.css';
import Navbar from './Navbar';

const App = () => {
  const [activeSearchType, setActiveSearchType] = useState('Flights'); // Default to 'Flights'

  return (
    <Router>
      <Navbar /> {/* This is the imported Navbar component being used */}
      <div className="search-container">
        <header className="app-header">
          <h1 className="website-title">ExploreMore</h1>
        </header>
        <div className="search-toggle">
          <button onClick={() => setActiveSearchType('Flights')} className={activeSearchType === 'Flights' ? 'active' : ''}>Flights</button>
          <button onClick={() => setActiveSearchType('Stays')} className={activeSearchType === 'Stays' ? 'active' : ''}>Stays</button>
          <button onClick={() => setActiveSearchType('Attractions')} className={activeSearchType === 'Attractions' ? 'active' : ''}>Attractions</button>
        </div>
        {activeSearchType === 'Flights' && <FlightSearch />}
        {activeSearchType === 'Stays' && <StaysSearch />}
        {activeSearchType === 'Attractions' && <AttractionsSearch />}
      </div>
      <Routes>
        {/* <Route path="/" element={<FlightSearch />} />
        <Route path="/stays" element={<StaysSearch />} />
        <Route path="/attractions" element={<AttractionsSearch />} />
        <Route path="/support" element={<Support />} /> */}
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
