import React, { useState, useEffect } from 'react';
import DestinationList from './DestinationList';
import FlightSearch from './FlightSearch';

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
            <h1>ExploreMore Travel</h1>
            <DestinationList destinations={destinations} />
            <FlightSearch onSearch={handleFlightSearch} />
            {/* Render flights here */}
        </div>
    );
};

export default App;
