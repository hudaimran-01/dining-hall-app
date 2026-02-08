import React, { useState } from 'react';
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
      urgency: 'medium',
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
      urgency: 'low',
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
      urgency: 'high',
    },
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
      reliability: 98,
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
      reliability: 95,
    },
    {
      id: 3,
      name: "St. Mary's Shelter",
      address: '8 min from campus',
      distance: '3.2 miles',
      capacity: '100 meals/day',
      accepts: 'Non-perishable items',
      todayAvailable: false,
      hours: 'Mon-Sat: 9AM-4PM',
      preferredPickup: '1:00-3:00 PM',
      contact: '(610) 555-0789',
      reliability: 92,
    },
  ]);

  const [volunteers, setVolunteers] = useState([
    { id: 1, name: 'Sarah Chen', assignedTo: 'Ardmore Food Pantry', status: 'on route', eta: '15 min', trips: 24 },
    { id: 2, name: 'Marcus Johnson', assignedTo: 'Main Line Community Center', status: 'waiting', eta: '', trips: 18 },
    { id: 3, name: 'Emma Wilson', assignedTo: "St. Mary's Shelter", status: 'unavailable', eta: '', trips: 31 },
  ]);

  const [recommendations] = useState([
    {
      id: 1,
      category: 'Portion Control',
      priority: 'high',
      title: 'Reduce Entree Portions by 15%',
      description: 'Analysis shows 40% of entrees return uneaten. Suggest reducing standard portions.',
      impact: 'Could save ~450 lbs/week',
      status: 'pending',
    },
    {
      id: 2,
      category: 'Menu Planning',
      priority: 'medium',
      title: 'Adjust Tuesday Lunch Production',
      description: 'Tuesday lunch consistently has 30% surplus. Lower production targets.',
      impact: 'Could save ~180 lbs/week',
      status: 'in-progress',
    },
    {
      id: 3,
      category: 'Storage',
      priority: 'medium',
      title: 'Implement FIFO System',
      description: 'First-in-first-out inventory management to reduce expiration waste.',
      impact: 'Could save ~95 lbs/week',
      status: 'pending',
    },
    {
      id: 4,
      category: 'Student Engagement',
      priority: 'low',
      title: 'Launch "Take What You Need" Campaign',
      description: 'Educational signage to encourage mindful serving sizes.',
      impact: 'Could save ~120 lbs/week',
      status: 'completed',
    },
  ]);

  const [wasteData] = useState({
    thisWeek: {
      total: 342,
      byCategory: {
        'Prepared Food': 178,
        Produce: 89,
        'Baked Goods': 45,
        Dairy: 30,
      },
      byMeal: {
        Breakfast: 62,
        Lunch: 148,
        Dinner: 132,
      },
    },
    lastWeek: { total: 398 },
    trend: 'improving',
  });

  const [newSurplus, setNewSurplus] = useState({
    location: '',
    items: '',
    amount: '',
    readyTime: '',
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
      pickupWindow: `${today.getHours() + 1}:00-${today.getHours() + 2}:00 PM`,
      weight: '15 lbs',
      urgency: 'medium',
    };

    setSurplusFood([...surplusFood, surplus]);
    setNewSurplus({ location: '', items: '', amount: '', readyTime: '' });

    autoMatchShelters(surplus);
  };

  const autoMatchShelters = (surplus) => {
    const availableShelters = shelters.filter((s) => s.todayAvailable);
    if (availableShelters.length > 0) {
      alert(`✅ Posted surplus from ${surplus.location}! 
${availableShelters.length} available shelters have been notified.`);
    }
  };

  const getMetrics = () => {
    const availableFood = surplusFood.filter((f) => f.status === 'available').length;
    const matchedDeliveries = surplusFood.filter((f) => f.status === 'reserved').length;
    const activeVolunteers = volunteers.filter((v) => v.status === 'on route' || v.status === 'waiting').length;
    const estimatedMeals = surplusFood.reduce((total, f) => {
      const match = f.amount.match(/\d+/);
      return total + (match ? parseInt(match[0]) : 0);
    }, 0);

    return { availableFood, matchedDeliveries, activeVolunteers, estimatedMeals };
  };

  const metrics = getMetrics();
  const wasteReduction = ((wasteData.lastWeek.total - wasteData.thisWeek.total) / wasteData.lastWeek.total * 100).toFixed(1);

  return (
    <div className="admin-dashboard">
      {/* Header */}
      <header className="dashboard-header">
        <div className="header-content">
          <div className="header-left">
            <div className="logo-section">
              <div className="logo-icon">🍽️</div>
              <div className="title-section">
                <h1>Food Rescue Dashboard</h1>
                <p className="subtitle">Bryn Mawr & Haverford Dining Services</p>
              </div>
            </div>
          </div>

          <div className="header-right"></div>
        </div>

        {/* Navigation Tabs */}
        <nav className="nav-tabs">
          <button className={`nav-tab ${activeTab === 'overview' ? 'active' : ''}`} onClick={() => setActiveTab('overview')}>
            <span className="tab-icon">📊</span> Overview
          </button>
          <button className={`nav-tab ${activeTab === 'rescue' ? 'active' : ''}`} onClick={() => setActiveTab('rescue')}>
            <span className="tab-icon">🍱</span> Food Rescue
          </button>
          <button className={`nav-tab ${activeTab === 'recommendations' ? 'active' : ''}`} onClick={() => setActiveTab('recommendations')}>
            <span className="tab-icon">📈</span> Recommendations
          </button>
        </nav>
      </header>

      {/* === Overview Tab === */}
      {activeTab === 'overview' && (
        <div className="overview-tab">
          {/* Your Overview content goes here */}
          {/* ... keep all your metric cards, waste overview etc. */}
        </div>
      )}

      {/* === Rescue Tab === */}
      {activeTab === 'rescue' && (
        <div className="rescue-layout">
          {/* Your Food Rescue content goes here */}
        </div>
      )}

      {/* === Recommendations Tab === */}
      {activeTab === 'recommendations' && (
        <div className="recommendations-layout">
          {/* Your Recommendations content goes here */}
        </div>
      )}
    </div>
  );
}

export default AdminDashboard;
