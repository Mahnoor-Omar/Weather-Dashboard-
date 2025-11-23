import React from "react";
import NavBar from "../NavBar/NavBar";
import weatherData from "../WeatherData/WeatherData";
import "./About.css";

const About = () => {

  
  const getWeatherIcon = (condition) => {
    switch (condition.toLowerCase()) {
      case "sunny":
        return "☀️";
      case "cloudy":
        return "☁️";
      case "rainy":
        return "🌧️";
      case "stormy":
        return "⛈️";
      case "snowy":
        return "❄️";
      case "foggy":
        return "🌫️";
      default:
        return "🌤️";
    }
  };

  
  const previewCities = weatherData.slice(0, 3);

  return (
    <div>
      <NavBar />
      <div className="about-container">
        <h1>About Weather Station</h1>
        <p>
          🌤️ Welcome to Weather Station! We provide real-time weather
          information for major cities. You can check the temperature, humidity,
          wind speed, and overall weather condition of each city.
        </p>
        <p>
          ❄️ Our goal is to make weather updates accessible and visually
          appealing for everyone. Whether you are planning your day, a trip, or
          just curious about the weather, Weather Station has you covered!
        </p>
        <p>
          ☀️ Built with React, this app uses modern web technologies to provide
          a smooth and interactive experience. You can navigate between Home,
          Cities, and About pages easily using the NavBar.
        </p>

        <h2 className="preview-title">Quick City Weather Preview</h2>
        <div className="preview-grid">
          {previewCities.map((city, index) => (
            <div key={index} className="preview-card">
              <h3>{city.city}</h3>
              <div className="preview-icon">{getWeatherIcon(city.condition)}</div>
              <p>Temp: {city.temperature}°C</p>
              <p>{city.condition}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
