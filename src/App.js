import React, { useState, useEffect } from 'react';
import DestinationList from './DestinationList';
import FlightSearch from './FlightSearch';
import './App.css';
import { ReactComponent as Plane } from './images/Plane.svg';

const App = () => {
    const [destinations, setDestinations] = useState([]);
    const [flights, setFlights] = useState([]);
    const [searchMode, setSearchMode] = useState('flights'); // State to toggle between flights and stays

    useEffect(() => {
        // Fetch destinations from an API
        fetch('/api/destinations')
            .then(response => response.json())
            .then(data => setDestinations(data));
    }, []);

    const handleFlightSearch = (searchParams) => {
        // Fetch flights or stays based on searchParams
        if (searchMode === 'flights') {
            fetch(`/api/flights?from=${searchParams.from}&to=${searchParams.to}`)
                .then(response => response.json())
                .then(data => setFlights(data));
        } else {
            // Add logic for searching stays when API is available
        }
    };

    return (
      <div>
        <Plane className="airplane-svg" />
        <div className="search-toggle">
            <button onClick={() => setSearchMode('flights')} 
                    className={searchMode === 'flights' ? 'active' : ''}>
                Flights
            </button>
            <button onClick={() => setSearchMode('stays')} 
                    className={searchMode === 'stays' ? 'active' : ''}>
                Stays
            </button>
        </div>

        <div className="search-container">
            <h1>ExploreMore Travel</h1>
            <DestinationList destinations={destinations} />
            <FlightSearch 
                onSearch={handleFlightSearch} 
                searchMode={searchMode} // Pass the search mode as a prop
            />
            {/* Render flights or stays results here based on searchMode */}
        </div>
      </div>
    );
};

export default App;
