import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./LoginPage.css";

function LoginPage() {
  const navigate = useNavigate(); // Hook to navigate between routes

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log("Form Submitted"); 
    navigate("/home");
  };
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-box">
        <h1>Welcome Back!</h1>
          <h3>Please log in to your account.</h3>
          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />

            <label>Password</label>
            <input type="password" placeholder="Enter your password" />

            <div className="options">
              <a href="/forgot-password">Forgot Password?</a>
              <a href="/signup">Sign Up</a>
            </div>

            <button className="sign-in" type="submit">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;







