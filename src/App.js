import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import RatingsPage from './pages/RatingsPage';
import './App.css';

const VolunteerPage = () => (
  <div style={{ padding: '20px' }}>
    <h1>Volunteer Page - Coming Soon</h1>
  </div>
);

const AdminPage = () => (
  <div style={{ padding: '20px' }}>
    <h1>Admin Dashboard - Coming Soon</h1>
  </div>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
	  <Route path="/menu" element={<MenuPage />} />
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

