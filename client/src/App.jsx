import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import LoginPage from "./components/LoginPage"; // Create LoginPage.jsx
import "./App.css";
import HomePage from "./components/HomePage";
import Templates from "./components/Templates";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          {/* Landing Page */}
          <Route
            path="/"
            element={
              <main className="content">
                <section className="hero">
                  <h1>Create Job-Winning Resumes in Minutes</h1>
                  <p>
                    Stand out from the crowd with expertly designed templates.
                    Choose from a variety of modern, professional layouts
                    crafted by career experts. Quickly personalize with
                    pre-filled skills and job-specific phrases.
                  </p>
                  <p>
                    <strong>Get hired faster, smarter, and stress-free.</strong>
                  </p>
                </section>
                <AboutUs />
              </main>
            }
          />

          {/* Login Page */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/personal-info" element={<Templates />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;









