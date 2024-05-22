import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TOKEN_KEY } from "../../constants";
import ReCAPTCHA from "react-google-recaptcha";


//TODO put props for parent useState; firstname,lastname,email,password...
//TODO make sure to use object spread syntax to keep updated fields?!?!
//these are if we use multiform erg pages { firstname, lastname, email, password, updateField }
function Register() {
  //TODO might have to make another obj to store data --> and then make sure to update to parent (data,setData)
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [emailError, setEmailError] = useState("");
  const nav = useNavigate();
  const recaptchaRef = useRef();
  const reCAPTCHA = process.env.REACT_APP_SITE_KEY;

  const handleRegister = async (e) => {
    e.preventDefault();

    // Email validation regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if email is valid
    //TODO move email
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
              //TODO ERASE AFTER DEMO
            // onChange={(e) => setFirstName(e.target.value)}
            onClick={(e) => setFirstName("Lex")}
          />
          <br />
          <input
            required
            className="global-input"
            type="text"
            name="lastname"
            placeholder="Last Name"
            value={lastname}
              //TODO ERASE AFTER DEMO
            // onChange={(e) => setLastName(e.target.value)}
            onClick={(e) => setLastName("Luthor")}
          />
          <br />
          <input
            required
            className="global-input"
            type="text"
            name="email"
            placeholder="Email Address"
            value={email}
              //TODO ERASE AFTER DEMO
            // onChange={(e) => setEmail(e.target.value)}
            onClick={(e) => setEmail("luthorcorp@gmail.com")}
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
              //TODO ERASE AFTER DEMO
            // onChange={(e) => setPassword(e.target.value)}
            onClick={(e) => setPassword("password")}
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
