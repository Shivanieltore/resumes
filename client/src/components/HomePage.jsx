import React from "react";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="main-container">
      <header className="header">
        <h1 className="header-title"> </h1>
        <nav className="dropdown-menu">
          <div className="dropdown">
            <button className="dropbtn">Resume</button>
            <div className="dropdown-content">
              <a href="/templates">Templates</a>
              <a href="/personal-info">Personal Info</a>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">CV</button>
            <div className="dropdown-content">
              <a href="/cv-templates">Templates</a>
              <a href="/cv-maker">CV Maker</a>
            </div>
          </div>
        </nav>
      </header>

      <section className="content">
        <h1 className="section-title">Sample Resume</h1>
        <div className="image-grid">
          {/* Placeholder images */}
          <div className="image-box"><img src="https://via.placeholder.com/300" alt="Sample Resume 1" /></div>
          <div className="image-box"><img src="https://via.placeholder.com/300" alt="Sample Resume 2" /></div>
          <div className="image-box"><img src="https://via.placeholder.com/300" alt="Sample Resume 3" /></div>
          <div className="image-box"><img src="https://via.placeholder.com/300" alt="Sample Resume 4" /></div>
          <div className="image-box"><img src="https://via.placeholder.com/300" alt="Sample Resume 5" /></div>
          <div className="image-box"><img src="https://via.placeholder.com/300" alt="Sample Resume 6" /></div>
        </div>

        <h1 className="sample-cv-title">Sample CV</h1>
        <div className="image-grid">
        <div className="image-box"><img src="https://via.placeholder.com/300" alt="Sample CV 1" /></div>
          <div className="image-box"><img src="https://via.placeholder.com/300" alt="Sample CV 2" /></div>
          <div className="image-box"><img src="https://via.placeholder.com/300" alt="Sample CV 3" /></div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
