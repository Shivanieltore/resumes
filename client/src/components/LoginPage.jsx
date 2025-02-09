import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

function LoginPage({ isRegisteringInitially = false }) {
  const [isRegistering, setIsRegistering] = useState(isRegisteringInitially);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isRegistering ? "register" : "login";
    try {
      const response = await fetch(`http://localhost:3001/${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log(
          isRegistering ? "Registration successful" : "Login successful",
          data.message
        );
        if (!isRegistering) {
          localStorage.setItem("token", data.token);
          navigate("/home");
        } else {
          navigate("/login"); // Redirect to login after successful signup
        }
      } else {
        setErrorMessage(data.message);
      }
    } catch (error) {
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








