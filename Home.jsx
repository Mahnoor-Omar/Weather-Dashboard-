import React from "react";
import NavBar from "../NavBar/NavBar";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <NavBar /> {/* Keep NavBar outside the flex container */}
      <div className="home-container">
        <div className="hero-card">
          <span className="welcome-emoji">🌤️❄️☀️</span>
          <h1>Welcome to Weather Station</h1>
          <p>Check the weather in your favorite cities instantly!</p>
          <a href="/cities" className="btn-cities">Go to Cities</a>
        </div>
      </div>
    </div>
  );
};

export default Home;

