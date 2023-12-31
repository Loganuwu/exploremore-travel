// StaysSearch.js
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const StaysSearch = ({ onSearch }) => {
    const [location, setLocation] = useState('');
    const [startDate, setStartDate] = useState(null); // Set initial state to null
    const [endDate, setEndDate] = useState(null);     // Do the same for endDate if it's a range    
    const [hotels, setHotels] = useState([]);
    const [searchInitiated, setSearchInitiated] = useState(false);
    const [showResults, setShowResults] = useState(false); // State to control the visibility of the results container
    const [hotelResults, setHotelResults] = useState([]); // State to store hotel results

    const formatDate = (date) => {
        return date.toISOString().split('T')[0];
    };

    const searchHotelsByCoordinates = async (latitude, longitude) => {
        const options = {
            method: 'GET',
            url: 'https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotelsByCoordinates',
            params: {
                latitude: latitude.toString(),
                longitude: longitude.toString(),
                arrival_date: formatDate(startDate),
                departure_date: formatDate(endDate),
                room_qty: '1',
                languagecode: 'en-us',
                currency_code: 'USD'
            },
            headers: {
                'X-RapidAPI-Key': '8d36f60e47msha974aed1faa2b08p16ca05jsna91e6d65d953',
                'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            if (response.data && response.data.data && Array.isArray(response.data.data.result)) {
                setHotels(response.data.data.result); // Access the nested array of hotels
            } else {
                console.log('Response data is not in the expected format:', response.data);
                setHotels([]); // Set to an empty array if the response structure is not as expected
            }
        } catch (error) {
            console.error(error);
        }
    };

    
    const handleSearch = async () => {
        const searchDestinationOptions = {
            method: 'GET',
            url: 'https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination',
            params: { query: location },
            headers: {
                'X-RapidAPI-Key': '8d36f60e47msha974aed1faa2b08p16ca05jsna91e6d65d953',
                'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
            }
            
        };

        try {
            const response = await axios.request(searchDestinationOptions);
            const { latitude, longitude } = response.data.data[0]; // Get the first result's coordinates
            await searchHotelsByCoordinates(latitude, longitude);
            setShowResults(true); // Show the results container after fetching data
        } catch (error) {
            console.error(error);
            setShowResults(false); // Hide the results container on error
        }
        setSearchInitiated(true);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        handleSearch();
    };

    const CustomDateInput = ({ value, onClick }) => (
        <div className="input-with-icon">
            <CalendarMonthIcon className="icon" />
            <input 
                type="text" 
                onClick={onClick}
                value={value}
                placeholder={!value ? "Select dates" : ''} // Custom placeholder
                readOnly // Ensures the field is not editable
                className="date-input" // Use this class for styling
            />
        </div>
    );
    
    
    

    return (
        <>
            <form onSubmit={handleSubmit} className={`stay-search-form ${searchInitiated ? "top-aligned" : "centered"}`}>
                <div className="input-column">
                        <label htmlFor="location">Location</label>
                        <div className="input-with-icon">
                            <LocationOnIcon className="icon" />
                            <input 
                                type="text" 
                                id="location"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                placeholder="Enter location" 
                            />
                        </div>
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
                            dateFormat="MMM d"
                            customInput={<CustomDateInput />}
                            startDate={startDate}
                            endDate={endDate}
                            selectsRange
                        />
                </div>
                <div className="input-column">
                        <div className="input-icon-container">

                        </div>
                <label style={{ visibility: 'hidden' }}>Search:</label> {/* Invisible label for alignment */}
                <button type="submit" className='search-button'>Search Stays</button>
                </div>
            </form>

            {showResults && (
                <div className="hotel-list">
                    {hotels.slice(0, 10).map((hotel, index) => (
                        <div key={index} className="hotel-item">
                            <h3>{hotel.hotel_name}</h3>
                            <img src={hotel.main_photo_url} alt={hotel.hotel_name} />
                            {/* Add other hotel details you want to display */}
                        </div>
                    ))}
                </div>

            )}
        </>
    );
};

export default StaysSearch;
