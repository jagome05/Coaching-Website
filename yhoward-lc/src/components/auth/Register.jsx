import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TOKEN_KEY } from "../../constants";
import ReCAPTCHA from "react-google-recaptcha";


//TODO put props for parent useState; firstname,lastname,email,password...
//TODO make sure to use object spread syntax to keep updated fields?!?!
function Register() {
  //TODO might have to make another obj to store data --> and then make sure to update to parent (data,setData)
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [emailError, setEmailError] = useState("");
  const recaptchaRef = useRef();
  const nav = useNavigate();
  const reCAPTCHA = process.env.REACT_APP_SITE_KEY;
  console.log(process.env.REACT_APP_SITE_KEY);

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

  return (

    <div className="register-container">
      <div className="register-box">
        <h3>Register</h3>
        {registrationSuccess && (
          <p className="success-message">Registration Successful!</p>
        )}
        <form onSubmit={handleRegister}>
          <input
            required
            autoFocus
            className="global-input"
            type="text"
            name="firstname"
            placeholder="First Name"
            value={firstname}
            //TODO so for example try: setFirstName({...person, firstName: e.target.value})
            //TODO or make a fxn to help with it?!!?
            onChange={(e) => setFirstName(e.target.value)}
          />
          <br />
          <input
            required
            className="global-input"
            type="text"
            name="lastname"
            placeholder="Last Name"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
          />
          <br />
          <input
            required
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
            required
            className="global-input"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
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
          Already a member?{" "}
          <Link className="link-button" to="/users">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
