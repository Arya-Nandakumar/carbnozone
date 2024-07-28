import React from 'react';
import './homepage.css';
import backgroundImage from '../../assets/homebg.jpg';

const HomePage = () => {
  return (
    <div className="home">
      <img src={backgroundImage} alt="Global Climate Action" className="background-image" />
      <div className="home-content">
        <h1>Welcome to Carbnozone</h1>
        <h2>Your marketplace for environmentally friendly products and services.</h2>
        <div className="vision">
          <p>
            Bridging the gap in global efforts for climate change mitigation by scaling products and services worldwide.
          </p>
          <p>
            Fostering collaboration and driving significant environmental impact globally.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
