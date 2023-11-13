import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const FlightSearch = ({ onSearch }) => {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch({ from, to, date: startDate, endDate });
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

    const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
    const CustomInput = ({ value, onClick }) => (
        <input
            type="text"
            className="date-input"
            value={value}
            onClick={() => setIsDatePickerVisible(!isDatePickerVisible)} // Toggle the visibility
            readOnly // Prevent manual editing
            placeholder="Select dates"
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
                    placeholder="Enter departure city" 
                />
            </div>
            <div className="input-column">
                <label htmlFor="to">To</label>
                <input 
                    type="text" 
                    id="to"
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                    placeholder="Enter destination city" 
                />
            </div>
            {/* DATE PICKER HERE -----------------------------------------------  */}
            <div className="input-column">
                <label htmlFor="date-picker">Dates</label>
                <DatePicker
                    selected={startDate}
                    onChange={(dates) => {
                        const [start, end] = dates;
                        setStartDate(start);
                        setEndDate(end);
                        if (end) setIsDatePickerVisible(false); // Hide after selecting range
                    }}
                    startDate={startDate}
                    endDate={endDate}
                    selectsRange
                    customInput={<CustomInput />}
                    popperPlacement="bottom"
                    shouldCloseOnSelect={false} // Keep open to select end date
                    open={isDatePickerVisible}
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