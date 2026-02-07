import React from "react";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="home-container">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-overlay">
          <h1 className="logo-text">BiCo Bites</h1>
          <p className="tagline">
            Your live guide to dining at Bryn Mawr & Haverford
          </p>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="content">
        {/* Line Status Card */}
        <div className="card">
          <h2>Line Status</h2>
          <p className="line-status medium">Medium wait time</p>
        </div>

        {/* Top Dishes Card */}
        <div className="card">
          <h2>Top Dishes</h2>
          <ul className="dish-list">
            <li>Sweet Potato Fries — ⭐4.9</li>
            <li>Salmon Chowder — ⭐4.8</li>
            <li>Cannoli — ⭐4.7</li>
          </ul>
        </div>

        {/* Events Card */}
        <div className="card">
          <h2>Upcoming Events</h2>
          <ul className="event-list">
            <li>Italian Night — Feb 8 at Erdman</li>
            <li>Thai Food Week — Feb 10–14 at HDC</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

