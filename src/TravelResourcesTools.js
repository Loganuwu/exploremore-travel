import React from 'react';
import './TravelResourcesTools.css'; // Make sure to create this CSS file
import itineraryImage from './images/itinerary.png'; // Update this path

const TravelResourcesTools = () => {
    return (
        <div className="resources-tools-container">
          <h1>Travel Resources & Tools</h1>
          <div className="content-grid">
            <section className="downloadable-content">
              <h2>Downloadable Content</h2>
              <p>Get ready for your next adventure with our curated travel checklists, planners, and guides. Download and start planning today!</p>
              <a href={itineraryImage} download="ExploreMore-Itinerary.png">
                <img src={itineraryImage} alt="Itinerary" className="itinerary-image"/>
              </a>
            </section>
            
            <div className="tools-links-column">
              <section className="tools-section">
                <h2>Useful Tools</h2>
                <p>Our selection of online tools will help you convert currency in real-time, learn key phrases in another language, and much more.</p>
                {/* Placeholder for interactive tools */}
              </section>
              
              <section className="links-section">
                <h2>Helpful Links</h2>
                <ul>
          <li><a href="https://travel.state.gov/content/travel/en/us-visas.html">Visa Information</a></li>
          <li><a href="https://travel.state.gov/content/travel/en/traveladvisories/traveladvisories.html/">Travel Advisories</a></li>
          <li><a href="https://www.cdc.gov/vaccines/parents/travel-vaccines.html">Vaccination Requirements</a></li>
              {/* Additional links */}
              </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TravelResourcesTools;
