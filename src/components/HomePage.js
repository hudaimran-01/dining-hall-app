
import React, { useState, useEffect } from 'react';
import { getTopRatedDishes } from '../services/ratingsService';
import BiCoLogo from '../components/BiCoLogo';
import './HomePage.css';

function HomePage() {
  const [topDishes, setTopDishes] = useState([]);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [lineStatus, setLineStatus] = useState({
    'Haverford DC': 'short',
    'Erdman': 'none',
    'New Dorm': 'long'
  });

  useEffect(() => {
    loadData();
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const loadData = async () => {
    const top = await getTopRatedDishes(3);
    setTopDishes(top);
  };

  const getStatusInfo = (status) => {
    if (status === 'none') return { icon: '✅', text: 'No Wait', color: '#00b894', time: '0 min' };
    if (status === 'short') return { icon: '⚠️', text: 'Short Wait', color: '#fdcb6e', time: '5-10 min' };
    return { icon: '🔴', text: 'Long Wait', color: '#d63031', time: '15+ min' };
  };

  const upcomingEvents = [
    { 
      id: 1, 
      title: 'Thai Food Week', 
      date: '2026-02-10',
      endDate: '2026-02-14',
      location: 'Haverford Dining Center',
      description: 'Authentic Thai cuisine all week! Pad Thai, Green Curry, Mango Sticky Rice & more',
      emoji: '🇹🇭'
    },
    { 
      id: 2, 
      title: 'Italian Night', 
      date: '2026-02-08',
      location: 'Erdman',
      description: 'Homemade pasta, wood-fired pizza, tiramisu, and Italian music!',
      emoji: '🇮🇹'
    },
    {
      id: 3,
      title: 'Sustainable Food Expo',
      date: '2026-02-12',
      location: 'All Locations',
      description: 'Learn about our local farm partnerships and try 100% locally-sourced dishes',
      emoji: '🌱'
    }
  ];

  const getDaysUntil = (dateString) => {
    const eventDate = new Date(dateString);
    const today = new Date();
    const diffTime = eventDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays === 0) return 'Today!';
    if (diffDays === 1) return 'Tomorrow';
    if (diffDays < 0) return 'Past';
    return `In ${diffDays} days`;
  };

  return (
    <div className="homepage">
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <BiCoLogo size="large" />
          <h1 className="hero-title">
            Welcome to <span className="gradient-text">Bi-Co Bites</span>
          </h1>
          <p className="hero-tagline">
            Empowering smarter, sustainable dining at Haverford & Bryn Mawr
          </p>
          <div className="hero-stats-quick">
            <div className="quick-stat">
              <div className="stat-icon">⭐</div>
              <div className="stat-info">
                <div className="stat-num">4.2k+</div>
                <div className="stat-label">Ratings</div>
              </div>
            </div>
            <div className="quick-stat">
              <div className="stat-icon">👥</div>
              <div className="stat-info">
                <div className="stat-num">847</div>
                <div className="stat-label">Students</div>
              </div>
            </div>
            <div className="quick-stat">
              <div className="stat-icon">♻️</div>
              <div className="stat-info">
                <div className="stat-num">250 lbs</div>
                <div className="stat-label">Food Donated</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Dashboard */}
      <section className="dashboard-section">
        <div className="container">
          
          {/* Current Time */}
          <div className="time-widget">
            <div className="time-display">
              {currentTime.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })}
            </div>
            <div className="date-display">
              {currentTime.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
            </div>
          </div>

          {/* Line Status Cards */}
          <div className="section-header">
            <h2>🚦 Live Line Status</h2>
            <span className="update-badge">Updated 2 min ago</span>
          </div>
          
          <div className="line-status-grid">
            {Object.entries(lineStatus).map(([location, status]) => {
              const info = getStatusInfo(status);
              return (
                <div key={location} className="line-card" style={{ borderLeftColor: info.color }}>
                  <div className="line-card-header">
                    <span className="line-icon" style={{ color: info.color }}>{info.icon}</span>
                    <span className="line-location">{location}</span>
                  </div>
                  <div className="line-card-body">
                    <div className="line-status-text" style={{ color: info.color }}>
                      {info.text}
                    </div>
                    <div className="line-wait-time">{info.time} wait</div>
                  </div>
                  <div className="line-card-footer">
                    <button className="view-menu-btn">View Menu →</button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Top Dishes */}
          <div className="section-header">
            <h2>⭐ Student Favorites</h2>
            <a href="/ratings" className="view-all-link">See all ratings →</a>
          </div>

          <div className="top-dishes-grid">
            {topDishes.map((dish, index) => (
              <div key={index} className="dish-feature-card">
                <div className="dish-rank">#{index + 1}</div>
                <div className="dish-content">
                  <h3 className="dish-name">{dish.dishName}</h3>
                  <div className="dish-rating-display">
                    <span className="rating-stars">
                      {'⭐'.repeat(Math.floor(dish.averageRating))}
                    </span>
                    <span className="rating-value">{dish.averageRating}/5</span>
                  </div>
                  <div className="dish-meta">
                    {dish.totalRatings} student{dish.totalRatings !== 1 ? 's' : ''} rated this
                  </div>
                </div>
                <button className="rate-btn">Rate It</button>
              </div>
            ))}
          </div>

          {/* Upcoming Events */}
          <div className="section-header">
            <h2>🎉 Upcoming Events</h2>
          </div>

          <div className="events-showcase">
            {upcomingEvents.map(event => {
              const daysUntil = getDaysUntil(event.date);
              return (
                <div key={event.id} className="event-showcase-card">
                  <div className="event-emoji-badge">{event.emoji}</div>
                  <div className="event-content">
                    <div className="event-countdown">{daysUntil}</div>
                    <h3 className="event-title">{event.title}</h3>
                    <p className="event-date-range">
                      {event.endDate 
                        ? `${new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - ${new Date(event.endDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`
                        : new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}
                    </p>
                    <p className="event-location-tag">📍 {event.location}</p>
                    <p className="event-description">{event.description}</p>
                  </div>
                  <button className="event-interested-btn">I'm Interested!</button>
                </div>
              );
            })}
          </div>

          {/* Quick Actions */}
          <div className="quick-actions">
            <a href="/ratings" className="action-card primary">
              <div className="action-icon">⭐</div>
              <div className="action-text">
                <div className="action-title">Rate a Dish</div>
                <div className="action-subtitle">Share your opinion</div>
              </div>
            </a>
            <a href="/menu" className="action-card secondary">
              <div className="action-icon">📋</div>
              <div className="action-text">
                <div className="action-title">View Menu</div>
                <div className="action-subtitle">See what's cooking</div>
              </div>
            </a>
            <a href="/volunteer" className="action-card tertiary">
              <div className="action-icon">❤️</div>
              <div className="action-text">
                <div className="action-title">Volunteer</div>
                <div className="action-subtitle">Give back to community</div>
              </div>
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}

export default HomePage;
