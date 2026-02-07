import React from 'react';
import { mockMenuItems } from '../mockData';

function MenuPage() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Dining Hall Menu</h1>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '20px',
        marginTop: '20px'
      }}>
        {mockMenuItems.map(item => (
          <div
            key={item.id}
            style={{
              border: '1px solid #ddd',
              borderRadius: '10px',
              padding: '15px',
              boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
            }}
          >
            <img
              src={item.photo}
              alt={item.dishName}
              style={{ width: '100%', borderRadius: '8px' }}
            />

            <h3>{item.dishName}</h3>
            <p><strong>Rating:</strong> {item.rating} ⭐</p>
            <p><strong>Location:</strong> {item.location}</p>
            <p><strong>Meal:</strong> {item.mealType}</p>
            <p>
              <strong>Allergens:</strong>{" "}
              {item.allergens.length > 0
                ? item.allergens.join(', ')
                : 'None'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuPage;
