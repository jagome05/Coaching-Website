import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TOKEN_KEY } from "../../constants";
import ReCAPTCHA from "react-google-recaptcha";

function Register() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adminCode, setAdminCode] = useState(""); // State for admin code input
  const [isAdmin, setIsAdmin] = useState(false); // State for "isAdmin" status
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [emailError, setEmailError] = useState("");
  const recaptchaRef = useRef();
  const nav = useNavigate();
  const reCAPTCHA = process.env.REACT_APP_SITE_KEY;

  const handleRegister = async (e) => {
    e.preventDefault();

    // Email validation regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if email is valid
    if (!emailPattern.test(email)) {
      setEmailError("Please enter a valid email address");
      return;
    } else {
      setEmailError("");
    }

    const requestBody = {
      firstname,
      lastname,
      email,
      password,
      adminCode,
    };

    try {
      const response = await fetch("http://localhost:4000/users/register", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error("Registration failed");
      }

      const data = await response.json();
      setRegistrationSuccess(true);
      const user = data.newUser;
      localStorage.setItem(TOKEN_KEY, data.token);
      localStorage.setItem("user", JSON.stringify(user));
      setTimeout(() => {
        nav("/");
      }, 3000);
    } catch (error) {
      console.error("Registration error:", error);
      // Handle error (e.g., display error message to the user)
    }
  };

  // Function to handle admin code input change
  const handleAdminCodeChange = (e) => {
    const enteredCode = e.target.value.trim(); // Trim whitespace from entered code
    setAdminCode(enteredCode);
    if (enteredCode === "0524") {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h3>Register</h3>
        {registrationSuccess && (
          <p className="success-message">Registration Successful!</p>
        )}
        <form onSubmit={handleRegister}>
          <input
            className="global-input"
            type="text"
            name="firstname"
            placeholder="First Name"
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <br />
          <input
            className="global-input"
            type="text"
            name="lastname"
            placeholder="Last Name"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
          />
          <br />
          <input
            className="global-input"
            type="text"
            name="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <p className="error-message">{emailError}</p>}
          <br />
          <input
            className="global-input"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <input
            className="global-input"
            type="password"
            name="adminCode"
            placeholder="Admin Code"
            value={adminCode}
            onChange={handleAdminCodeChange} // Call handleAdminCodeChange on change
            style={{ border: isAdmin ? "2px solid green" : "" }} // Change border color if admin code is correct
          />
          {isAdmin && <p style={{ color: "green" }}>Admin code accepted</p>}{" "}
          <ReCAPTCHA
            className="reCaptcha"
            sitekey={reCAPTCHA}
            ref={recaptchaRef}
          />
          <button className="global-button" type="submit">
            Register
          </button>
        </form>
        <div>
          Already a member? <Link to="/users">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
