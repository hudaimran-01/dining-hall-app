import React, { useState, useEffect } from 'react';
import { addRating, getAllRatings } from '../services/ratingsService';
import { getCurrentUser } from '../services/authService';
import './RatingsPage.css';

function RatingsPage() {
  const [dishName, setDishName] = useState('');
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [topDishes, setTopDishes] = useState([]);
  const [worstDishes, setWorstDishes] = useState([]);
  const [message, setMessage] = useState('');
  const [pollVote, setPollVote] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    loadRatings();
  }, []);

  const loadRatings = async () => {
  const allRatings = await getAllRatings();
  
  // Calculate dish averages
  const dishMap = {};
  allRatings.forEach(r => {
    if (!dishMap[r.dishName]) {
      dishMap[r.dishName] = { ratings: [], total: 0, count: 0 };
    }
    dishMap[r.dishName].ratings.push(r.rating);
    dishMap[r.dishName].total += r.rating;
    dishMap[r.dishName].count++;
  });

  const allDishes = Object.keys(dishMap).map(name => ({
    dishName: name,
    averageRating: parseFloat((dishMap[name].total / dishMap[name].count).toFixed(1)),
    totalRatings: dishMap[name].count
  }));

  // Top dishes: 4+ stars only
  const top = allDishes
    .filter(dish => dish.averageRating >= 4.0)
    .sort((a, b) => b.averageRating - a.averageRating)
    .slice(0, 5);

  // Worst dishes: below 3 stars only
  const worst = allDishes
    .filter(dish => dish.averageRating < 3.0)
    .sort((a, b) => a.averageRating - b.averageRating)
    .slice(0, 5);

  setTopDishes(top);
  setWorstDishes(worst);
};

  const handleSubmitRating = async (e) => {
    e.preventDefault();
    
    if (!dishName.trim()) {
      setMessage('❌ Please enter a dish name!');
      return;
    }
    
    if (rating === 0) {
      setMessage('❌ Please select a rating!');
      return;
    }

    const user = getCurrentUser();
    const result = await addRating(
      dishName,
      rating,
      user?.uid || 'anonymous',
      user?.displayName || 'Anonymous Student'
    );

    if (result.success) {
      setMessage('✅ Rating submitted! Thanks for your feedback!');
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
      setDishName('');
      setRating(0);
      loadRatings();
    } else {
      setMessage('❌ Error submitting rating. Try again!');
    }
  };

  const handlePollVote = (option) => {
    setPollVote(option);
    setMessage(`✅ Voted for ${option}! Results will be announced next week.`);
  };

  const renderStars = (currentRating, isInteractive = false) => {
    return [1, 2, 3, 4, 5].map((star) => (
      <span
        key={star}
        className={`star ${star <= (isInteractive ? (hoverRating || rating) : currentRating) ? 'filled' : ''}`}
        onClick={() => isInteractive && setRating(star)}
        onMouseEnter={() => isInteractive && setHoverRating(star)}
        onMouseLeave={() => isInteractive && setHoverRating(0)}
        style={{ cursor: isInteractive ? 'pointer' : 'default' }}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="ratings-page">
      {showConfetti && <div className="confetti">🎉🎊✨🌟💫</div>}
      
      <div className="ratings-hero">
        <h1 className="ratings-title">Rate Your Dining Experience</h1>
        <p className="ratings-subtitle">Help your fellow students make better food choices!</p>
      </div>

      <div className="ratings-container">
        
        {/* Rating Form */}
        <section className="rating-form-section">
          <div className="form-card">
            <h2>🍴 Rate a Dish</h2>
            <form onSubmit={handleSubmitRating}>
              <div className="form-group">
                <label>Dish Name</label>
                <input
                  type="text"
                  value={dishName}
                  onChange={(e) => setDishName(e.target.value)}
                  placeholder="e.g., Pizza Station, Stir Fry Bar"
                  className="dish-input"
                />
              </div>

              <div className="form-group">
                <label>Your Rating</label>
                <div className="star-rating">
                  {renderStars(rating, true)}
                </div>
                {rating > 0 && (
                  <p className="rating-text">
                    {rating === 1 && "😬 Awful - avoid at all costs"}
                    {rating === 2 && "😐 Meh - only if desperate"}
                    {rating === 3 && "🙂 Decent - acceptable choice"}
                    {rating === 4 && "😊 Good - would recommend"}
                    {rating === 5 && "🤩 Amazing - must try!"}
                  </p>
                )}
              </div>

              <button type="submit" className="submit-btn">
                Submit Rating
              </button>
            </form>

            {message && (
              <div className={`message ${message.includes('✅') ? 'success' : 'error'}`}>
                {message}
              </div>
            )}
          </div>
        </section>

        {/* Student Poll */}
        <section className="poll-section">
          <div className="poll-card">
            <h2>🗳️ Bi-Weekly Student Poll</h2>
            <p className="poll-question">What should we add to next week's menu?</p>
            
            <div className="poll-options">
              {['🌮 Taco Tuesday', '🍕 Neapolitan Pizza Night', '🥗 Mediterranean Bowl Bar', '🍜 Ramen Station'].map((option) => (
                <button
                  key={option}
                  className={`poll-option ${pollVote === option ? 'selected' : ''}`}
                  onClick={() => handlePollVote(option)}
                >
                  {option}
                  {pollVote === option && <span className="checkmark">✓</span>}
                </button>
              ))}
            </div>

            {pollVote && (
              <p className="poll-results">
                🔥 Taco Tuesday is currently leading with 47% of votes!
              </p>
            )}
          </div>
        </section>

        {/* Top Rated Dishes */}
        <section className="top-dishes-section">
          <h2>⭐ Top Rated Dishes</h2>
          <div className="dishes-grid">
            {topDishes.map((dish, index) => (
              <div key={index} className="dish-rank-card top">
                <div className="rank-badge">{index + 1}</div>
                <div className="dish-info">
                  <h3>{dish.dishName}</h3>
                  <div className="dish-rating">
                    {renderStars(Math.round(dish.averageRating))}
                    <span className="rating-num">{dish.averageRating}/5</span>
                  </div>
                  <p className="rating-count">{dish.totalRatings} ratings</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Worst Rated Dishes (with humor) */}
        <section className="worst-dishes-section">
          <h2>😬 Hall of Shame</h2>
          <p className="shame-subtitle">Proceed with caution...</p>
          <div className="dishes-grid">
            {worstDishes.map((dish, index) => (
              <div key={index} className="dish-rank-card worst">
                <div className="rank-badge danger">{index + 1}</div>
                <div className="dish-info">
                  <h3>{dish.dishName}</h3>
                  <div className="dish-rating">
                    {renderStars(Math.round(dish.averageRating))}
                    <span className="rating-num">{dish.averageRating}/5</span>
                  </div>
                  <p className="rating-count">{dish.totalRatings} brave souls tried this</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );


}

export default RatingsPage;
