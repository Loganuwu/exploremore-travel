import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const FlightSearch = ({ onSearch }) => {
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [startDate, setStartDate] = useState(new Date());

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch({ from, to, date: startDate });
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* From and To input fields */}
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
            <button type="submit">Search Flights</button>
        </form>
    );
};
export default FlightSearch;