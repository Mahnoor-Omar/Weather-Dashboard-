import React, { useState } from "react";
import weatherData from "../WeatherData/WeatherData";
import NavBar from "../NavBar/NavBar";
import "./WeatherDashboard.css";

const WeatherDashboard = () => {
  const [search, setSearch] = useState("");

  const filteredData = weatherData.filter((w) =>
    w.city.toLowerCase().includes(search.toLowerCase())
  );

  const getWeatherIcon = (condition) => {
    switch (condition.toLowerCase()) {
      case "sunny": return "☀️";
      case "cloudy": return "☁️";
      case "rainy": return "🌧️";
      case "stormy": return "⛈️";
      case "snowy": return "❄️";
      default: return "🌤️";
    }
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Weather Station Dashboard</h1>
       <NavBar />

      <input
        type="text"
        placeholder="Search city"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      <div className="weather-grid">
        {filteredData.map((w, index) => (
          <div key={index} className="weather-card">
            <h2>{w.city}</h2>
            <p>Temperature: {w.temperature}°C</p>
            <p>Condition: {w.condition}</p>
            <p>Humidity: {w.humidity}%</p>
            <p>Wind Speed: {w.windSpeed} km/h</p>

            <div className="forecast-grid">
              {w.forecast.map((f, i) => (
                <div key={i} className="forecast-card">
                  <p>{f.day}</p>
                  <p>{getWeatherIcon(f.condition)}</p>
                  <p>{f.temp}°C</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherDashboard;
