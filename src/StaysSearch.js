// StaysSearch.js
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

const StaysSearch = ({ onSearch }) => {
    const [location, setLocation] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [hotels, setHotels] = useState([]);

    const handleSearch = async () => {
        const options = {
            method: 'GET',
            url: 'https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination',
            params: { query: location },
            headers: {
                'X-RapidAPI-Key': '8d36f60e47msha974aed1faa2b08p16ca05jsna91e6d65d953',
                'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            setHotels(response.data); // Assuming response.data contains the array of hotels
            // You might need to adjust this based on the actual structure of the response
        } catch (error) {
            console.error(error);
        }
    };

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

            <div className="hotel-list">
                {hotels.map(hotel => (
                    <div key={hotel.id} className="hotel-item">
                        <h3>{hotel.name}</h3>
                        {/* Add other hotel details you want to display */}
                    </div>
                ))}
            </div>
        </form>

        
    );
};

export default StaysSearch;
