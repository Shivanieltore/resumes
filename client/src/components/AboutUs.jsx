import React from "react";
import "./AboutUs.css";
import placeholder1 from "../assets/placeholder1.png";
import placeholder2 from "../assets/placeholder2.png";
import placeholder3 from "../assets/placeholder3.png";

const AboutUs = () => {
  return (
    <section className="about-us">
      <h2>About Us</h2>
      <div className="team">
        <div className="team-member">
          <img src={placeholder1} alt="V. Drithi" />
          <p>V. Drithi</p>
        </div>
        <div className="team-member">
          <img src={placeholder2} alt="E. Shivani" />
          <p>E. Shivani</p>
        </div>
        <div className="team-member">
          <img src={placeholder3} alt="V. Satya Sri" />
          <p>V. Satya Sri</p>
        </div>
      </div>
      <p className="about-description">
        At Profile Perfect, our vision is to empower job seekers with tools that
        transform their career aspirations into reality. We believe that everyone
        deserves the opportunity to present their best self, and it starts with a
        resume that truly stands out.
      </p>
      <p className="about-mission">
        <strong>Let's build success, one resume at a time.</strong>
      </p>
    </section>
  );
};

export default AboutUs;
