
import React from 'react';
import './DishCard.css';

function DishCard({ dish }) {
  const getEmoji = (rating) => {
    if (rating >= 4.5) return '🌟';
    if (rating >= 3.5) return '😊';
    if (rating >= 2.5) return '😐';
    return '😬';
  };

  return (
    <div className="dish-card">
      <div className="dish-card-header">
        <h3 className="dish-name">{dish.name}</h3>
        <span className="dish-emoji">{getEmoji(dish.rating)}</span>
      </div>
      
      <div className="rating-section">
        <div className="stars">
          {'⭐'.repeat(Math.floor(dish.rating))}
          {dish.rating % 1 >= 0.5 && '⭐'}
        </div>
        <span className="rating-number">{dish.rating}/5</span>
      </div>
      
      {dish.allergens && dish.allergens.length > 0 && (
        <div className="allergen-tags">
          {dish.allergens.map((allergen, i) => (
            <span key={i} className="allergen-tag">⚠️ {allergen}</span>
          ))}
        </div>
      )}
      
      {dish.isLocal && (
        <div className="local-badge">
          🌱 Locally Sourced
        </div>
      )}
    </div>
  );
}

export default DishCard;

