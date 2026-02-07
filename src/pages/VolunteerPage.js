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

    alert(
      `Thanks ${formData.name}! Your volunteer slot is confirmed for ${formData.date} at ${formData.time}.`
    );

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

      {/* Stats */}
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

      {/* Schedule */}
      <div style={scheduleSection}>
        <h2>📅 Upcoming Deliveries</h2>
        <button onClick={() => setShowForm(!showForm)} style={signUpButton}>
          {showForm ? 'Cancel' : 'Sign Up'}
        </button>

        {showForm && (
          <form onSubmit={handleSubmit} style={formStyle}>
            <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required style={inputStyle} />
            <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} required style={inputStyle} />
            <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required style={inputStyle} />
            <input type="date" name="date" value={formData.date} onChange={handleChange} required style={inputStyle} />
            <select name="time" value={formData.time} onChange={handleChange} required style={inputStyle}>
              <option value="">Select time</option>
              <option value="1:00 PM">1:00 PM</option>
              <option value="2:00 PM">2:00 PM</option>
              <option value="6:00 PM">6:00 PM</option>
            </select>
            <button type="submit" style={submitButton}>Confirm</button>
          </form>
        )}

        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Date</th>
              <th style={thStyle}>Time</th>
              <th style={thStyle}>Status</th>
            </tr>
          </thead>
          <tbody>
            {volunteers.map(v => (
              <tr key={v.id}>
                <td style={tdStyle}>{v.name}</td>
                <td style={tdStyle}>{v.date}</td>
                <td style={tdStyle}>{v.time}</td>
                <td style={tdStyle}>{v.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* FAQ */}
      <div style={faqSection}>
        <h2>❓ FAQ</h2>
        <div style={faqItem}>⏱️ 15–30 minutes per delivery</div>
        <div style={faqItem}>🚗 No car needed</div>
        <div style={faqItem}>👯 Volunteer with friends</div>
      </div>
    </div>
  );
}

/* STYLES */

const statsContainer = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px,1fr))', gap: 20 };
const statCard = { background: '#f5f5f5', padding: 20, borderRadius: 10 };
const statNumber = { fontSize: 32, fontWeight: 'bold' };

const scheduleSection = { marginTop: 30 };
const signUpButton = { padding: 10, background: '#4CAF50', color: '#fff', border: 'none' };
const formStyle = { marginTop: 20 };
const inputStyle = { display: 'block', margin: '10px 0', padding: 10, width: '100%' };
const submitButton = { padding: 10, background: '#4CAF50', color: 'white', border: 'none' };

const tableStyle = { width: '100%', marginTop: 20, borderCollapse: 'collapse' };
const thStyle = { background: '#1a237e', color: 'white', padding: 10 };
const tdStyle = { padding: 10, borderBottom: '1px solid #ddd' };

const faqSection = {
  backgroundColor: '#f5f5f5',
  padding: '30px',
  borderRadius: '10px',
  marginTop: '30px'
};

const faqItem = {
  marginBottom: '10px'
};


export default VolunteerPage;
