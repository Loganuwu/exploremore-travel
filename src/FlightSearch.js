import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const FlightSearch = ({ onSearch, searchMode }) => {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [date, setDate] = useState(new Date()); // Define date state variable for single date picker


    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch({ from, to, date });
    };

    const handleFlightSearch = (searchParams) => {
        const url = new URL('https://tripadvisor16.p.rapidapi.com/api/v1/flights/searchFlights');
        url.search = new URLSearchParams({
            sourceAirportCode: searchParams.from,
            destinationAirportCode: searchParams.to,
            date: searchParams.date.toISOString().split('T')[0], // Format date to YYYY-MM-DD
            // Add other required parameters
        });
    
        fetch(url, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '8d36f60e47msha974aed1faa2b08p16ca05jsna91e6d65d953',
                'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
            }
        })
        .then(response => response.json())
        .then(data => {
            // Process and display flight data
        })
        .catch(error => {
            console.error('Error fetching flight data:', error);
        });

        
    };

    const CustomInput = ({ value, onClick }) => (
        <input
            type="text"
            className="date-input"
            value={value}
            onClick={onClick} // Directly pass the onClick
            readOnly // Prevent manual editing
            placeholder="Select date" // Changed to singular
        />
    );

    return (
        <form onSubmit={handleSubmit} className='flight-search-form'>
            {/* From and To input fields */}
            <div className="input-column">
                <label htmlFor="from">From</label>
                <input 
                    type="text" 
                    id="from"
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                    placeholder="From airport code" // Updated placeholder
                />
            </div>
            <div className="input-column">
                <label htmlFor="to">To</label>
                <input 
                    type="text" 
                    id="to"
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                    placeholder="To airport code" // Updated placeholder
                />
            </div>
            {/* DATE PICKER HERE */}
            <div className="input-column">
                <label htmlFor="date-picker">Date</label> {/* Changed to singular */}
                <DatePicker
                    selected={date}
                    onChange={setDate} // Update to use setDate for single date
                    customInput={<CustomInput />}
                    popperPlacement="bottom"
                />
            </div>
            <div className="input-column">
                <label style={{ visibility: 'hidden' }}>Search:</label> {/* Invisible label */}
                <button type="submit">Search Flights</button>
            </div>
        </form>
    );
};
export default FlightSearch;