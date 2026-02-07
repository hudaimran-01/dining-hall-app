import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';

// Placeholder pages
const MenuPage = () => <div style={{padding: '20px'}}><h1>Menu Page - Coming Soon</h1></div>;
const RatingsPage = () => <div style={{padding: '20px'}}><h1>Ratings Page - Coming Soon</h1></div>;
const VolunteerPage = () => <div style={{padding: '20px'}}><h1>Volunteer Page - Coming Soon</h1></div>;
const AdminPage = () => <div style={{padding: '20px'}}><h1>Admin Dashboard - Coming Soon</h1></div>;

function App() {
  return (
    <Router>
      <div>
        {/* Navigation */}
        <nav style={{
          background: '#333',
          padding: '15px',
          color: 'white'
        }}>
          <Link to="/" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>Home</Link>
          <Link to="/menu" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>Menu</Link>
          <Link to="/ratings" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>Ratings</Link>
          <Link to="/volunteer" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>Volunteer</Link>
          <Link to="/admin" style={{ color: 'white', margin: '0 15px', textDecoration: 'none' }}>Admin</Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/ratings" element={<RatingsPage />} />
          <Route path="/volunteer" element={<VolunteerPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;