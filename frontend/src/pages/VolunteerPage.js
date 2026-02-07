import React, { useState } from 'react';

function VolunteerPage() {
  const [volunteers, setVolunteers] = useState([
    { id: 1, name: "Sarah Chen", date: "2025-02-08", time: "2:00 PM", status: "confirmed" },
    { id: 2, name: "Marcus Johnson", date: "2025-02-09", time: "3:00 PM", status: "confirmed" },
    { id: 3, name: "Emma Wilson", date: "2025-02-10", time: "1:00 PM", status: "pending" }
  ]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    phone: ''
  });

  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newVolunteer = {
      id: volunteers.length + 1,
      name: formData.name,
      date: formData.date,
      time: formData.time,
      status: 'pending'
    };

    setVolunteers([...volunteers, newVolunteer]);

    alert(`Thanks ${formData.name}! Your volunteer slot is confirmed for ${formData.date} at ${formData.time}. We'll send confirmation to ${formData.email}`);

    // Reset form
    setFormData({ name: '', email: '', date: '', time: '', phone: '' });
    setShowForm(false);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <h1>🚚 Food Rescue Volunteer Program</h1>
      <p>Help deliver surplus dining hall food to local shelters</p>

      {/* Impact Stats */}
      <div style={statsContainer}>
        <div style={statCard}>
          <h3>🍽️ Meals Delivered</h3>
          <p style={statNumber}>1,247</p>
          <p>This semester</p>
        </div>

        <div style={statCard}>
          <h3>👥 Active Volunteers</h3>
          <p style={statNumber}>42</p>
          <p>Students helping</p>
        </div>

        <div style={statCard}>
          <h3>🏠 Partner Shelters</h3>
          <p style={statNumber}>5</p>
          <p>Local organizations</p>
        </div>

        <div style={statCard}>
          <h3>♻️ Food Saved</h3>
          <p style={statNumber}>850 kg</p>
          <p>From waste</p>
        </div>
      </div>

      {/* How It Works */}
      <div style={infoSection}>
        <h2>How It Works</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
          <div style={stepCard}>
            <h3>1️⃣ Sign Up</h3>
            <p>Choose a delivery time slot that works for you</p>
          </div>

          <div style={stepCard}>
            <h3>2️⃣ Pick Up Food</h3>
            <p>Collect surplus meals from dining hall (5-10 min)</p>
          </div>

          <div style={stepCard}>
            <h3>3️⃣ Deliver</h3>
            <p>Drop off at nearby shelter (locations provided)</p>
          </div>

          <div style={stepCard}>
            <h3>4️⃣ Make Impact</h3>
            <p>Help feed those in need & reduce waste!</p>
          </div>
        </div>
      </div>

      {/* Upcoming Delivery Schedule */}
      <div style={scheduleSection}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2>📅 Upcoming Deliveries</h2>
          <button onClick={() => setShowForm(!showForm)} style={signUpButton}>
            {showForm ? '✖ Cancel' : '+ Sign Up to Volunteer'}
          </button>
        </div>

        {/* Volunteer Sign-Up Form */}
        {showForm && (
          <form onSubmit={handleSubmit} style={formStyle}>
            <h3>Volunteer Sign-Up Form</h3>

            <input
              type="text"
              name="name"
              placeholder="Your Name *"
              value={formData.name}
              onChange={handleChange}
              required
              style={inputStyle}
            />

            <input
              type="email"
              name="email"
              placeholder="Email (@haverford.edu or @brynmawr.edu) *"
              value={formData.email}
              onChange={handleChange}
              required
              style={inputStyle}
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number *"
              value={formData.phone}
              onChange={handleChange}
              required
              style={inputStyle}
            />

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              style={inputStyle}
              min={new Date().toISOString().split('T')[0]}
            />

            <select
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              style={inputStyle}
            >
              <option value="">Select Time Slot *</option>
              <option value="1:00 PM">1:00 PM - After Lunch</option>
              <option value="2:00 PM">2:00 PM - After Lunch</option>
              <option value="6:00 PM">6:00 PM - After Dinner</option>
              <option value="7:00 PM">7:00 PM - After Dinner</option>
            </select>

            <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
              <button type="submit" style={submitButton}>
                ✅ Confirm Volunteer Slot
              </button>
              <button type="button" onClick={() => setShowForm(false)} style={cancelButton}>
                Cancel
              </button>
            </div>
          </form>
        )}

        {/* Volunteer List */}
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Volunteer</th>
              <th style={thStyle}>Date</th>
              <th style={thStyle}>Time</th>
              <th style={thStyle}>Status</th>
            </tr>
          </thead>
          <tbody>
            {volunteers.map(vol => (
              <tr key={vol.id}>
                <td style={tdStyle}>{vol.name}</td>
                <td style={tdStyle}>{vol.date}</td>
                <td style={tdStyle}>{vol.time}</td>
                <td style={tdStyle}>
                  <span style={{
                    ...statusBadge,
                    backgroundColor: vol.status === 'confirmed' ? '#e8f5e9' : '#fff3e0',
                    color: vol.status === 'confirmed' ? '#2e7d32' : '#e65100'
                  }}>
                    {vol.status === 'confirmed' ? '✅ Confirmed' : '⏳ Pending'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Partner Shelters */}
      <div style={sheltersSection}>
        <h2>🏠 Our Partner Shelters</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px' }}>
          <div style={shelterCard}>
            <h4>Ardmore Food Pantry</h4>
            <p>📍 5 min from Haverford</p>
            <p>Serves 200+ families/week</p>
          </div>

          <div style={shelterCard}>
            <h4>Main Line Community Center</h4>
            <p>📍 10 min from Bryn Mawr</p>
            <p>Hot meal program</p>
          </div>

          <div style={shelterCard}>
            <h4>St. Mary's Shelter</h4>
            <p>📍 8 min from campus</p>
            <p>Emergency housing support</p>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div style={faqSection}>
        <h2>❓ Frequently Asked Questions</h2>

        <div style={faqItem}>
          <h4>How much time does it take?</h4>
          <p>15-30 minutes total: 5-10 min pickup + 10-20 min delivery</p>
        </div>

        <div style={faqItem}>
          <h4>Do I need a car?</h4>
          <p>No! We provide campus vehicles or can arrange carpools</p>
        </div>

        <div style={faqItem}>
          <h4>Can I volunteer with friends?</h4>
          <p>Yes! Group deliveries are encouraged</p>
        </div>

        <div style={faqItem}>
          <h4>Is training required?</h4>
          <p>Quick 10-minute orientation on your first delivery</p>
        </div>
      </div>
    </div>
  );
}

// Styles
const statsContainer = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '20px',
  margin: '30px 0'
};

const statCard = {
  backgroundColor: '#f5f5f5',
  padding: '25px',
  borderRadius: '10px',
  textAlign: 'center',
  border: '1px solid #ddd',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
};

const statNumber = {
  fontSize: '36px',
  fontWeight: 'bold',
  margin: '10px 0',
  color: '#1a237e'
};

const infoSection = {
  backgroundColor: '#e3f2fd',
  padding: '30px',
  borderRadius: '10px',
  margin: '30px 0'
};

const stepCard = {
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '8px',
  border: '1px solid #ddd'
};

const scheduleSection = {
  backgroundColor: 'white',
  padding: '30px',
  borderRadius: '10px',
  border: '1px solid #e0e0e0',
  margin: '30px 0'
};

const signUpButton = {
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  padding: '12px 24px',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '16px',
  fontWeight: 'bold'
};

const formStyle = {
  backgroundColor: '#f9f9f9',
  padding: '25px',
  borderRadius: '10px',
  marginBottom: '30px',
  border: '2px solid #4CAF50'
};

const inputStyle = {
  width: '100%',
  padding: '12px',
  margin: '8px 0',
  borderRadius: '5px',
  border: '1px solid #ddd',
  fontSize: '14px',
  boxSizing: 'border-box'
};

const submitButton = {
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  padding: '12px 30px',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '16px',
  fontWeight: 'bold',
  flex: 1
};

const cancelButton = {
  backgroundColor: '#f5f5f5',
  color: '#333',
  border: '1px solid #ddd',
  padding: '12px 30px',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '16px'
};

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  marginTop: '20px'
};

const thStyle = {
  backgroundColor: '#1a237e',
  color: 'white',
  padding: '15px',
  textAlign: 'left',
  fontWeight: 'bold'
};

const tdStyle = {
  padding: '15px',
  borderBottom: '1px solid #e0e0e0'
};

const statusBadge = {
  padding: '6px 12px',
  borderRadius: '15px',
  fontSize: '13px',
  fontWeight: 'bold'
};

const sheltersSection = {
  backgroundColor: '#fff3e0',
  padding: '30px',
  borderRadius: '10px',
  margin: '30px 0'
};

const shelterCard = {
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '8px',
  border: '1px solid #ffcc80'
};

const faqSection = {
  backgroundColor: '#f5f5f5',
  padding: '30px',
  borderRadius: '10px',

