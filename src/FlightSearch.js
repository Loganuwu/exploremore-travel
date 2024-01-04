import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';


const FlightSearch = ({ onSearch }) => {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [date, setDate] = useState(new Date()); // Define date state variable for single date picker

    const formatDate = (date) => {
        return date.toISOString().split('T')[0]; // Format date to YYYY-MM-DD
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        if (onSearch) {
            onSearch({ from, to, date });
        } else {
            handleFlightSearch();
        }
    };

    const handleFlightSearch = async () => {
        // Define your API call parameters
        const params = {
            sourceAirportCode: from,
            destinationAirportCode: to,
            date: formatDate(date), // Use the formatted date
            itineraryType: 'ONE_WAY',
            sortOrder: 'PRICE',
            numAdults: '1',
            numSeniors: '0',
            classOfService: 'ECONOMY',
            pageNumber: '1',
            currencyCode: 'USD'
        };

        try {
            const response = await axios.get('https://tripadvisor16.p.rapidapi.com/api/v1/flights/searchFlights', {
                params: params,
                headers: {
                    'X-RapidAPI-Key': '8d36f60e47msha974aed1faa2b08p16ca05jsna91e6d65d953',
                    'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com'
                }
            });
            console.log(response.data);
            // Process the response data as needed
        } catch (error) {
            console.error('Error fetching flight data:', error);
        }
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