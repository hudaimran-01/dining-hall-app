import React, { useState, useEffect } from 'react';
import './AdminDashboard.css';

function AdminDashboard() {
  // Real-time surplus food tracking
  const [surplusFood, setSurplusFood] = useState([
    { 
      id: 1, 
      location: 'New Dorm Dining Hall', 
      items: '15 Caesar Salads, 8 Veggie Burgers', 
      amount: 'Enough for 30 people',
      readyTime: '2025-02-16T14:30',
      status: 'available',
      pickupWindow: '3:00-4:00 PM'
    },
    { 
      id: 2, 
      location: 'Erdman Dining Hall', 
      items: '20 Chicken Tikkas, 10 Rice Bowls', 
      amount: 'Enough for 25 people',
      readyTime: '2025-02-16T18:15',
      status: 'available',
      pickupWindow: '7:00-8:00 PM'
    },
    { 
      id: 3, 
      location: 'Haverford Dining Center', 
      items: '12 Pizzas, 5 Pasta Trays', 
      amount: 'Enough for 35 people',
      readyTime: '2025-02-16T13:45',
      status: 'reserved',
      pickupWindow: '2:30-3:30 PM'
    }
  ]);

  // Shelters with availability schedules
  const [shelters, setShelters] = useState([
    { 
      id: 1, 
      name: 'Ardmore Food Pantry', 
      address: '📍 5 min from Haverford',
      capacity: '200 meals/day',
      accepts: 'All meals',
      todayAvailable: true,
      hours: 'Mon-Fri: 10AM-6PM, Sat: 9AM-2PM',
      preferredPickup: '3:00-5:00 PM'
    },
    { 
      id: 2, 
      name: 'Main Line Community Center', 
      address: '📍 10 min from Bryn Mawr',
      capacity: '150 meals/day',
      accepts: 'Hot meals only',
      todayAvailable: true,
      hours: 'Daily: 11AM-8PM',
      preferredPickup: '6:00-7:00 PM'
    },
    { 
      id: 3, 
      name: 'St. Mary\'s Shelter', 
      address: '📍 8 min from campus',
      capacity: '100 meals/day',
      accepts: 'Non-perishable items',
      todayAvailable: false,
      hours: 'Mon-Sat: 9AM-4PM',
      preferredPickup: '1:00-3:00 PM'
    }
  ]);

  // Active volunteers
  const [volunteers, setVolunteers] = useState([
    { id: 1, name: 'Sarah Chen', assignedTo: 'Ardmore Food Pantry', status: 'on route', eta: '15 min' },
    { id: 2, name: 'Marcus Johnson', assignedTo: 'Main Line Community Center', status: 'waiting', eta: '' },
    { id: 3, name: 'Emma Wilson', assignedTo: 'St. Mary\'s Shelter', status: 'unavailable', eta: '' }
  ]);

  const [newSurplus, setNewSurplus] = useState({
    location: '',
    items: '',
    amount: '',
    readyTime: ''
  });

  // Post new surplus food
  const postSurplus = () => {
    const today = new Date();
    const formattedTime = today.toISOString().slice(0, 16);
    
    const surplus = {
      id: surplusFood.length + 1,
      location: newSurplus.location,
      items: newSurplus.items,
      amount: newSurplus.amount,
      readyTime: formattedTime,
      status: 'available',
      pickupWindow: `${(today.getHours() + 1)}:00-${(today.getHours() + 2)}:00 PM`
    };

    setSurplusFood([...surplusFood, surplus]);
    setNewSurplus({ location: '', items: '', amount: '', readyTime: '' });
    
    // Auto-match with available shelters
    autoMatchShelters(surplus);
  };

  // Auto-match algorithm
  const autoMatchShelters = (surplus) => {
    const availableShelters = shelters.filter(s => s.todayAvailable);
    if (availableShelters.length > 0) {
      alert(`✅ Posted surplus from ${surplus.location}! 
      Available shelters have been notified.`);
    }
  };

  // Real-time metrics
  const getMetrics = () => {
    const availableFood = surplusFood.filter(f => f.status === 'available').length;
    const matchedDeliveries = surplusFood.filter(f => f.status === 'reserved').length;
    const activeVolunteers = volunteers.filter(v => v.status === 'on route' || v.status === 'waiting').length;
    const estimatedMeals = surplusFood.reduce((total, f) => {
      const match = f.amount.match(/\d+/);
      return total + (match ? parseInt(match[0]) : 0);
    }, 0);

    return {
      availableFood,
      matchedDeliveries,
      activeVolunteers,
      estimatedMeals
    };
  };

  const metrics = getMetrics();

  return (
    <div className="admin-dashboard">
      {/* Header */}
      <header className="dashboard-header">
        <div className="header-left">
          <h1>🍽️ Real-Time Food Rescue Dashboard</h1>
          <p className="subtitle">Bryn Mawr & Haverford College Dining Halls</p>
        </div>
        <div className="header-right">
          <div className="time-display">
            {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
          <button className="emergency-post-btn">
            🚨 Post Emergency Surplus
          </button>
        </div>
      </header>

      {/* Metrics Dashboard */}
      <div className="metrics-grid">
        <div className="metric-card green">
          <div className="metric-icon">🍱</div>
          <div className="metric-content">
            <h3>Available Surplus</h3>
            <p className="metric-value">{metrics.availableFood} batches</p>
            <p className="metric-desc">Ready for pickup</p>
          </div>
        </div>

        <div className="metric-card blue">
          <div className="metric-icon">🤝</div>
          <div className="metric-content">
            <h3>Matched Deliveries</h3>
            <p className="metric-value">{metrics.matchedDeliveries}</p>
            <p className="metric-desc">Connected to shelters</p>
          </div>
        </div>

        <div className="metric-card purple">
          <div className="metric-icon">👥</div>
          <div className="metric-content">
            <h3>Active Volunteers</h3>
            <p className="metric-value">{metrics.activeVolunteers}</p>
            <p className="metric-desc">Currently assigned</p>
          </div>
        </div>

        <div className="metric-card orange">
          <div className="metric-icon">❤️</div>
          <div className="metric-content">
            <h3>Estimated Meals</h3>
            <p className="metric-value">{metrics.estimatedMeals}+</p>
            <p className="metric-desc">People fed today</p>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="main-content">
        {/* Left Column: Post Surplus */}
        <div className="content-card">
          <div className="card-header">
            <h2>➕ Post New Surplus Food</h2>
            <span className="badge live">LIVE</span>
          </div>
          
          <div className="form-group">
            <label>Location</label>
            <select 
              value={newSurplus.location}
              onChange={(e) => setNewSurplus({...newSurplus, location: e.target.value})}
              className="form-select"
            >
              <option value="">Select Dining Hall</option>
              <option value="New Dorm Dining Hall">New Dorm Dining Hall</option>
              <option value="Erdman Dining Hall">Erdman Dining Hall</option>
              <option value="Haverford Dining Center">Haverford Dining Center</option>
            </select>
          </div>

          <div className="form-group">
            <label>Items Available</label>
            <input
              type="text"
              placeholder="e.g., 15 salads, 10 entrees, 5 desserts"
              value={newSurplus.items}
              onChange={(e) => setNewSurplus({...newSurplus, items: e.target.value})}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label>Amount (estimated servings)</label>
            <select 
              value={newSurplus.amount}
              onChange={(e) => setNewSurplus({...newSurplus, amount: e.target.value})}
              className="form-select"
            >
              <option value="">Select amount</option>
              <option value="Enough for 10-15 people">Small (10-15 people)</option>
              <option value="Enough for 20-30 people">Medium (20-30 people)</option>
              <option value="Enough for 40+ people">Large (40+ people)</option>
            </select>
          </div>

          <button 
            onClick={postSurplus}
            className="post-btn"
            disabled={!newSurplus.location || !newSurplus.items}
          >
            📢 Post Surplus & Notify Shelters
          </button>
        </div>

        {/* Middle Column: Available Surplus */}
        <div className="content-card">
          <div className="card-header">
            <h2>📋 Available Surplus Food</h2>
            <span className="badge count">{surplusFood.length}</span>
          </div>
          
          <div className="surplus-list">
            {surplusFood.map(food => (
              <div key={food.id} className={`surplus-item ${food.status}`}>
                <div className="surplus-header">
                  <h4>{food.location}</h4>
                  <span className={`status-badge ${food.status}`}>
                    {food.status === 'available' ? '🟢 Available' : '🟡 Reserved'}
                  </span>
                </div>
                <p className="surplus-items">{food.items}</p>
                <div className="surplus-details">
                  <span>🍽️ {food.amount}</span>
                  <span>⏰ Ready: {new Date(food.readyTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                  <span>📅 Pickup: {food.pickupWindow}</span>
                </div>
                <div className="surplus-actions">
                  <button className="btn-small primary">Match with Shelter</button>
                  <button className="btn-small secondary">Edit</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Shelter Availability */}
        <div className="content-card">
          <div className="card-header">
            <h2>🏠 Shelter Availability</h2>
            <span className="badge">
              {shelters.filter(s => s.todayAvailable).length}/{shelters.length} Open
            </span>
          </div>
          
          <div className="shelter-grid">
            {shelters.map(shelter => (
              <div key={shelter.id} className={`shelter-card ${shelter.todayAvailable ? 'available' : 'unavailable'}`}>
                <h4>{shelter.name}</h4>
                <p className="shelter-address">{shelter.address}</p>
                <div className="shelter-info">
                  <span>Capacity: {shelter.capacity}</span>
                  <span>Accepts: {shelter.accepts}</span>
                </div>
                <div className={`availability-badge ${shelter.todayAvailable ? 'open' : 'closed'}`}>
                  {shelter.todayAvailable ? '✅ Accepting Today' : '❌ Closed Today'}
                </div>
                <p className="shelter-hours">{shelter.hours}</p>
                <button 
                  className="btn-small"
                  disabled={!shelter.todayAvailable}
                >
                  {shelter.todayAvailable ? 'Request Pickup' : 'Unavailable'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Volunteer Status Panel */}
      <div className="content-card full-width">
        <div className="card-header">
          <h2>👥 Volunteer Status</h2>
          <span className="badge">{volunteers.length} registered</span>
        </div>
        
        <div className="volunteer-grid">
          {volunteers.map(vol => (
            <div key={vol.id} className="volunteer-card">
              <div className="volunteer-avatar">
                {vol.name.charAt(0)}
              </div>
              <div className="volunteer-info">
                <h4>{vol.name}</h4>
                <p>Assigned to: {vol.assignedTo}</p>
              </div>
              <div className={`volunteer-status ${vol.status}`}>
                {vol.status === 'on route' ? '🚗 On Route' : 
                 vol.status === 'waiting' ? '⏳ Waiting' : '📴 Unavailable'}
                {vol.eta && <span className="eta">ETA: {vol.eta}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Energy Efficiency Panel */}
      <div className="content-card full-width">
        <div className="card-header">
          <h2>🌿 Sustainability Impact</h2>
          <span className="badge eco">ECO</span>
        </div>
        
        <div className="sustainability-grid">
          <div className="impact-card">
            <div className="impact-icon">💧</div>
            <div className="impact-content">
              <h4>Water Saved</h4>
              <p className="impact-value">2,500 gallons</p>
              <p className="impact-desc">Equivalent to saving</p>
            </div>
          </div>
          
          <div className="impact-card">
            <div className="impact-icon">🌳</div>
            <div className="impact-content">
              <h4>Trees Equivalent</h4>
              <p className="impact-value">15 trees</p>
              <p className="impact-desc">CO₂ absorption capacity</p>
            </div>
          </div>
          
          <div className="impact-card">
            <div className="impact-icon">⚡</div>
            <div className="impact-content">
              <h4>Energy Saved</h4>
              <p className="impact-value">850 kWh</p>
              <p className="impact-desc">Food production energy</p>
            </div>
          </div>
          
          <div className="impact-card">
            <div className="impact-icon">🗑️</div>
            <div className="impact-content">
              <h4>Landfill Reduced</h4>
              <p className="impact-value">95% less</p>
              <p className="impact-desc">Food waste diverted</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
