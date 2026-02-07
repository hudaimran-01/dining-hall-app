import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import RatingsPage from './pages/RatingsPage';
import MenuPage from './pages/MenuPage';
import VolunteerPage from './pages/VolunteerPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ratings" element={<RatingsPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/volunteer" element={<VolunteerPage />} />
          <Route path="/menu" element={<MenuPage />} />  {/* <-- ADD THIS */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

