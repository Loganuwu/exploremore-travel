import React from 'react';
import './DestinationsGuide.css';

const DestinationsGuide = () => {
  return (
    <div className="destinations-guide-container">
      <h1>Destinations Guide</h1>
      <div className="destinations-grid">
        <div className="destination">
          <h2>Rome, Italy</h2>
          <p>Description of Rome...</p>
        </div>
        <div className="destination">
          <h2>Mexico City, Mexico</h2>
          <p>Description of Mexico City...</p>
        </div>
        <div className="destination">
          <h2>Los Angeles, California</h2>
          <p>Description of Los Angeles...</p>
        </div>
        <div className="destination">
          <h2>New York, New York</h2>
          <p>Description of New York...</p>
        </div>
        <div className="destination">
          <h2>Paris, France</h2>
          <p>Description of New York...</p>
        </div>
        <div className="destination">
          <h2>Tokyo, Japan</h2>
          <p>Description of New York...</p>
        </div>
      </div>
    </div>
  );
};

export default DestinationsGuide;
