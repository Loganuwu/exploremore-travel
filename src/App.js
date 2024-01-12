import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
        <Route path="/" element={
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
        <Route path="/exploremore-travel/support" element={<Support />} />
        <Route path="/exploremore-travel/contact-us" element={<ContactUs />} />
        <Route path="/exploremore-travel/about-us" element={<AboutUs />} />
        <Route path="/exploremore-travel/privacy" element={<Privacy />} />
        <Route path="/exploremore-travel/destinations" element={<DestinationsGuide />} />
        <Route path="/exploremore-travel/resources" element={<TravelResourcesTools />} />
        <Route path="/exploremore-travel/orders" element={<OrderStatus />} />
        <Route path="/exploremore-travel/shopping-cart" element={<ShoppingCart />} />
        <Route path="/exploremore-travel/checkout" element={<Checkout />} />

        {/* Define other routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
