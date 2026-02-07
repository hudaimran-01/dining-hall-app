import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          🍽️ <span className="logo-text">Bi-Co Bites</span>
        </Link>
        
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/menu" className="nav-link">Menu</Link>
          <Link to="/ratings" className="nav-link">Ratings</Link>
          <Link to="/volunteer" className="nav-link">Volunteer</Link>
        </nav>
        
        <div className="user-profile">
          <div className="profile-icon">👤</div>
        </div>
      </div>
    </header>
  );
}

export default Header;
