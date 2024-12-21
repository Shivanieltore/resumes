import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="main-container">
      <header className="header">
        <h1 className="header-title">Welcome to Resume and CV Maker</h1>
        <nav className="dropdown-menu">
          <div className="dropdown">
            <button className="dropbtn">Resume</button>
            <div className="dropdown-content">
              <Link to="/templates">Templates</Link>
              <Link to="/personal-info">Personal Info</Link>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">CV</button>
            <div className="dropdown-content">
              <Link to="/templates">Templates</Link>
              <Link to="/cv-maker">CV Maker</Link>
            </div>
          </div>
        </nav>
      </header>

      <section className="content">
        <h1 className="section-title">Sample Resume</h1>
        <div className="image-grid">
          {/* Placeholder images */}
          <div className="image-box">
            <Link to="/templates">
              <img
                src="https://via.placeholder.com/300"
                alt="Sample Resume 1"
              />
            </Link>
          </div>
          <div className="image-box">
            <img src="https://via.placeholder.com/300" alt="Sample Resume 2" />
          </div>
          <div className="image-box">
            <img src="https://via.placeholder.com/300" alt="Sample Resume 3" />
          </div>
        </div>

        <h1 className="sample-cv-title">Sample CV</h1>
        <div className="image-grid">
          <div className="image-box">
            <img src="https://via.placeholder.com/300" alt="Sample CV 1" />
          </div>
          <div className="image-box">
            <img src="https://via.placeholder.com/300" alt="Sample CV 2" />
          </div>
          <div className="image-box">
            <img src="https://via.placeholder.com/300" alt="Sample CV 3" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
