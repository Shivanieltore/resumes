import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Ensure your styles are defined here

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <img 
        src="https://static.vecteezy.com/system/resources/thumbnails/024/235/881/small_2x/cv-icon-resume-illustration-sign-user-data-symbol-or-logo-vector.jpg" 
        height="100px"
        width="100px"
        alt="logo"
        className="logo"
        />
      <h1 className="title">Profile Perfect</h1>
      </div>
      <nav className="nav">
        <Link to="/login">
          <button className="login-button">Login</button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;



