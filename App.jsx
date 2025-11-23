import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import WeatherDashboard from "./components/WeatherDashboard/WeatherDashboard";
import About from "./components/About/About";

function App() {
  return (
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cities" element={<WeatherDashboard />} />
          <Route path="/about" element={<About />} />
      </Routes>
   
  );
}

export default App;
