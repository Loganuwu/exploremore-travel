import React, { useState, useEffect } from 'react';
import DestinationList from './DestinationList';
import FlightSearch from './FlightSearch';
import './App.css';
import { ReactComponent as Plane } from './images/Plane.svg';

const App = () => {
    const [destinations, setDestinations] = useState([]);
    const [flights, setFlights] = useState([]);

    useEffect(() => {
        // Fetch destinations from an API
        fetch('/api/destinations')
            .then(response => response.json())
            .then(data => setDestinations(data));
    }, []);

    const handleFlightSearch = (searchParams) => {
        // Fetch flights based on searchParams
        fetch(`/api/flights?from=${searchParams.from}&to=${searchParams.to}`)
            .then(response => response.json())
            .then(data => setFlights(data));
    };

    return (
      <div>
        <Plane className="airplane-svg" /> {/* Apply the CSS class here */}
        <div className="search-container">
            <h1>ExploreMore Travel</h1>
            <DestinationList destinations={destinations} />
            <FlightSearch onSearch={handleFlightSearch} />
            {/* Render flights here */}
        </div>
      </div>
    );
};

export default App; // Corrected to only have one default export
