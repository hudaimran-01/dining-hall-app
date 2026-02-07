import React from 'react';
import { mockEvents, mockLineStatus } from '../mockData';

function HomePage() {
  const getLineColor = () => {
    if (mockLineStatus === "short") return "green";
    if (mockLineStatus === "medium") return "orange";
    return "red";
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>🍽️ Dining Hall Hub</h1>
      
      {/* Line Status */}
      <div style={{ 
        background: '#f5f5f5', 
        padding: '20px', 
        borderRadius: '10px',
        marginBottom: '30px' 
      }}>
        <h2>Current Line Status</h2>
        <div style={{ 
          fontSize: '24px', 
          color: getLineColor(),
          fontWeight: 'bold' 
        }}>
          ● {mockLineStatus.toUpperCase()}
        </div>
        <small>Last updated: 2 minutes ago</small>
      </div>

      {/* Events */}
      <h2>Upcoming Events</h2>
      <div style={{ display: 'grid', gap: '20px' }}>
        {mockEvents.map(event => (
          <div key={event.id} style={{
            border: '1px solid #ddd',
            padding: '20px',
            borderRadius: '8px',
            background: 'white'
          }}>
            <h3>{event.title}</h3>
            <p><strong>{event.date}</strong> • {event.location}</p>
            <p>{event.description}</p>
          </div>
        ))}
      </div>

      {/* Current International Bar */}
      {mockEvents[0].internationalBar && (
        <div style={{
          marginTop: '30px',
          background: '#e3f2fd',
          padding: '30px',
          borderRadius: '10px',
          textAlign: 'center'
        }}>
          <h2>🌍 This Week's International Bar</h2>
          <h1 style={{ color: '#1976d2', margin: '10px 0' }}>
            {mockEvents[0].internationalBar} Cuisine
          </h1>
          <p>{mockEvents[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default HomePage;