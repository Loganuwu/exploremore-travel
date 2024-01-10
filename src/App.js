import React, { useState } from 'react';
import FlightSearch from './FlightSearch';
import StaysSearch from './StaysSearch';
import AttractionsSearch from './attractionSearch';
import './App.css'; // Assuming this is where you define styles for your main component

const App = () => {
    const [activeSearchType, setActiveSearchType] = useState('Flights'); // Default to 'Flights'

    return (
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
    
};

export default App;
