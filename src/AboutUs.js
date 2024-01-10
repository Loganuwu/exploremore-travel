import React from 'react';
import './AboutUs.css'; // Make sure to create this CSS file

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1>About ExploreMore</h1>
      <p>
        Welcome to ExploreMore, your go-to destination for discovering and booking your next travel adventure. Whether you're looking for flights, hotels, or local attractions, ExploreMore is dedicated to providing a seamless and personalized travel planning experience.
      </p>
      <h2>Our Features</h2>
      <ul>
        <li><strong>Flight Finder:</strong> Explore a world of destinations with our comprehensive flight search.</li>
        <li><strong>Hotel Finder:</strong> Find and book the perfect accommodation for your stay, tailored to your preferences.</li>
        <li><strong>Local Attractions:</strong> Discover the best local attractions and activities to make your trip unforgettable.</li>
      </ul>
      <p>
        At ExploreMore, we believe that travel should be accessible, enjoyable, and hassle-free. Our mission is to empower travelers by offering a platform that simplifies the process of finding and booking the ideal travel arrangements, all in one place. Join us on this journey to explore more of what the world has to offer!
      </p>
      <div className="wave-animation"></div> {/* Animation container */}
    </div>
  );
};

export default AboutUs;
