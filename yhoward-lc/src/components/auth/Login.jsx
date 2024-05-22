import React from "react";
import { useState } from "react";
import { TOKEN_KEY } from "../../constants";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [invalid, setInvalid] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    fetch("http://localhost:4000/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.token) {
          let user = res.foundUser;
          console.log("Token received:", res.token, user);
          localStorage.setItem(TOKEN_KEY, res.token);
          localStorage.setItem("user", JSON.stringify(user));
          navigate("/");
          // Refresh the page
          window.location.reload();
        } else {
          setInvalid(true);
        }
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Login</h1>
        <input
          className="global-input"
          type="text"
          name="email"
          placeholder="Email address"
          value={email}
          // onChange={(e) => {
          //   setEmail(e.target.value);
          // }}
          //! ERASE AFTER DEMO
          onClick={(e) => setEmail("ysh@timelesscoach-consult.com")}
        />
        <br />
        <input
          className="global-input"
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          // onChange={(e) => {
          //   setPassword(e.target.value);
          // }}
          // onKeyDown={(e) => {
          //   if (e.key === "Enter") {
          //     handleLogin();
          //   }
          // }}
          //! ERASE AFTER DEMO
          onClick={(e) => setPassword("admin123")}
        />
        {invalid && <span className="warning">Invalid password</span>}
        <br />
        <button className="global-button" onClick={handleLogin}>
          Login
        </button>

        <div>
          New to the site?{" "}
          <Link className="link-button" to="register">
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
