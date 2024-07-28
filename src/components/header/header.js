import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import logo from '../../assets/logo.png';

const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <img src={logo} alt="Carbnozone Logo" className="logo" />
        <span className="logo-text">
          carb<span className="logo-no">NO</span>zone
        </span>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/investment">Investment</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
