import React from 'react';
import { mockEvents, mockLineStatus, mockTopDishes } from '../mockData';

function HomePage() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Dining Hall Dashboard</h1>

      <h2>Line Status</h2>
      <p>Current line: <strong>{mockLineStatus}</strong></p>

      <h2>Top Dishes</h2>
      <ul>
        {mockTopDishes.map((dish, index) => (
          <li key={index}>
            {dish.dishName} — {dish.avgRating}⭐ ({dish.numRatings} ratings)
          </li>
        ))}
      </ul>

      <h2>Upcoming Events</h2>
      <ul>
        {mockEvents.map(event => (
          <li key={event.id}>
            <strong>{event.title}</strong> — {event.date} at {event.location}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
