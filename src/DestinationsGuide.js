import React from 'react';
import './DestinationsGuide.css';

const DestinationsGuide = () => {
  return (
    <div className="destinations-guide-container">
      <h1>Destinations Guide</h1>
      <div className="destinations-grid">
        <div className="destination">
          <h2>Rome, Italy</h2>
          <p>Description: Rome, the Eternal City, is a blend of historic grandeur and bustling modern life. Known for its stunning architecture, including the Colosseum, Roman Forum, and Vatican City, Rome is a haven for history buffs. Savor classic Italian cuisine, explore art-filled museums, and wander through charming piazzas in this iconic city.</p>
          <div className="destination-image" id="rome-image"></div>
        </div>
        <div className="destination">
          <h2>Mexico City, Mexico</h2>
          <p>Description: As the heart of Mexico, Mexico City is a tapestry of rich history and contemporary culture. Visit the historic Zócalo plaza, explore the ancient Aztec ruins of Templo Mayor, and enjoy the vibrant colors of Frida Kahlo's Blue House. The city's culinary scene is a delightful journey through traditional tacos, tamales, and local mezcal.</p>
          <div className="destination-image" id="mexico-image"></div>
        </div>
        <div className="destination">
          <h2>Los Angeles, California</h2>
          <p>Description: Known as the City of Angels, Los Angeles is the epitome of glamour and sunshine. Home to Hollywood, pristine beaches, and iconic landmarks like the Hollywood Sign and Griffith Observatory, LA is where dreams take flight. Experience diverse cultures, innovative cuisine, and the laid-back California lifestyle.</p>
          <div className="destination-image" id="california-image"></div>
        </div>
        <div className="destination">
          <h2>New York, New York</h2>
          <p>Description: New York City, the Big Apple, is an exhilarating blend of skyscrapers, diverse cultures, and non-stop energy. From the towering heights of the Empire State Building to the neon lights of Times Square, every corner of NYC pulses with life. Explore world-class museums, Broadway shows, and an array of international cuisines in this iconic metropolis.</p>
          <div className="destination-image" id="newyork-image"></div>
        </div>
        <div className="destination">
          <h2>Paris, France</h2>
          <p>Description: Paris, often hailed as the city of lights and love, is a haven for art, fashion, and culture. From the iconic Eiffel Tower and the Louvre Museum to the charming cafes lining the Seine, Paris captivates everyone who visits. Stroll along the Champs-Élysées, enjoy fresh croissants, and embrace the romantic ambiance of this timeless city.</p>
          <div className="destination-image" id="france-image"></div>
        </div>
        <div className="destination">
          <h2>Tokyo, Japan</h2>
          <p>Description: Tokyo is a dazzling mix of traditional and modern, where ancient temples stand alongside towering skyscrapers. Experience the bustling energy of Shibuya Crossing, the serenity of the Meiji Shrine, and the eclectic Otaku culture in Akihabara. Tokyo's culinary scene ranges from exquisite sushi to hearty ramen, offering a feast for all senses.</p>
          <div className="destination-image" id="japan-image"></div>
        </div>
      </div>
    </div>
  );
};

export default DestinationsGuide;
