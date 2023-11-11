import React, { useState } from 'react';

const FlightSearch = ({ onSearch }) => {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch({ from, to });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="From" 
                value={from} 
                onChange={e => setFrom(e.target.value)} 
            />
            <input 
                type="text" 
                placeholder="To" 
                value={to} 
                onChange={e => setTo(e.target.value)} 
            />
            <button type="submit">Search Flights</button>
        </form>
    );
};

export default FlightSearch;
