import { useState } from 'react';

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

  // SVG Icons
  const PlateIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10"/>
      <path d="M12 6v12"/>
      <path d="M6 12h12"/>
    </svg>
  );

  const UsersIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  );

  const HomeIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  );

  const RecycleIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 6L6 18"/>
      <path d="M6 6l12 12"/>
      <path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0"/>
    </svg>
  );

  const ClockIcon = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  );

  const CarIcon = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/>
      <circle cx="7" cy="17" r="2"/>
      <circle cx="17" cy="17" r="2"/>
    </svg>
  );

  const TeamIcon = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="8.5" cy="7" r="4"/>
      <path d="M20 8v6"/>
      <path d="M23 11h-6"/>
    </svg>
  );

  return (
    <div style={styles.pageWrapper}>
      {/* Hero Section */}
      <div style={styles.heroSection}>
        <div style={styles.heroContent}>
          <div style={styles.badge}>Community Impact</div>
          <h1 style={styles.heroTitle}>Food Rescue Volunteers</h1>
          <p style={styles.heroSubtitle}>
            Turn surplus dining hall meals into community support. Every delivery 
            means a warm meal for someone who needs it.
          </p>
        </div>
      </div>

      {/* Impact Stats - Asymmetric Grid */}
      <div style={styles.impactGrid}>
        <div style={{...styles.impactCard, ...styles.impactCardLarge}}>
          <div style={styles.impactIcon}>
            <PlateIcon />
          </div>
          <div style={styles.impactValue}>1,247</div>
          <div style={styles.impactLabel}>Meals Delivered</div>
          <div style={styles.impactSublabel}>since September</div>
        </div>

        <div style={styles.impactCard}>
          <div style={styles.smallImpactIcon}>
            <UsersIcon />
          </div>
          <div style={styles.smallImpactValue}>42</div>
          <div style={styles.impactLabel}>Active Volunteers</div>
        </div>

        <div style={styles.impactCard}>
          <div style={styles.smallImpactIcon}>
            <HomeIcon />
          </div>
          <div style={styles.smallImpactValue}>5</div>
          <div style={styles.impactLabel}>Partner Shelters</div>
        </div>

        <div style={{...styles.impactCard, ...styles.impactCardAccent}}>
          <div style={styles.smallImpactIcon}>
            <RecycleIcon />
          </div>
          <div style={styles.smallImpactValue}>850kg</div>
          <div style={styles.impactLabel}>Food Rescued</div>
        </div>
      </div>

      {/* Schedule Section */}
      <div style={styles.scheduleContainer}>
        <div style={styles.scheduleHeader}>
          <div>
            <h2 style={styles.sectionTitle}>Delivery Schedule</h2>
            <p style={styles.sectionSubtitle}>Pick a time that works for you</p>
          </div>
          <button 
            onClick={() => setShowForm(!showForm)} 
            style={styles.toggleButton}
            onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
            onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
          >
            {showForm ? '✕ Close' : '+ Sign Up to Help'}
          </button>
        </div>

        {showForm && (
          <div style={styles.formContainer}>
            <form onSubmit={handleSubmit} style={styles.formGrid}>
              <div style={styles.formGroup}>
                <label style={styles.formLabel}>Full Name</label>
                <input 
                  name="name" 
                  placeholder="Jamie Rodriguez" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                  style={styles.formInput} 
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.formLabel}>Email Address</label>
                <input 
                  name="email" 
                  type="email"
                  placeholder="jamie@college.edu" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                  style={styles.formInput} 
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.formLabel}>Phone Number</label>
                <input 
                  name="phone" 
                  type="tel"
                  placeholder="(555) 123-4567" 
                  value={formData.phone} 
                  onChange={handleChange} 
                  required 
                  style={styles.formInput} 
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.formLabel}>Preferred Date</label>
                <input 
                  type="date" 
                  name="date" 
                  value={formData.date} 
                  onChange={handleChange} 
                  required 
                  style={styles.formInput} 
                />
              </div>

              <div style={styles.formGroup}>
                <label style={styles.formLabel}>Time Slot</label>
                <select 
                  name="time" 
                  value={formData.time} 
                  onChange={handleChange} 
                  required 
                  style={styles.formInput}
                >
                  <option value="">Choose a time</option>
                  <option value="1:00 PM">1:00 PM - Lunch pickup</option>
                  <option value="2:00 PM">2:00 PM - Afternoon run</option>
                  <option value="6:00 PM">6:00 PM - Dinner delivery</option>
                </select>
              </div>

              <button type="submit" style={styles.submitBtn}>
                Confirm My Spot
              </button>
            </form>
          </div>
        )}

        {/* Volunteer List */}
        <div style={styles.volunteerList}>
          {volunteers.map(v => (
            <div key={v.id} style={styles.volunteerCard}>
              <div style={styles.volunteerAvatar}>
                {v.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div style={styles.volunteerInfo}>
                <div style={styles.volunteerName}>{v.name}</div>
                <div style={styles.volunteerDetails}>
                  {new Date(v.date).toLocaleDateString('en-US', { 
                    weekday: 'short', 
                    month: 'short', 
                    day: 'numeric' 
                  })} at {v.time}
                </div>
              </div>
              <div style={v.status === 'confirmed' ? styles.statusConfirmed : styles.statusPending}>
                {v.status === 'confirmed' ? '✓ Confirmed' : '⏱ Pending'}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Info Cards */}
      <div style={styles.infoCardsContainer}>
        <div style={styles.infoCard}>
          <div style={styles.infoCardIcon}>
            <ClockIcon />
          </div>
          <h3 style={styles.infoCardTitle}>Quick Commitment</h3>
          <p style={styles.infoCardText}>
            Most deliveries take 15-30 minutes from pickup to drop-off
          </p>
        </div>

        <div style={styles.infoCard}>
          <div style={styles.infoCardIcon}>
            <CarIcon />
          </div>
          <h3 style={styles.infoCardTitle}>No Car Required</h3>
          <p style={styles.infoCardText}>
            All shelters are within walking or biking distance from campus
          </p>
        </div>

        <div style={styles.infoCard}>
          <div style={styles.infoCardIcon}>
            <TeamIcon />
          </div>
          <h3 style={styles.infoCardTitle}>Team Up</h3>
          <p style={styles.infoCardText}>
            Bring friends along or meet fellow volunteers on delivery runs
          </p>
        </div>
      </div>
    </div>
  );
}

/* STYLES */

const styles = {
  pageWrapper: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    color: '#1a1a1a',
  },

  heroSection: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    borderRadius: '16px',
    padding: '60px 40px',
    marginBottom: '40px',
    position: 'relative',
    overflow: 'hidden',
  },

  heroContent: {
    position: 'relative',
    zIndex: 1,
  },

  badge: {
    display: 'inline-block',
    background: 'rgba(255,255,255,0.25)',
    color: 'white',
    padding: '6px 16px',
    borderRadius: '20px',
    fontSize: '13px',
    fontWeight: '600',
    marginBottom: '16px',
    backdropFilter: 'blur(10px)',
  },

  heroTitle: {
    fontSize: '48px',
    fontWeight: '700',
    color: 'white',
    margin: '0 0 12px 0',
    letterSpacing: '-0.5px',
  },

  heroSubtitle: {
    fontSize: '19px',
    color: 'rgba(255,255,255,0.9)',
    maxWidth: '600px',
    lineHeight: '1.6',
    margin: 0,
  },

  impactGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '16px',
    marginBottom: '50px',
  },

  impactCard: {
    background: 'white',
    border: '1px solid #e5e7eb',
    borderRadius: '12px',
    padding: '24px',
    transition: 'all 0.2s ease',
    cursor: 'default',
  },

  impactCardLarge: {
    gridRow: 'span 2',
    background: 'linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)',
    border: 'none',
  },

  impactCardAccent: {
    background: '#f0fdf4',
    borderColor: '#bbf7d0',
  },

  impactIcon: {
    marginBottom: '12px',
    color: '#1a1a1a',
  },

  impactValue: {
    fontSize: '56px',
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: '8px',
    letterSpacing: '-1px',
  },

  impactLabel: {
    fontSize: '15px',
    color: '#4b5563',
    fontWeight: '600',
  },

  impactSublabel: {
    fontSize: '13px',
    color: '#9ca3af',
    marginTop: '4px',
  },

  smallImpactIcon: {
    marginBottom: '8px',
    color: '#1a1a1a',
  },

  smallImpactValue: {
    fontSize: '36px',
    fontWeight: '700',
    color: '#1a1a1a',
    marginBottom: '4px',
  },

  scheduleContainer: {
    background: 'white',
    border: '1px solid #e5e7eb',
    borderRadius: '16px',
    padding: '32px',
    marginBottom: '40px',
  },

  scheduleHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '28px',
    flexWrap: 'wrap',
    gap: '16px',
  },

  sectionTitle: {
    fontSize: '28px',
    fontWeight: '700',
    color: '#1a1a1a',
    margin: '0 0 6px 0',
  },

  sectionSubtitle: {
    fontSize: '15px',
    color: '#6b7280',
    margin: 0,
  },

  toggleButton: {
    background: '#667eea',
    color: 'white',
    border: 'none',
    padding: '12px 24px',
    borderRadius: '8px',
    fontSize: '15px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    boxShadow: '0 2px 8px rgba(102, 126, 234, 0.3)',
  },

  formContainer: {
    background: '#f9fafb',
    borderRadius: '12px',
    padding: '28px',
    marginBottom: '32px',
  },

  formGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '20px',
  },

  formGroup: {
    display: 'flex',
    flexDirection: 'column',
  },

  formLabel: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#374151',
    marginBottom: '8px',
  },

  formInput: {
    padding: '12px 14px',
    border: '1.5px solid #d1d5db',
    borderRadius: '8px',
    fontSize: '15px',
    transition: 'border-color 0.2s ease',
    background: 'white',
    outline: 'none',
  },

  submitBtn: {
    gridColumn: '1 / -1',
    background: '#10b981',
    color: 'white',
    border: 'none',
    padding: '14px 28px',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    boxShadow: '0 2px 8px rgba(16, 185, 129, 0.3)',
  },

  volunteerList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },

  volunteerCard: {
    display: 'flex',
    alignItems: 'center',
    padding: '16px',
    background: '#fafafa',
    borderRadius: '10px',
    gap: '16px',
    transition: 'background 0.2s ease',
  },

  volunteerAvatar: {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '700',
    fontSize: '16px',
    flexShrink: 0,
  },

  volunteerInfo: {
    flex: 1,
  },

  volunteerName: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: '4px',
  },

  volunteerDetails: {
    fontSize: '14px',
    color: '#6b7280',
  },

  statusConfirmed: {
    padding: '6px 14px',
    background: '#d1fae5',
    color: '#065f46',
    borderRadius: '6px',
    fontSize: '13px',
    fontWeight: '600',
  },

  statusPending: {
    padding: '6px 14px',
    background: '#fef3c7',
    color: '#92400e',
    borderRadius: '6px',
    fontSize: '13px',
    fontWeight: '600',
  },

  infoCardsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '20px',
  },

  infoCard: {
    background: 'white',
    border: '1px solid #e5e7eb',
    borderRadius: '12px',
    padding: '28px',
    textAlign: 'center',
  },

  infoCardIcon: {
    marginBottom: '12px',
    color: '#1a1a1a',
    display: 'flex',
    justifyContent: 'center',
  },

  infoCardTitle: {
    fontSize: '18px',
    fontWeight: '700',
    color: '#1a1a1a',
    margin: '0 0 10px 0',
  },

  infoCardText: {
    fontSize: '15px',
    color: '#6b7280',
    lineHeight: '1.6',
    margin: 0,
  },
};

export default VolunteerPage;