import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Ensure your styles are defined here

function Header() {
  return (
    <header className="header">
      <h1 className="logo">Profile Perfect</h1>
      <nav className="nav">
        <Link to="/login">
          <button className="login-btn">Login</button>
        </Link>
      </nav>
    </header>
  );
}

export default Header;



