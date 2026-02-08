import React, { useState, useEffect } from 'react';
import './HomePage.css';

function HomePage() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [lineStatus, setLineStatus] = useState({
    'Haverford DC': 'short',
    'Erdman': 'none',
    'New Dorm': 'long'
  });
  const [topDishes, setTopDishes] = useState([
    { dishName: 'Spicy Thai Noodles', averageRating: 4.8, totalRatings: 120 },
    { dishName: 'Classic Margherita Pizza', averageRating: 4.6, totalRatings: 95 },
    { dishName: 'Vegan Buddha Bowl', averageRating: 4.7, totalRatings: 80 }
  ]);

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

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

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
      
      {/* Hero */}
      <section className="hero-section">
        <h1>Welcome to <span>Bi-Co Bites</span></h1>
        <p>Empowering smarter, sustainable dining at Haverford & Bryn Mawr</p>
      </section>

      {/* Line Status */}
      <section className="line-status-section">
        <h2>🚦 Live Line Status</h2>
        <div className="line-status-grid">
          {Object.entries(lineStatus).map(([location, status]) => (
            <div key={location} className={`line-card ${status}`}>
              <div className={`line-circle ${status}`}>
                {status === 'none' ? '✅' : status === 'short' ? '⚠️' : '🔴'}
              </div>
              <h3>{location}</h3>
              <p>{status === 'none' ? 'No Wait' : status === 'short' ? 'Short Wait' : 'Long Wait'}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Top Dishes */}
      <section className="top-dishes-section">
        <h2>⭐ Student Favorites</h2>
        <div className="top-dishes-grid">
          {topDishes.map((dish, index) => (
            <div key={index} className="dish-card">
              <h3>{dish.dishName}</h3>
              <div className="dish-rating">
                <span className="stars">{'⭐'.repeat(Math.floor(dish.averageRating))}</span>
                <span> {dish.averageRating.toFixed(1)}/5</span>
              </div>
              <p>{dish.totalRatings} student{dish.totalRatings !== 1 ? 's' : ''} rated this</p>
              <button>Rate It</button>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="events-section">
        <h2>🎉 Upcoming Events</h2>
        <div className="events-grid">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="event-card">
              <div className="event-emoji">{event.emoji}</div>
              <h3>{event.title}</h3>
              <p><strong>{event.location}</strong></p>
              <p>{event.description}</p>
              <p><em>{getDaysUntil(event.date)}</em></p>
              <button>I'm Interested!</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;
