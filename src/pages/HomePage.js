import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './HomePage.css';

const lineData = [
  { hall: "New Dorm", wait: 15, status: "moderate", capacity: 68 },
  { hall: "Erdman", wait: 5, status: "low", capacity: 85 },
  { hall: "Haverford Dining Centre", wait: 25, status: "high", capacity: 45 },
];

const topDishes = [
  { name: "Chicken Alfredo", rating: 4.8, votes: 234, hall: "New Dorm", trend: "+12%" },
  { name: "Veggie Burrito Bowl", rating: 4.7, votes: 189, hall: "Haverford Dining Centre", trend: "+8%" },
  { name: "Classic Cheeseburger", rating: 4.6, votes: 312, hall: "Erdman", trend: "+5%" },
];

const events = [
  { name: "Taco Tuesday", date: "Feb 10", time: "5-8 PM", location: "New Dorm", attendees: 45 },
  { name: "Late Night Breakfast", date: "Feb 12", time: "10 PM-12 AM", location: "Erdman", attendees: 32 },
  { name: "Cultural Food Fest", date: "Feb 18", time: "12-3 PM", location: "Haverford DC", attendees: 89 },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function HomePage() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const getCurrentMeal = () => {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const totalMinutes = hours * 60 + minutes;
    
    // Breakfast: 7:30 AM - 10:30 AM (450 - 630 minutes)
    if (totalMinutes >= 450 && totalMinutes < 630) {
      return "Breakfast";
    }
    // Lunch: 11:00 AM - 1:30 PM (660 - 810 minutes)
    else if (totalMinutes >= 660 && totalMinutes < 810) {
      return "Lunch";
    }
    // Dinner: 5:00 PM - 8:00 PM (1020 - 1200 minutes)
    else if (totalMinutes >= 1020 && totalMinutes < 1200) {
      return "Dinner";
    }
    else {
      return "Closed";
    }
  };

  return (
    <div className="homepage">
      {/* Header */}
      <div className="dashboard-header">
        <div className="header-left">
          <div className="logo-section">
            <div className="logo-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/>
                <path d="M7 2v20"/>
                <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>
              </svg>
            </div>
            <div>
              <h1 className="dashboard-title">Campus Dining Hub</h1>
              <p className="dashboard-subtitle">Bryn Mawr & Haverford Dining Services</p>
            </div>
          </div>
        </div>
        <div className="header-right">
          <div className="time-card">
            <span className="time-label">CURRENT TIME</span>
            <div className="time-display">
              {time.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: true })}
            </div>
            <span className="date-display">{time.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}</span>
          </div>
          <div className="meal-time-card">
            <span className="time-label">CURRENT MEAL</span>
            <div className="meal-display">{getCurrentMeal()}</div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="tab-navigation">
        <button className="tab-button active" onClick={() => window.location.href = '/'}>
          Overview
        </button>
        <button className="tab-button" onClick={() => window.location.href = '/menu'}>
          Menus
        </button>
        <button className="tab-button" onClick={() => window.location.href = '/ratings'}>
          Ratings
        </button>
        <button className="tab-button">
          Events
        </button>
      </div>

      {/* Stats Cards Grid */}
      <motion.div 
        className="stats-grid"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.1 } }
        }}
      >
        {/* Wait Times Card */}
        <motion.div className="stat-card green-border" variants={fadeIn}>
          <div className="stat-icon green"></div>
          <div className="stat-content">
            <div className="stat-header">
              <span className="stat-label">SHORTEST WAIT</span>
              <span className="stat-badge green">Low</span>
            </div>
            <div className="stat-number">{Math.min(...lineData.map(d => d.wait))} mins</div>
            <div className="stat-description">at {lineData.find(d => d.wait === Math.min(...lineData.map(d => d.wait))).hall}</div>
            <div className="progress-bar">
              <div className="progress-fill green" style={{ width: '85%' }}></div>
            </div>
            <div className="progress-label">85% availability</div>
          </div>
        </motion.div>

        {/* Top Dish Card */}
        <motion.div className="stat-card yellow-border" variants={fadeIn}>
          <div className="stat-icon yellow"></div>
          <div className="stat-content">
            <div className="stat-header">
              <span className="stat-label">TOP RATED TODAY</span>
              <span className="stat-badge yellow">{topDishes[0].trend}</span>
            </div>
            <div className="stat-number">
              {topDishes[0].rating}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ marginLeft: '4px', display: 'inline-block', verticalAlign: 'middle' }}>
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            <div className="stat-description">{topDishes[0].name}</div>
            <div className="progress-bar">
              <div className="progress-fill yellow" style={{ width: '96%' }}></div>
            </div>
            <div className="progress-label">96% satisfaction rate</div>
          </div>
        </motion.div>

        {/* Events Card */}
        <motion.div className="stat-card purple-border" variants={fadeIn}>
          <div className="stat-icon purple"></div>
          <div className="stat-content">
            <div className="stat-header">
              <span className="stat-label">UPCOMING EVENTS</span>
              <span className="stat-badge purple">→</span>
            </div>
            <div className="stat-number">{events.length}</div>
            <div className="stat-description">Events this week</div>
            <div className="progress-bar">
              <div className="progress-fill purple" style={{ width: '67%' }}></div>
            </div>
            <div className="progress-label">67% spots filled</div>
          </div>
        </motion.div>

        {/* Meals Served Card */}
        <motion.div className="stat-card orange-border" variants={fadeIn}>
          <div className="stat-icon orange"></div>
          <div className="stat-content">
            <div className="stat-header">
              <span className="stat-label">MEALS SERVED</span>
              <span className="stat-badge orange">+24%</span>
            </div>
            <div className="stat-number">850+</div>
            <div className="stat-description">Estimated meals today</div>
            <div className="progress-bar">
              <div className="progress-fill orange" style={{ width: '82%' }}></div>
            </div>
            <div className="progress-label">82% of daily goal</div>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Section */}
      <div className="bottom-section">
        {/* Wait Times Details */}
        <motion.div 
          className="detail-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="detail-header">
            <h2 className="detail-title">Live Wait Times</h2>
            <span className="live-badge">
              <span className="live-dot"></span>
              LIVE
            </span>
          </div>
          <div className="detail-content">
            {lineData.map((item, index) => (
              <div key={index} className="wait-item">
                <div className="wait-info">
                  <span className="hall-name">{item.hall}</span>
                  <span className={`wait-badge ${item.status}`}>{item.wait} mins</span>
                </div>
                <div className="capacity-bar">
                  <div 
                    className={`capacity-fill ${item.status}`}
                    style={{ width: `${item.capacity}%` }}
                  ></div>
                </div>
                <span className="capacity-text">{item.capacity}% capacity</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Top Dishes Details */}
        <motion.div 
          className="detail-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="detail-header">
            <h2 className="detail-title">Top Rated Dishes</h2>
          </div>
          <div className="detail-content">
            {topDishes.map((dish, index) => (
              <div key={index} className="dish-item">
                <div className="dish-rank">#{index + 1}</div>
                <div className="dish-info">
                  <div className="dish-name">{dish.name}</div>
                  <div className="dish-location">{dish.hall}</div>
                </div>
                <div className="dish-stats">
                  <span className="dish-rating">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '4px', display: 'inline-block', verticalAlign: 'middle' }}>
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    {dish.rating}
                  </span>
                  <span className="dish-votes">{dish.votes} votes</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Events Details */}
        <motion.div 
          className="detail-card full-width"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <div className="detail-header">
            <h2 className="detail-title">Upcoming Events</h2>
            <div className="header-badges">
              <span className="info-badge green">-14.1% vs last week</span>
              <span className="info-badge green">ECO IMPACT</span>
            </div>
          </div>
          <div className="events-grid">
            {events.map((event, index) => (
              <div key={index} className="event-card">
                <div className="event-date">
                  <div className="event-month">Feb</div>
                  <div className="event-day">{event.date.split(' ')[1]}</div>
                </div>
                <div className="event-info">
                  <h3 className="event-name">{event.name}</h3>
                  <p className="event-time">{event.time}</p>
                  <p className="event-location">{event.location}</p>
                  <p className="event-attendees">{event.attendees} registered</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}