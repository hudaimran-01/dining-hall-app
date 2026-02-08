import React, { useState, useEffect } from 'react';
import './AdminDashboard.css';

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Real-time surplus food tracking
  const [surplusFood, setSurplusFood] = useState([
    { 
      id: 1, 
      location: 'New Dorm Dining Hall', 
      items: '15 Caesar Salads, 8 Veggie Burgers', 
      amount: 'Enough for 30 people',
      readyTime: '2025-02-16T14:30',
      status: 'available',
      pickupWindow: '3:00-4:00 PM',
      weight: '12 lbs',
      urgency: 'medium'
    },
    { 
      id: 2, 
      location: 'Erdman Dining Hall', 
      items: '20 Chicken Tikkas, 10 Rice Bowls', 
      amount: 'Enough for 25 people',
      readyTime: '2025-02-16T18:15',
      status: 'available',
      pickupWindow: '7:00-8:00 PM',
      weight: '18 lbs',
      urgency: 'low'
    },
    { 
      id: 3, 
      location: 'Haverford Dining Center', 
      items: '12 Pizzas, 5 Pasta Trays', 
      amount: 'Enough for 35 people',
      readyTime: '2025-02-16T13:45',
      status: 'reserved',
      pickupWindow: '2:30-3:30 PM',
      weight: '22 lbs',
      urgency: 'high'
    }
  ]);

  const [shelters, setShelters] = useState([
    { 
      id: 1, 
      name: 'Ardmore Food Pantry', 
      address: '5 min from Haverford',
      distance: '2.3 miles',
      capacity: '200 meals/day',
      accepts: 'All meals',
      todayAvailable: true,
      hours: 'Mon-Fri: 10AM-6PM',
      preferredPickup: '3:00-5:00 PM',
      contact: '(610) 555-0123',
      reliability: 98
    },
    { 
      id: 2, 
      name: 'Main Line Community Center', 
      address: '10 min from Bryn Mawr',
      distance: '4.1 miles',
      capacity: '150 meals/day',
      accepts: 'Hot meals only',
      todayAvailable: true,
      hours: 'Daily: 11AM-8PM',
      preferredPickup: '6:00-7:00 PM',
      contact: '(610) 555-0456',
      reliability: 95
    },
    { 
      id: 3, 
      name: 'St. Mary\'s Shelter', 
      address: '8 min from campus',
      distance: '3.2 miles',
      capacity: '100 meals/day',
      accepts: 'Non-perishable items',
      todayAvailable: false,
      hours: 'Mon-Sat: 9AM-4PM',
      preferredPickup: '1:00-3:00 PM',
      contact: '(610) 555-0789',
      reliability: 92
    }
  ]);

  const [volunteers, setVolunteers] = useState([
    { id: 1, name: 'Sarah Chen', assignedTo: 'Ardmore Food Pantry', status: 'on route', eta: '15 min', trips: 24 },
    { id: 2, name: 'Marcus Johnson', assignedTo: 'Main Line Community Center', status: 'waiting', eta: '', trips: 18 },
    { id: 3, name: 'Emma Wilson', assignedTo: 'St. Mary\'s Shelter', status: 'unavailable', eta: '', trips: 31 }
  ]);

  const [recommendations] = useState([
    {
      id: 1,
      category: 'Portion Control',
      priority: 'high',
      title: 'Reduce Entree Portions by 15%',
      description: 'Analysis shows 40% of entrees return uneaten. Suggest reducing standard portions.',
      impact: 'Could save ~450 lbs/week',
      status: 'pending'
    },
    {
      id: 2,
      category: 'Menu Planning',
      priority: 'medium',
      title: 'Adjust Tuesday Lunch Production',
      description: 'Tuesday lunch consistently has 30% surplus. Lower production targets.',
      impact: 'Could save ~180 lbs/week',
      status: 'in-progress'
    },
    {
      id: 3,
      category: 'Storage',
      priority: 'medium',
      title: 'Implement FIFO System',
      description: 'First-in-first-out inventory management to reduce expiration waste.',
      impact: 'Could save ~95 lbs/week',
      status: 'pending'
    },
    {
      id: 4,
      category: 'Student Engagement',
      priority: 'low',
      title: 'Launch "Take What You Need" Campaign',
      description: 'Educational signage to encourage mindful serving sizes.',
      impact: 'Could save ~120 lbs/week',
      status: 'completed'
    }
  ]);

  const [wasteData] = useState({
    thisWeek: {
      total: 342,
      byCategory: {
        'Prepared Food': 178,
        'Produce': 89,
        'Baked Goods': 45,
        'Dairy': 30
      },
      byMeal: {
        'Breakfast': 62,
        'Lunch': 148,
        'Dinner': 132
      }
    },
    lastWeek: {
      total: 398
    },
    trend: 'improving'
  });

  const [newSurplus, setNewSurplus] = useState({
    location: '',
    items: '',
    amount: '',
    readyTime: ''
  });

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
      pickupWindow: `${(today.getHours() + 1)}:00-${(today.getHours() + 2)}:00 PM`,
      weight: '15 lbs',
      urgency: 'medium'
    };

    setSurplusFood([...surplusFood, surplus]);
    setNewSurplus({ location: '', items: '', amount: '', readyTime: '' });
    
    autoMatchShelters(surplus);
  };

  const autoMatchShelters = (surplus) => {
    const availableShelters = shelters.filter(s => s.todayAvailable);
    if (availableShelters.length > 0) {
      alert(`Posted surplus from ${surplus.location}! 
      ${availableShelters.length} available shelters have been notified.`);
    }
  };

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
  const wasteReduction = ((wasteData.lastWeek.total - wasteData.thisWeek.total) / wasteData.lastWeek.total * 100).toFixed(1);

  // SVG Icons
  const BoxIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
      <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
      <line x1="12" y1="22.08" x2="12" y2="12"/>
    </svg>
  );

  const HandshakeIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M16 3h5v5"/>
      <path d="M8 3H3v5"/>
      <path d="M12 12c-1 1.5-3 2-5 2s-4-.5-5-2c-1-1.5-.5-3.5 1-5L7 3l5 5"/>
      <path d="M12 12c1 1.5 3 2 5 2s4-.5 5-2c1-1.5.5-3.5-1-5L17 3l-5 5"/>
    </svg>
  );

  const UsersIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  );

  const HeartIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  );

  const TrendDownIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/>
      <polyline points="17 18 23 18 23 12"/>
    </svg>
  );

  const TrashIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="3 6 5 6 21 6"/>
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
      <line x1="10" y1="11" x2="10" y2="17"/>
      <line x1="14" y1="11" x2="14" y2="17"/>
    </svg>
  );

  const BellIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
      <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
    </svg>
  );

  const MapPinIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  );

  const ClockIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  );

  const PhoneIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  );

  const StarIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  );

  const TruckIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="1" y="3" width="15" height="13"/>
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
      <circle cx="5.5" cy="18.5" r="2.5"/>
      <circle cx="18.5" cy="18.5" r="2.5"/>
    </svg>
  );

  const LightbulbIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 18h6"/>
      <path d="M10 22h4"/>
      <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/>
    </svg>
  );

  const BarChartIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="12" y1="20" x2="12" y2="10"/>
      <line x1="18" y1="20" x2="18" y2="4"/>
      <line x1="6" y1="20" x2="6" y2="16"/>
    </svg>
  );

  const PackageIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/>
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
      <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
      <line x1="12" y1="22.08" x2="12" y2="12"/>
    </svg>
  );

  return (
    <div className="admin-dashboard">
      {/* Enhanced Header */}
      <header className="dashboard-header">
        <div className="header-content">
          <div className="header-left">
            <div className="logo-section">
              <div className="logo-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/>
                  <path d="M7 2v20"/>
                  <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>
                </svg>
              </div>
              <div className="title-section">
                <h1>Surplus Recovery System</h1>
                <p className="subtitle">Bryn Mawr & Haverford Dining Services</p>
              </div>
            </div>
          </div>
          <div className="header-right">
            {/* Time widget and emergency button removed */}
          </div>
        </div>
        
        {/* Navigation Tabs */}
        <nav className="nav-tabs">
          <button 
            className={`nav-tab ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            <span className="tab-icon"><BarChartIcon /></span>
            Overview
          </button>
          <button 
            className={`nav-tab ${activeTab === 'recovery' ? 'active' : ''}`}
            onClick={() => setActiveTab('recovery')}
          >
            <span className="tab-icon"><PackageIcon /></span>
            Food Recovery
          </button>
          <button 
            className={`nav-tab ${activeTab === 'recommendations' ? 'active' : ''}`}
            onClick={() => setActiveTab('recommendations')}
          >
            <span className="tab-icon"><LightbulbIcon /></span>
            Recommendations
          </button>
        </nav>
      </header>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <>
          {/* Enhanced Metrics Grid */}
          <div className="metrics-grid">
            <div className="metric-card green">
              <div className="metric-header">
                <span className="metric-icon"><BoxIcon /></span>
                <span className="metric-trend positive">+12%</span>
              </div>
              <h3>Available Surplus</h3>
              <p className="metric-value">{metrics.availableFood}</p>
              <p className="metric-desc">Batches ready for pickup</p>
              <div className="metric-footer">
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: '68%'}}></div>
                </div>
                <span className="progress-label">68% capacity</span>
              </div>
            </div>

            <div className="metric-card blue">
              <div className="metric-header">
                <span className="metric-icon"><HandshakeIcon /></span>
                <span className="metric-trend positive">+8%</span>
              </div>
              <h3>Matched Today</h3>
              <p className="metric-value">{metrics.matchedDeliveries}</p>
              <p className="metric-desc">Successfully connected</p>
              <div className="metric-footer">
                <div className="progress-bar">
                  <div className="progress-fill blue" style={{width: '45%'}}></div>
                </div>
                <span className="progress-label">45% match rate</span>
              </div>
            </div>

            <div className="metric-card purple">
              <div className="metric-header">
                <span className="metric-icon"><UsersIcon /></span>
                <span className="metric-trend neutral">→</span>
              </div>
              <h3>Active Volunteers</h3>
              <p className="metric-value">{metrics.activeVolunteers}</p>
              <p className="metric-desc">Currently on duty</p>
              <div className="metric-footer">
                <div className="progress-bar">
                  <div className="progress-fill purple" style={{width: '67%'}}></div>
                </div>
                <span className="progress-label">67% availability</span>
              </div>
            </div>

            <div className="metric-card orange">
              <div className="metric-header">
                <span className="metric-icon"><HeartIcon /></span>
                <span className="metric-trend positive">+24%</span>
              </div>
              <h3>People Fed</h3>
              <p className="metric-value">{metrics.estimatedMeals}+</p>
              <p className="metric-desc">Estimated meals today</p>
              <div className="metric-footer">
                <div className="progress-bar">
                  <div className="progress-fill orange" style={{width: '82%'}}></div>
                </div>
                <span className="progress-label">82% of goal</span>
              </div>
            </div>
          </div>

          {/* Waste Reduction Overview */}
          <div className="waste-overview-section">
            <div className="content-card waste-summary">
              <div className="card-header">
                <h2>
                  <TrendDownIcon />
                  Waste Reduction Overview
                </h2>
                <div className="badge-group">
                  <span className="badge success">-{wasteReduction}% vs last week</span>
                  <span className="badge eco">Eco Impact</span>
                </div>
              </div>
              
              <div className="waste-stats-grid">
                <div className="waste-stat-card">
                  <div className="stat-icon red"><TrashIcon /></div>
                  <div className="stat-content">
                    <h4>This Week's Waste</h4>
                    <p className="stat-value">{wasteData.thisWeek.total} <span className="stat-unit">lbs</span></p>
                    <p className="stat-change positive">↓ {Math.abs(wasteData.lastWeek.total - wasteData.thisWeek.total)} lbs from last week</p>
                  </div>
                </div>

                <div className="waste-breakdown">
                  <h4>Waste by Category</h4>
                  {Object.entries(wasteData.thisWeek.byCategory).map(([category, amount]) => (
                    <div key={category} className="breakdown-item">
                      <div className="breakdown-label">
                        <span className="category-dot"></span>
                        <span>{category}</span>
                      </div>
                      <div className="breakdown-bar">
                        <div 
                          className="breakdown-fill" 
                          style={{width: `${(amount / wasteData.thisWeek.total) * 100}%`}}
                        ></div>
                      </div>
                      <span className="breakdown-value">{amount} lbs</span>
                    </div>
                  ))}
                </div>

                <div className="waste-breakdown">
                  <h4>Waste by Meal Period</h4>
                  {Object.entries(wasteData.thisWeek.byMeal).map(([meal, amount]) => (
                    <div key={meal} className="breakdown-item">
                      <div className="breakdown-label">
                        <span className="category-dot meal"></span>
                        <span>{meal}</span>
                      </div>
                      <div className="breakdown-bar">
                        <div 
                          className="breakdown-fill meal" 
                          style={{width: `${(amount / wasteData.thisWeek.total) * 100}%`}}
                        ></div>
                      </div>
                      <span className="breakdown-value">{amount} lbs</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Food Recovery Tab */}
      {activeTab === 'recovery' && (
        <div className="rescue-layout">
          {/* Post Surplus Section */}
          <div className="content-card post-surplus-card">
            <div className="card-header">
              <h2>
                <BellIcon />
                Post New Surplus
              </h2>
              <span className="badge live">
                <span className="pulse-dot"></span>
                LIVE
              </span>
            </div>
            
            <div className="form-group">
              <label>Dining Location</label>
              <select 
                value={newSurplus.location}
                onChange={(e) => setNewSurplus({...newSurplus, location: e.target.value})}
                className="form-select"
              >
                <option value="">Select location...</option>
                <option value="New Dorm Dining Hall">New Dorm Dining Hall</option>
                <option value="Erdman Dining Hall">Erdman Dining Hall</option>
                <option value="Haverford Dining Center">Haverford Dining Center</option>
              </select>
            </div>

            <div className="form-group">
              <label>Food Items Available</label>
              <input
                type="text"
                placeholder="e.g., 15 salads, 10 entrees, 5 desserts"
                value={newSurplus.items}
                onChange={(e) => setNewSurplus({...newSurplus, items: e.target.value})}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label>Estimated Servings</label>
              <div className="radio-group">
                <label className="radio-option">
                  <input 
                    type="radio" 
                    name="amount" 
                    value="Enough for 10-15 people"
                    onChange={(e) => setNewSurplus({...newSurplus, amount: e.target.value})}
                  />
                  <span className="radio-label">
                    <span className="radio-title">Small</span>
                    <span className="radio-desc">10-15 people</span>
                  </span>
                </label>
                <label className="radio-option">
                  <input 
                    type="radio" 
                    name="amount" 
                    value="Enough for 20-30 people"
                    onChange={(e) => setNewSurplus({...newSurplus, amount: e.target.value})}
                  />
                  <span className="radio-label">
                    <span className="radio-title">Medium</span>
                    <span className="radio-desc">20-30 people</span>
                  </span>
                </label>
                <label className="radio-option">
                  <input 
                    type="radio" 
                    name="amount" 
                    value="Enough for 40+ people"
                    onChange={(e) => setNewSurplus({...newSurplus, amount: e.target.value})}
                  />
                  <span className="radio-label">
                    <span className="radio-title">Large</span>
                    <span className="radio-desc">40+ people</span>
                  </span>
                </label>
              </div>
            </div>

            <button 
              onClick={postSurplus}
              className="post-btn"
              disabled={!newSurplus.location || !newSurplus.items || !newSurplus.amount}
            >
              <span className="btn-icon"><BellIcon /></span>
              Post Surplus & Notify Shelters
            </button>
          </div>

          {/* Available Surplus List */}
          <div className="content-card surplus-card">
            <div className="card-header">
              <h2>Available Surplus</h2>
              <div className="badge-group">
                <span className="badge count">{surplusFood.length} items</span>
                <span className="badge filter">All Locations</span>
              </div>
            </div>
            
            <div className="surplus-list">
              {surplusFood.map(food => (
                <div key={food.id} className={`surplus-item ${food.status} urgency-${food.urgency}`}>
                  <div className="surplus-header">
                    <div className="surplus-title-section">
                      <h4>{food.location}</h4>
                      <span className={`urgency-badge ${food.urgency}`}>
                        {food.urgency === 'high' ? 'High Priority' : 
                         food.urgency === 'medium' ? 'Medium' : 'Low Priority'}
                      </span>
                    </div>
                    <span className={`status-badge ${food.status}`}>
                      {food.status === 'available' ? 'Available' : 'Reserved'}
                    </span>
                  </div>
                  <p className="surplus-items">{food.items}</p>
                  <div className="surplus-details">
                    <div className="detail-item">
                      <span className="detail-icon"><BoxIcon /></span>
                      <span>{food.amount}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-icon">⚖️</span>
                      <span>{food.weight}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-icon"><ClockIcon /></span>
                      <span>{new Date(food.readyTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-icon"><ClockIcon /></span>
                      <span>{food.pickupWindow}</span>
                    </div>
                  </div>
                  <div className="surplus-actions">
                    <button className="btn-small primary">
                      Match Shelter
                    </button>
                    <button className="btn-small secondary">
                      Edit
                    </button>
                    <button className="btn-small tertiary">
                      Track
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Shelters & Volunteers */}
          <div className="content-card">
            <div className="card-header">
              <h2>
                <MapPinIcon />
                Partner Shelters
              </h2>
              <span className="badge">
                {shelters.filter(s => s.todayAvailable).length}/{shelters.length} accepting
              </span>
            </div>
            
            <div className="shelter-grid">
              {shelters.map(shelter => (
                <div key={shelter.id} className={`shelter-card ${shelter.todayAvailable ? 'available' : 'unavailable'}`}>
                  <div className="shelter-header">
                    <h4>{shelter.name}</h4>
                    <div className="reliability-badge">
                      <span className="reliability-icon"><StarIcon /></span>
                      <span>{shelter.reliability}%</span>
                    </div>
                  </div>
                  <p className="shelter-address">
                    <span className="address-icon"><MapPinIcon /></span>
                    {shelter.address} ({shelter.distance})
                  </p>
                  <div className="shelter-info">
                    <div className="info-item">
                      <span className="info-label">Capacity:</span>
                      <span className="info-value">{shelter.capacity}</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Accepts:</span>
                      <span className="info-value">{shelter.accepts}</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Contact:</span>
                      <span className="info-value phone">
                        <PhoneIcon />
                        {shelter.contact}
                      </span>
                    </div>
                  </div>
                  <div className={`availability-badge ${shelter.todayAvailable ? 'open' : 'closed'}`}>
                    {shelter.todayAvailable ? 'Accepting Today' : 'Closed Today'}
                  </div>
                  <p className="shelter-hours">
                    <span className="hours-icon"><ClockIcon /></span>
                    {shelter.hours}
                  </p>
                  <button 
                    className={`btn-small ${shelter.todayAvailable ? 'primary' : 'disabled'}`}
                    disabled={!shelter.todayAvailable}
                  >
                    {shelter.todayAvailable ? 'Request Pickup' : 'Unavailable Today'}
                  </button>
                </div>
              ))}
            </div>

            <div className="divider"></div>

            <div className="card-header">
              <h2>
                <UsersIcon />
                Active Volunteers
              </h2>
              <span className="badge">{volunteers.length} registered</span>
            </div>
            
            <div className="volunteer-grid">
              {volunteers.map(vol => (
                <div key={vol.id} className="volunteer-card">
                  <div className="volunteer-avatar">
                    <span className="avatar-text">{vol.name.charAt(0)}</span>
                    <span className={`status-indicator ${vol.status}`}></span>
                  </div>
                  <div className="volunteer-info">
                    <h4>{vol.name}</h4>
                    <p className="volunteer-assignment">
                      <span className="assignment-icon"><MapPinIcon /></span>
                      {vol.assignedTo}
                    </p>
                    <p className="volunteer-trips">
                      <span className="trips-icon"><TruckIcon /></span>
                      {vol.trips} trips completed
                    </p>
                  </div>
                  <div className={`volunteer-status ${vol.status}`}>
                    {vol.status === 'on route' ? (
                      <>
                        <span className="status-icon"><TruckIcon /></span>
                        <span className="status-text">On Route</span>
                        <span className="eta">ETA: {vol.eta}</span>
                      </>
                    ) : vol.status === 'waiting' ? (
                      <>
                        <span className="status-icon"><ClockIcon /></span>
                        <span className="status-text">Waiting</span>
                      </>
                    ) : (
                      <>
                        <span className="status-icon">—</span>
                        <span className="status-text">Off Duty</span>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Recommendations Tab */}
      {activeTab === 'recommendations' && (
        <div className="recommendations-layout">
          <div className="content-card full-width">
            <div className="card-header">
              <h2>
                <LightbulbIcon />
                Data-Driven Recommendations
              </h2>
              <div className="badge-group">
                <span className="badge success">{recommendations.filter(r => r.status === 'completed').length} completed</span>
                <span className="badge warning">{recommendations.filter(r => r.status === 'pending').length} pending</span>
              </div>
            </div>

            <div className="recommendations-grid">
              {recommendations.map(rec => (
                <div key={rec.id} className={`recommendation-card priority-${rec.priority} status-${rec.status}`}>
                  <div className="rec-header">
                    <div className="rec-title-section">
                      <span className={`priority-badge ${rec.priority}`}>
                        {rec.priority === 'high' ? 'High Priority' : 
                         rec.priority === 'medium' ? 'Medium' : 'Low Priority'}
                      </span>
                      <span className="category-tag">{rec.category}</span>
                    </div>
                    <span className={`status-pill ${rec.status}`}>
                      {rec.status === 'completed' ? 'Complete' : 
                       rec.status === 'in-progress' ? 'In Progress' : 'Pending'}
                    </span>
                  </div>
                  
                  <h3>{rec.title}</h3>
                  <p className="rec-description">{rec.description}</p>
                  
                  <div className="rec-impact">
                    <div className="impact-label">
                      <span className="impact-icon"><BarChartIcon /></span>
                      <span>Projected Impact</span>
                    </div>
                    <div className="impact-value">{rec.impact}</div>
                  </div>

                  <div className="rec-actions">
                    {rec.status === 'pending' && (
                      <>
                        <button className="btn-small primary">
                          Implement
                        </button>
                        <button className="btn-small secondary">
                          View Details
                        </button>
                      </>
                    )}
                    {rec.status === 'in-progress' && (
                      <>
                        <button className="btn-small success">
                          Mark Complete
                        </button>
                        <button className="btn-small secondary">
                          Track Progress
                        </button>
                      </>
                    )}
                    {rec.status === 'completed' && (
                      <button className="btn-small tertiary">
                        View Results
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Potential Savings Summary */}
          <div className="content-card">
            <div className="card-header">
              <h2>Potential Savings</h2>
              <span className="badge success">If all implemented</span>
            </div>
            
            <div className="savings-summary">
              <div className="savings-card">
                <div className="savings-icon"><TrendDownIcon /></div>
                <div className="savings-content">
                  <h4>Weekly Waste Reduction</h4>
                  <p className="savings-value">845 <span className="savings-unit">lbs</span></p>
                  <p className="savings-desc">Combined impact of all recommendations</p>
                </div>
              </div>
              
              <div className="savings-card">
                <div className="savings-icon">$</div>
                <div className="savings-content">
                  <h4>Annual Cost Savings</h4>
                  <p className="savings-value">$23,400</p>
                  <p className="savings-desc">Based on food cost and disposal fees</p>
                </div>
              </div>
              
              <div className="savings-card">
                <div className="savings-icon">CO₂</div>
                <div className="savings-content">
                  <h4>CO₂ Reduction</h4>
                  <p className="savings-value">4.2 <span className="savings-unit">tons/year</span></p>
                  <p className="savings-desc">Environmental impact equivalent</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminDashboard;