import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false); // Toggle between login and registration
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    console.log("Email:", email);
    console.log("Password:", password);
  
    try {
      const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
  
      console.log("API Response:", data); // Log the backend response
  
      if (response.ok) {
        console.log("Login successful:", data.message);
        localStorage.setItem("token", data.token); // Assuming token is returned
        navigate("/home");
      } else {
        console.log("Error data:", data);
        setErrorMessage(data.message); // Display the error message
      }
    } catch (error) {
      console.error("Error occurred during login:", error);
      setErrorMessage("An error occurred. Please try again.");
    }
  };  

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-box">
          <h1>{isRegistering ? "Create an Account" : "Welcome Back!"}</h1>
          <h3>{isRegistering ? "Sign up to get started." : "Log in to your account."}</h3>

          {errorMessage && <div className="error-message">{errorMessage}</div>}

          <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />

            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />

            <button className="sign-in" type="submit">
              {isRegistering ? "Sign Up" : "Sign In"}
            </button>
          </form>

          <div className="toggle-mode">
            {isRegistering ? (
              <p>
                Already have an account?{" "}
                <span onClick={() => setIsRegistering(false)}>Log in</span>
              </p>
            ) : (
              <p>
                New here?{" "}
                <span onClick={() => setIsRegistering(true)}>Sign up</span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;






