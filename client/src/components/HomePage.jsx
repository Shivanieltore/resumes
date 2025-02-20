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
              <Link to="/templateselector">Templates</Link>
              <Link to="/personal-info">Personal Info</Link>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropbtn">CV</button>
            <div className="dropdown-content">
              <Link to="/cvtemplateselector">Templates</Link>
              <Link to="/cv-maker">CV Maker</Link>
            </div>
          </div>
        </nav>
      </header>

      <section className="content">
        <h1 className="section-title"><u>Sample Resume</u></h1>
        <div className="image-grid">
          {/* Placeholder images */}
          <div className="image-box">
            <Link to="/templateselector">
              <img 
                src="https://marketplace.canva.com/EAFzSzKZZsg/1/0/1131w/canva-modern-minimalist-cv-resume-oTDK4_esRiU.jpg"
                alt="Sample Resume 1"
              />
            </Link>
          </div>
          <div className="image-box">
            <img src="https://i.pinimg.com/736x/46/05/77/46057744278881d7ac19b8bdcc3ee2dd.jpg" alt="Sample Resume 2" />
          </div>
          <div className="image-box">
            <img src="https://marketplace.canva.com/EAFREuQ-khk/1/0/1131w/canva-cream-blue-aesthetic-business-cv-resume-vo34MmN7fU0.jpg" alt="Sample Resume 3" />
          </div>
        </div>

        <h1 className="section-title"><u>Sample Curriculum vitae</u></h1>
        <div className="image-grid">
          <div className="image-box">
            <img src="https://cdn.enhancv.com/predefined-examples/Xq1ZSNvefc8T6ztC2DcYJxadFzWxrS5qQfQD9yAE/image.png" alt="Sample CV 1" />
          </div>
          <div className="image-box">
            <img src="https://cdn.enhancv.com/predefined-examples/O1uZz1fgObjUID44d3eBaGyxRlii4l2IOlgA1qYV/image.png" alt="Sample CV 2" />
          </div>
          <div className="image-box">
            <img src="https://cdn.enhancv.com/predefined-examples/ODZVlPZYcH19GrpQwczhgCJICeB1Y5zh81Pj1wVI/image.png" alt="Sample CV 3" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
