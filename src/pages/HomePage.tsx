import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';

const HomePage: React.FC = () => (
  <div className="home-container">
    <h1 className="home-title">Welcome to TrueColor4Kids!</h1>
    <p className="home-intro">
      Discover the truth about colors, toys, and activities. Break stereotypes and have fun learning!
    </p>
    <div className="home-buttons">
      <Link to="/colors" className="home-btn">Explore Colors</Link>
      <Link to="/objects" className="home-btn">Explore Objects</Link>
      <Link to="/activities" className="home-btn">Explore Activities</Link>
    </div>
  </div>
);

export default HomePage; 