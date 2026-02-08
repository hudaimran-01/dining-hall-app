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
      {/* Back Button */}
      <button 
        onClick={() => window.location.href = '/admin'}
        style={styles.backButton}
      >
        ← BACK TO ADMIN
      </button>

      {/* Hero Section - Bold Minimalism */}
      <div style={styles.heroSection}>
        <div style={styles.badge}>COMMUNITY IMPACT</div>
        <h1 style={styles.heroTitle}>Food Rescue Volunteers</h1>
        <p style={styles.heroSubtitle}>
          Turn surplus dining hall meals into community support. Every delivery 
          means a warm meal for someone who needs it.
        </p>
      </div>

      {/* Impact Stats - Clean Grid */}
      <div style={styles.impactGrid}>
        <div style={{...styles.impactCard, ...styles.impactCardLarge}}>
          <div style={styles.impactIcon}>
            <PlateIcon />
          </div>
          <div style={styles.impactValue}>1,247</div>
          <div style={styles.impactLabel}>MEALS DELIVERED</div>
          <div style={styles.impactSublabel}>since September</div>
        </div>

        <div style={styles.impactCard}>
          <div style={styles.smallImpactIcon}>
            <UsersIcon />
          </div>
          <div style={styles.smallImpactValue}>42</div>
          <div style={styles.impactLabel}>ACTIVE VOLUNTEERS</div>
        </div>

        <div style={styles.impactCard}>
          <div style={styles.smallImpactIcon}>
            <HomeIcon />
          </div>
          <div style={styles.smallImpactValue}>5</div>
          <div style={styles.impactLabel}>PARTNER SHELTERS</div>
        </div>

        <div style={styles.impactCard}>
          <div style={styles.smallImpactIcon}>
            <RecycleIcon />
          </div>
          <div style={styles.smallImpactValue}>850kg</div>
          <div style={styles.impactLabel}>FOOD RESCUED</div>
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
          >
            {showForm ? '✕ CLOSE' : '+ SIGN UP TO HELP'}
          </button>
        </div>

        {showForm && (
          <div style={styles.formContainer}>
            <form onSubmit={handleSubmit} style={styles.formGrid}>
              <div style={styles.formGroup}>
                <label style={styles.formLabel}>FULL NAME</label>
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
                <label style={styles.formLabel}>EMAIL ADDRESS</label>
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
                <label style={styles.formLabel}>PHONE NUMBER</label>
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
                <label style={styles.formLabel}>PREFERRED DATE</label>
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
                <label style={styles.formLabel}>TIME SLOT</label>
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
                CONFIRM MY SPOT
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
                {v.status === 'confirmed' ? '✓ CONFIRMED' : '⏱ PENDING'}
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

/* BOLD MINIMALISM STYLES - CRIMSON THEME */

const styles = {
  pageWrapper: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '4rem 2rem',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    backgroundColor: '#ffffff',
  },

  backButton: {
    background: 'transparent',
    border: '2px solid #1a1a1a',
    color: '#1a1a1a',
    padding: '0.75rem 1.5rem',
    fontWeight: 700,
    fontSize: '0.85rem',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    marginBottom: '3rem',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },

  heroSection: {
    padding: '4rem 0',
    marginBottom: '4rem',
    borderBottom: '1px solid #fee2e2',
    textAlign: 'center',
  },

  badge: {
    display: 'inline-block',
    background: '#fef2f2',
    color: '#dc2626',
    padding: '0.5rem 1.25rem',
    fontSize: '0.75rem',
    fontWeight: 700,
    marginBottom: '2rem',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
  },

  heroTitle: {
    fontSize: '4rem',
    fontWeight: 900,
    color: '#1a1a1a',
    margin: '0 0 1.5rem 0',
    letterSpacing: '-0.03em',
    lineHeight: 1.1,
  },

  heroSubtitle: {
    fontSize: '1.25rem',
    color: '#525252',
    fontWeight: 300,
    maxWidth: '700px',
    lineHeight: 1.8,
    margin: '0 auto',
  },

  impactGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
    marginBottom: '4rem',
  },

  impactCard: {
    background: '#ffffff',
    border: '1px solid #fee2e2',
    padding: '3rem 2rem',
    transition: 'all 0.2s ease',
  },

  impactCardLarge: {
    gridRow: 'span 2',
    borderLeft: '4px solid #dc2626',
  },

  impactIcon: {
    marginBottom: '1.5rem',
    color: '#1a1a1a',
  },

  impactValue: {
    fontSize: '4rem',
    fontWeight: 900,
    color: '#1a1a1a',
    marginBottom: '1rem',
    letterSpacing: '-0.02em',
    lineHeight: 1,
  },

  impactLabel: {
    fontSize: '0.75rem',
    color: '#525252',
    fontWeight: 700,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
  },

  impactSublabel: {
    fontSize: '0.85rem',
    color: '#525252',
    fontWeight: 300,
    marginTop: '0.5rem',
  },

  smallImpactIcon: {
    marginBottom: '1rem',
    color: '#1a1a1a',
  },

  smallImpactValue: {
    fontSize: '3rem',
    fontWeight: 900,
    color: '#1a1a1a',
    marginBottom: '0.75rem',
    lineHeight: 1,
  },

  scheduleContainer: {
    background: '#ffffff',
    border: '1px solid #fee2e2',
    padding: '3rem',
    marginBottom: '4rem',
  },

  scheduleHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '3rem',
    paddingBottom: '2rem',
    borderBottom: '1px solid #fee2e2',
    flexWrap: 'wrap',
    gap: '1.5rem',
  },

  sectionTitle: {
    fontSize: '2.5rem',
    fontWeight: 800,
    color: '#1a1a1a',
    margin: '0 0 0.5rem 0',
    letterSpacing: '-0.02em',
  },

  sectionSubtitle: {
    fontSize: '1rem',
    color: '#525252',
    fontWeight: 300,
    margin: 0,
  },

  toggleButton: {
    background: '#dc2626',
    color: '#ffffff',
    border: 'none',
    padding: '1rem 2rem',
    fontSize: '0.9rem',
    fontWeight: 700,
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },

  formContainer: {
    background: '#fef2f2',
    padding: '3rem',
    marginBottom: '3rem',
  },

  formGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem',
  },

  formGroup: {
    display: 'flex',
    flexDirection: 'column',
  },

  formLabel: {
    fontSize: '0.75rem',
    fontWeight: 700,
    color: '#1a1a1a',
    marginBottom: '0.75rem',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
  },

  formInput: {
    padding: '1rem 1.25rem',
    border: '2px solid #fee2e2',
    fontSize: '1rem',
    fontWeight: 300,
    transition: 'border-color 0.2s ease',
    background: '#ffffff',
    outline: 'none',
    color: '#1a1a1a',
  },

  submitBtn: {
    gridColumn: '1 / -1',
    background: '#dc2626',
    color: '#ffffff',
    border: 'none',
    padding: '1.25rem 2rem',
    fontSize: '1rem',
    fontWeight: 700,
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    marginTop: '1rem',
  },

  volunteerList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },

  volunteerCard: {
    display: 'flex',
    alignItems: 'center',
    padding: '1.5rem',
    background: '#ffffff',
    border: '1px solid #fee2e2',
    gap: '1.5rem',
    transition: 'border-color 0.2s ease',
  },

  volunteerAvatar: {
    width: '60px',
    height: '60px',
    borderRadius: '0',
    background: '#1a1a1a',
    color: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 900,
    fontSize: '1.25rem',
    flexShrink: 0,
  },

  volunteerInfo: {
    flex: 1,
  },

  volunteerName: {
    fontSize: '1.25rem',
    fontWeight: 800,
    color: '#1a1a1a',
    marginBottom: '0.5rem',
  },

  volunteerDetails: {
    fontSize: '0.95rem',
    color: '#525252',
    fontWeight: 300,
  },

  statusConfirmed: {
    padding: '0.5rem 1.25rem',
    background: '#fef2f2',
    color: '#dc2626',
    fontSize: '0.75rem',
    fontWeight: 700,
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
  },

  statusPending: {
    padding: '0.5rem 1.25rem',
    background: '#fef2f2',
    color: '#ef4444',
    fontSize: '0.75rem',
    fontWeight: 700,
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
  },

  infoCardsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '2rem',
  },

  infoCard: {
    background: '#ffffff',
    border: '1px solid #fee2e2',
    padding: '3rem 2rem',
    textAlign: 'center',
  },

  infoCardIcon: {
    marginBottom: '1.5rem',
    color: '#1a1a1a',
    display: 'flex',
    justifyContent: 'center',
  },

  infoCardTitle: {
    fontSize: '1.5rem',
    fontWeight: 800,
    color: '#1a1a1a',
    margin: '0 0 1rem 0',
    letterSpacing: '-0.01em',
  },

  infoCardText: {
    fontSize: '1rem',
    color: '#525252',
    fontWeight: 300,
    lineHeight: 1.7,
    margin: 0,
  },
};

export default VolunteerPage;