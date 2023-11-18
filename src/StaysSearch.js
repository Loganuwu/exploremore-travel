// StaysSearch.js
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const StaysSearch = ({ onSearch }) => {
    const [location, setLocation] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch({ location, startDate, endDate });
    };

    return (
        <form onSubmit={handleSubmit} className="stay-search-form">
            <div className="input-column">
                <label htmlFor="location">Location</label>
                <input 
                    type="text" 
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Enter location" 
                />
            </div>
            <div className="input-column">
                <label htmlFor="date-picker">Dates</label>
                <DatePicker
                    selected={startDate}
                    onChange={(dates) => {
                        const [start, end] = dates;
                        setStartDate(start);
                        setEndDate(end);
                    }}
                    startDate={startDate}
                    endDate={endDate}
                    selectsRange
                />
            </div>
            <div className="input-column">
                <label style={{ visibility: 'hidden' }}>Search:</label> {/* Invisible label for alignment */}
                <button type="submit">Search Stays</button>
            </div>
        </form>
    );
};

export default StaysSearch;
