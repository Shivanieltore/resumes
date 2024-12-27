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
                src="https://i.etsystatic.com/47138977/r/il/8d85ec/5371571644/il_570xN.5371571644_rotw.jpg"
                alt="Sample Resume 1"
              />
            </Link>
          </div>
          <div className="image-box">
            <img src="https://cdn.venngage.com/template/thumbnail/310/8df44329-87c2-4907-801d-8f335745a2b0.webp" alt="Sample Resume 2" />
          </div>
          <div className="image-box">
            <img src="https://marketplace.canva.com/EAFREuQ-khk/1/0/1131w/canva-cream-blue-aesthetic-business-cv-resume-vo34MmN7fU0.jpg" alt="Sample Resume 3" />
          </div>
        </div>

        <h1 className="sample-cv-title">Sample CV</h1>
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
