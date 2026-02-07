import React, { useState, useEffect } from 'react';

function AdminPage() {
  const [wasteData, setWasteData] = useState([]);
  const [stats, setStats] = useState({ totalWaste: 0, co2Saved: 0 });

  // Mock data - will replace with Firebase
  useEffect(() => {
    // Simulate loading data
    const mockWaste = [
      { id: 1, dish: 'Caesar Salad', amount: 8.2, reason: 'portion too large', date: '2025-02-15' },
      { id: 2, dish: 'Chicken Tikka', amount: 3.5, reason: 'too spicy', date: '2025-02-15' },
      { id: 3, dish: 'Veggie Burger', amount: 1.2, reason: 'bun stale', date: '2025-02-16' },
    ];
    
    setWasteData(mockWaste);
    
    // Calculate stats
    const totalWaste = mockWaste.reduce((sum, item) => sum + item.amount, 0);
    const co2Saved = totalWaste * 1.5; // Simple calculation
    
    setStats({ totalWaste, co2Saved });
  }, []);

  const addWasteEntry = () => {
    const dish = prompt('Enter dish name:');
    const amount = parseFloat(prompt('Enter waste amount (kg):'));
    const reason = prompt('Enter reason:');
    
    if (dish && amount && reason) {
      const newEntry = {
        id: wasteData.length + 1,
        dish,
        amount,
        reason,
        date: new Date().toISOString().split('T')[0]
      };
      
      setWasteData([...wasteData, newEntry]);
      alert('Waste entry added! (Mock - will save to Firebase)');
    }
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <p style={{ color: '#d32f2f', fontWeight: 'bold' }}>
        🔒 Restricted to dining staff only
      </p>
      
      {/* Stats Cards */}
      <div style={styles.statsContainer}>
        <div style={styles.statCard}>
          <h3>Total Food Waste</h3>
          <p style={styles.statNumber}>{stats.totalWaste.toFixed(1)} kg</p>
          <p>This week</p>
        </div>
        
        <div style={styles.statCard}>
          <h3>CO₂ Impact</h3>
          <p style={styles.statNumber}>{stats.co2Saved.toFixed(1)} kg</p>
          <p>Equivalent saved</p>
        </div>
        
        <div style={styles.statCard}>
          <h3>Most Wasted Dish</h3>
          <p style={styles.statNumber}>
            {wasteData.length > 0 
              ? wasteData.reduce((a, b) => a.amount > b.amount ? a : b).dish
              : 'N/A'
            }
          </p>
          <p>Needs portion adjustment</p>
        </div>
      </div>
      
      {/* Waste Log */}
      <div style={styles.wasteLog}>
        <div style={styles.sectionHeader}>
          <h2>Waste Log</h2>
          <button onClick={addWasteEntry} style={styles.addButton}>
            + Add Waste Entry
          </button>
        </div>
        
        {wasteData.length === 0 ? (
          <p>No waste data recorded yet.</p>
        ) : (
          <table style={styles.table}>
            <thead>
              <tr>
                <th>Date</th>
                <th>Dish</th>
                <th>Amount (kg)</th>
                <th>Reason</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {wasteData.map(entry => (
                <tr key={entry.id}>
                  <td>{entry.date}</td>
                  <td style={{ fontWeight: 'bold' }}>{entry.dish}</td>
                  <td style={{ color: '#d32f2f' }}>{entry.amount}</td>
                  <td>{entry.reason}</td>
                  <td>
                    <button 
                      onClick={() => {
                        if (window.confirm(`Delete waste entry for ${entry.dish}?`)) {
                          setWasteData(wasteData.filter(item => item.id !== entry.id));
                        }
                      }}
                      style={styles.deleteButton}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      
      {/* Action Items */}
      <div style={styles.actionSection}>
        <h2>Recommended Actions</h2>
        <ul>
          <li>✅ Reduce portion size for Caesar Salad (most wasted)</li>
          <li>⚠️ Review Chicken Tikka spice level</li>
          <li>📊 Schedule waste review meeting: Friday 3 PM</li>
          <li>🌱 Plan donation for excess food</li>
        </ul>
      </div>
    </div>
  );
}

// Styles
const styles = {
  statsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    margin: '30px 0'
  },
  statCard: {
    backgroundColor: '#f5f5f5',
    padding: '25px',
    borderRadius: '10px',
    textAlign: 'center',
    border: '1px solid #ddd',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  },
  statNumber: {
    fontSize: '36px',
    fontWeight: 'bold',
    margin: '10px 0',
    color: '#1a237e'
  },
  wasteLog: {
    backgroundColor: 'white',
    padding: '25px',
    borderRadius: '10px',
    border: '1px solid #e0e0e0',
    margin: '30px 0'
  },
  sectionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px'
  },
  addButton: {
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '14px'
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse'
  },
  deleteButton: {
    backgroundColor: '#ffebee',
    color: '#d32f2f',
    border: '1px solid #d32f2f',
    padding: '5px 10px',
    borderRadius: '3px',
    cursor: 'pointer',
    fontSize: '12px'
  },
  actionSection: {
    backgroundColor: '#fff3e0',
    padding: '20px',
    borderRadius: '10px',
    border: '1px solid #ffcc80'
  }
};

export default AdminPage;