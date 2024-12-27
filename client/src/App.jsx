import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import LoginPage from "./components/LoginPage"; 
import HomePage from "./components/HomePage";
import Personalinfo from "./components/Personalinfo";
import Templateselector from "./components/Templateselector"; 
import "./App.css";

function App() {
  const [selectedTemplate, setSelectedTemplate] = useState(null); // State to hold the selected template

  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <main className="content">
                <section className="hero">
                  <div className="hero-text slide-in">
                    < h1 id="head">CREATE JOB-WINNING RESUME IN MINUTES</h1>
                    <h3>
                      Stand out from the crowd with expertly designed templates.
                      Choose from a variety of modern, professional layouts
                      crafted by career experts. Quickly personalize with
                      pre-filled skills and job-specific phrases.
                    </h3>
                    <p>
                      <strong>Get hired faster, smarter, and stress-free.</strong>
                    </p>
                  </div>
                  <div className="hero-image">
                    <img
                      src="https://marketplace.canva.com/EAE6aBY7tN4/1/0/1131w/canva-brown-minimal-and-modern-professional-resume-template-prUmN9qWoGQ.jpg"
                      alt="Sample Resume"
                      height="400px"
                      width="300px"
                    />
                  </div>
                </section>
                <AboutUs />
              </main>
            }
          />

          {/* Login Page */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          
          {/* Personal Info Page */}
          <Route path="/personal-info" element={<Personalinfo />} />
          
          {/* Template Selector Page */}
          <Route
            path="/templateselector"
            element={
              !selectedTemplate ? (
                <Templateselector onSelectTemplate={setSelectedTemplate} /> // Corrected the component name
              ) : (
                <Personalinfo selectedTemplate={selectedTemplate} setSelectedTemplate={setSelectedTemplate} />
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;












