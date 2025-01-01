import React from "react";
import "./About.css";

export const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Food Court</h1>
      <p className="about-description">
        Welcome to Food Court! We are your one-stop destination for delicious, high-quality food from around the world. Whether you're craving savory dishes, sweet treats, or refreshing beverages, we’ve got you covered.
      </p>
      <p className="about-description">
        At Food Court, we believe in bringing people together through the love of food. With a wide variety of cuisines and options, there’s something for everyone to enjoy. Our mission is to deliver an exceptional dining experience by offering freshly prepared meals in a vibrant and friendly atmosphere.
      </p>
      <p className="about-description">
        Join us today and embark on a culinary journey that celebrates flavor, diversity, and community.
      </p>
      

      <div className="contact-section">
        <h2>Contact Us</h2>
        <p>
          <strong>Instagram:</strong> @foodcourt
        </p>
        <p>
          <strong>Email:</strong> contact@foodcourt.com
        </p>
        <p>
          <strong>Phone:</strong> +1 (123) 456-7890
        </p>
      </div>

      <div className="back-button-container">
        <a href="/" className="back-button">Back to Home</a>
      </div>
    </div>
  );
};
