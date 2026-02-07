import React, { useState } from 'react';
import { mockMenuItems } from '../mockData';

const MenuPage = () => {
  // Filters
  const [location, setLocation] = useState('All');
  const [mealType, setMealType] = useState('All');
  const [allergen, setAllergen] = useState('None');

  // Filtered menu items
  const filteredItems = mockMenuItems.filter(item => {
    const locationMatch = location === 'All' || item.location === location;
    const mealMatch = mealType === 'All' || item.mealType.toLowerCase() === mealType.toLowerCase();
    const allergenMatch = allergen === 'None' || !item.allergens.includes(allergen);
    return locationMatch && mealMatch && allergenMatch;
  });

  return (
    <div style={{ padding: '20px' }}>
      <h1>Menu</h1>

      {/* Filters */}
      <div style={{ marginBottom: '20px' }}>
        <label>
          Location: 
          <select value={location} onChange={e => setLocation(e.target.value)} style={{ marginLeft: '5px' }}>
            <option>All</option>
            <option>Haverford</option>
            <option>Bryn Mawr</option>
          </select>
        </label>

        <label style={{ marginLeft: '20px' }}>
          Meal Type: 
          <select value={mealType} onChange={e => setMealType(e.target.value)} style={{ marginLeft: '5px' }}>
            <option>All</option>
            <option>Lunch</option>
            <option>Dinner</option>
          </select>
        </label>

        <label style={{ marginLeft: '20px' }}>
          Exclude Allergen: 
          <select value={allergen} onChange={e => setAllergen(e.target.value)} style={{ marginLeft: '5px' }}>
            <option>None</option>
            <option>dairy</option>
            <option>gluten</option>
            <option>soy</option>
            <option>fish</option>
          </select>
        </label>
      </div>

      {/* Menu Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
        {filteredItems.length > 0 ? (
          filteredItems.map(item => (
            <div key={item.id} style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '15px', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' }}>
              <img src={item.photo} alt={item.dishName} style={{ width: '100%', borderRadius: '8px' }} />
              <h3>{item.dishName}</h3>
              <p><strong>Rating:</strong> {item.rating} ⭐</p>
              <p><strong>Location:</strong> {item.location}</p>
              <p><strong>Meal:</strong> {item.mealType}</p>
              <p><strong>Allergens:</strong> {item.allergens.join(', ') || 'None'}</p>
            </div>
          ))
        ) : (
          <p>No dishes match the selected filters.</p>
        )}
      </div>
    </div>
  );
};

export default MenuPage;
