import React, { useState, useEffect } from 'react';
import { getLineStatus, getUpcomingEvents } from '../services/menuService';
import './HomePage.css';

function HomePage() {
  const [lineStatuses, setLineStatuses] = useState({});
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const locations = ['Haverford DC', 'Erdman', 'New Dorm'];
    const statuses = {};
    
    for (let loc of locations) {
      statuses[loc] = await getLineStatus(loc);
    }
    
    const upcomingEvents = await getUpcomingEvents();
    
    setLineStatuses(statuses);
    setEvents(upcomingEvents);
    setLoading(false);
  };

  const getStatusIcon = (status) => {
    if (status === 'none') return { icon: '✅', text: 'No wait!', color: '#00b894' };
    if (status === 'short') return { icon: '⚠️', text: '5-10 min', color: '#fdcb6e' };
    return { icon: '🔴', text: '15+ min', color: '#d63031' };
  };

  if (loading) {
    return <div className="loading">Loading the good stuff... 🍕</div>;
  }

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to <span className="gradient-text">Bi-Co Bites</span>
          </h1>
          <p className="hero-subtitle">
            Your guide to smarter dining at Haverford & Bryn Mawr
          </p>
          <div className="hero-cta">
            <button className="cta-button primary">Rate a Dish</button>
            <button className="cta-button secondary">View Menu</button>
          </div>
        </div>
      </section>

      <section className="line-status-section">
        <h2 className="section-title">🚦 Live Line Status</h2>
        <div className="status-grid">
          {Object.entries(lineStatuses).map(([location, status]) => {
            const statusInfo = getStatusIcon(status);
            return (
              <div key={location} className="status-card">
                <div className="status-icon" style={{color: statusInfo.color}}>
                  {statusInfo.icon}
                </div>
                <h3 className="status-location">{location}</h3>
                <p className="status-text" style={{color: statusInfo.color}}>
                  {statusInfo.text}
                </p>
                <p className="status-updated">Updated 2 min ago</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="events-section">
        <h2 className="section-title">🎉 Upcoming Events</h2>
        <div className="events-grid">
          {events.map(event => (
            <div key={event.id} className="event-card">
              <div className="event-date">
                <span className="event-month">{new Date(event.date).toLocaleDateString('en-US', {month: 'short'})}</span>
                <span className="event-day">{new Date(event.date).getDate()}</span>
              </div>
              <div className="event-details">
                <h3 className="event-title">{event.title}</h3>
                <p className="event-location">📍 {event.location}</p>
                <p className="event-description">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="quick-stats">
        <div className="stat-box">
          <div className="stat-number">4.2k+</div>
          <div className="stat-label">Dishes Rated</div>
        </div>
        <div className="stat-box">
          <div className="stat-number">847</div>
          <div className="stat-label">Active Users</div>
        </div>
        <div className="stat-box">
          <div className="stat-number">12</div>
          <div className="stat-label">Events This Month</div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;

