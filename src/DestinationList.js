import React from 'react';

const DestinationList = ({ destinations }) => {
    return (
        <div>
            {destinations.map(destination => (
                <div key={destination.id}>
                    <h2>{destination.name}</h2>
                    <p>{destination.description}</p>
                </div>
            ))}
        </div>
    );
};

export default DestinationList;
