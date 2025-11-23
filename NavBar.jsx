import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">Weather Station</h1>
      <ul className="nav-links">
        <li className="nav-item"><Link to="/">Home</Link></li>
        <li className="nav-item"><Link to="/cities">Cities</Link></li>
        <li className="nav-item"><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;


