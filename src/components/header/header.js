import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import logo from '../../assets/logo.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="logo-container">
        <img src={logo} alt="Carbnozone Logo" className="logo" />
        <span className="logo-text">
          carb<span className="logo-no">NO</span>zone
        </span>
      </div>
      <nav>
        <ul className={menuOpen ? 'open' : ''}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/investment">Investment</Link></li>
        </ul>
        <div className="menu-icon" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>
      <button className="login-button">Login</button>
    </header>
  );
};

export default Header;
