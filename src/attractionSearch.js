import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './attractionSearch.css';
import AttractionsIcon from '@mui/icons-material/Attractions';

const AttractionsSearch = () => {
    const [location, setLocation] = useState('');
    const [attractionId, setAttractionId] = useState('');
    const [attractions, setAttractions] = useState([]);

    // Function to handle the first API call based on location input
    const handleSearch = async () => {
        const options = {
            method: 'GET',
            url: 'https://booking-com15.p.rapidapi.com/api/v1/attraction/searchLocation',
            params: { query: location, languagecode: 'en-us' },
            headers: {
                'X-RapidAPI-Key': '8d36f60e47msha974aed1faa2b08p16ca05jsna91e6d65d953',
                'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'   
            }
        };

        try {
            const response = await axios.request(options);
            if (response.data && response.data.data && response.data.data.products && response.data.data.products.length > 0) {
                const id = response.data.data.products[0].id;
                setAttractionId(id); // Store the ID for the next API call
            }
        } catch (error) {
            console.error('Error fetching attractions:', error);
        }
    };

    // Function to handle the second API call using the ID
    useEffect(() => {
        const fetchAttractions = async () => {
            if (!attractionId) return;

            const options = {
                method: 'GET',
                url: 'https://booking-com15.p.rapidapi.com/api/v1/attraction/searchAttractions',
                params: { id: attractionId, page: '1', currency_code: 'INR', languagecode: 'en-us' },
                headers: {
                    'X-RapidAPI-Key': '8d36f60e47msha974aed1faa2b08p16ca05jsna91e6d65d953',
                    'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
                }
            };

            try {
                const response = await axios.request(options);
                setAttractions(response.data.data.products);
            } catch (error) {
                console.error('Error fetching attraction details:', error);
            }
        };

        fetchAttractions();
    }, [attractionId]);

    return (
        <div>
            <div className="attractions-search-form">
                <div className="input-with-icon">
                    <AttractionsIcon className="icon" />
                    <input 
                        type="text" 
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Enter location" 
                    />
                </div>
                <button onClick={handleSearch} className="search-button">Search Attractions</button>
            </div>
            <div>
                {attractions.map((attraction, index) => (
                    <div key={index}>
                        <h3>{attraction.name}</h3>
                        {/* You can add more details from the attraction object here */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AttractionsSearch;