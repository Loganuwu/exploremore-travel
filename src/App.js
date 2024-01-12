import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import FlightSearch from './FlightSearch';
import StaysSearch from './StaysSearch';
import AttractionsSearch from './attractionSearch';
import Support from './Support';
import './App.css';
import Navbar from './Navbar';
import ContactUs from './ContactUs';
import AboutUs from './AboutUs';
import Privacy from './Privacy';
import DestinationsGuide from './DestinationsGuide';
import TravelResourcesTools from './TravelResourcesTools';
import CustomerServiceChat from './CustomerServiceChat';
import OrderStatus from './OrderStatus';
import ShoppingCart from './ShoppingCart';
import Checkout from './Checkout';


const App = () => {
  const [activeSearchType, setActiveSearchType] = useState('Flights'); // Default to 'Flights'

  return (
    <Router>
      <Navbar />
      <CustomerServiceChat />
      <Routes>
      <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={
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
        } />
        <Route path="/support" element={<Support />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/destinations" element={<DestinationsGuide />} />
        <Route path="/resources" element={<TravelResourcesTools />} />
        <Route path="/orders" element={<OrderStatus />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/checkout" element={<Checkout />} />

        {/* Define other routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
