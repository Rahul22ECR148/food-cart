import React from "react";
import { Link } from "react-router-dom";
import "./Welcome.css"; 

export const Welcome = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <h1 className="hero-title">Welcome to Food Court</h1>
        <p className="hero-description">
          Your one-stop destination for delicious food from around the world.
        </p>
        <div className="cta-buttons">
          <Link to="/about" className="cta-button">Learn More About Us</Link>
          <Link to="/Home" className="cta-button">For Order</Link>
        </div>
      </section>

      <section className="food-introduction">
        <h2 className="section-title">Savor the Flavor</h2>
        <p className="section-description">
          From savory snacks to delightful desserts, explore an array of cuisines designed to satisfy every craving. Fresh, vibrant, and delicious!
        </p>
      </section>

      <section className="services">
        <h2 className="section-title">Why Choose Us?</h2>
        <div className="service-item">
          <div className="service-icon">🍽️</div>
          <p className="service-text">High-quality, freshly prepared meals.</p>
        </div>
        <div className="service-item">
          <div className="service-icon">🕒</div>
          <p className="service-text">Quick and efficient service.</p>
        </div>
        <div className="service-item">
          <div className="service-icon">🌍</div>
          <p className="service-text">A variety of global cuisines.</p>
        </div>
      </section>
    </div>
  );
};
