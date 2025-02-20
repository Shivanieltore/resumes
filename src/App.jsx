import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import Personalinfo from "./components/Personalinfo";
import Templateselector from "./components/Templateselector";
import Signup from "./components/Signup";
import CvTemplateSelector from "./components/CvTemplateSelector"; // Import the new CvTemplateSelector
import "./App.css";

function App() {
  const [selectedTemplate, setSelectedTemplate] = useState(null); // State to hold the selected resume template
  const [selectedCvTemplate, setSelectedCvTemplate] = useState(null); // State to hold the selected CV template

  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <main className="content">
                <section className="hero">
                  <div className="hero-text slide-in">
                    <h1 id="head">CREATE JOB-WINNING RESUMES IN MINUTES</h1>
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

          {/* Signup Page */}
          <Route path="/signup" element={<Signup />} />

          {/* Home Page */}
          <Route path="/home" element={<HomePage />} />

          {/* Template Selector Page (for Resume) */}
          <Route
            path="/templateselector"
            element={<Templateselector onSelectTemplate={setSelectedTemplate} />}
          />

          {/* CV Template Selector Page */}
          <Route
            path="/cvtemplateselector"
            element={<CvTemplateSelector onSelectTemplate={setSelectedCvTemplate} />}
          />

          {/* Personal Info Page for Resume */}
          <Route
            path="/personal-info"
            element={
              selectedTemplate ? (
                <Personalinfo selectedTemplate={selectedTemplate} />
              ) : (
                <div className="no-template-selected">
                  <h2>Please select a template first!</h2>
                  <button
                    onClick={() => (window.location.href = "/templateselector")}
                  >
                    Go to Template Selector
                  </button>
                </div>
              )
            }
          />

          {/* CV Maker Page */}
          <Route
            path="/cv-maker"
            element={
              selectedCvTemplate ? (
                <Personalinfo selectedTemplate={selectedCvTemplate} />
              ) : (
                <div className="no-template-selected">
                  <h2>Please select a CV template first!</h2>
                  <button
                    onClick={() => (window.location.href = "/cvtemplateselector")}
                  >
                    Go to CV Template Selector
                  </button>
                </div>
              )
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;