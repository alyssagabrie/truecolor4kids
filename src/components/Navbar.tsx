import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">TrueColor4Kids</Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/colors">Colors</Link>
        <Link to="/objects">Objects</Link>
        <Link to="/activities">Activities</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
};

export default Navbar; 