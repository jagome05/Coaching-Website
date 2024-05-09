<<<<<<< HEAD
import React, { useEffect, useState, useRef } from "react";
import { NavLink, Outlet, useNavigate, useLocation } from "react-router-dom";
import { TOKEN_KEY } from "../constants";
import Logo from "../image/Logo.png";

const Header = () => {
  const location = useLocation();
=======
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { TOKEN_KEY } from "../constants";
import Logo from "../image/Logo.png";


export default function Header({ style }) {

>>>>>>> 356a20b8b1b2953c5f18c9b6efecd940f02afdda
  const [userInfo, setUserInfo] = useState({});
  const [showDropdown, setShowDropdown] = useState(false);
  const loggedIn = localStorage.getItem(TOKEN_KEY);
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedIn) {
      const user = JSON.parse(localStorage.getItem("user"));
      setUserInfo(user);
    } else {
      setUserInfo({});
    }
  }, [loggedIn]);

  const handleLogout = () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem("user");
    localStorage.removeItem("goals");
    navigate("/users"); // Redirect to login page after logout
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const navLinks = (
    <>
<<<<<<< HEAD
      <NavLink to="/" className="text-white no-underline">
        Home
      </NavLink>
      <NavLink to="/about-me" className="text-white no-underline">
        About Me
      </NavLink>
      <NavLink to="/services" className="text-white no-underline">
        Services
      </NavLink>
      <NavLink to="/resource" className="text-white no-underline">
        Resources
      </NavLink>
=======
      {/* <header class="flex flex-row justify-end items-center gap-4 px-2 bg- z-1"> */}
      <header class={style}>
        <img className="logo" src={Logo} alt="Site Logo"></img>
        <NavLink
          to="/"
          class="text-white no-underline visited:text-white visited:no-underline active:text-white"
        >
          Home
        </NavLink>
        <NavLink to="about-me" class="">
          About Me
        </NavLink>
        <NavLink to="services" class="">
          Services
        </NavLink>
        <NavLink to="resource" class="">
          Resources
        </NavLink>
        <NavLink to="testing">Testing</NavLink>
        {loggedIn ? (
          <a className="user-info">
            <button onClick={toggleDropdown}>{userInfo.firstname}</button>
            {showDropdown && ( // Render dropdown if showDropdown is true
              <div className="dropdown-content">
                {userInfo.isAdmin ? (
                  <NavLink to="/users/profile">Admin Center</NavLink> // Link to the admin center for admins
                ) : (
                  <NavLink to="/users/profile">Profile</NavLink> // Link to the profile for regular users
                )}
                <br />
                <a href="#" onClick={handleLogout}>
                  Logout
                </a>
              </div>
            )}
          </a>
        ) : (
          <NavLink to="users">Sign Up/Login</NavLink>
        )}
      </header>
>>>>>>> 356a20b8b1b2953c5f18c9b6efecd940f02afdda
    </>
  );

  const logoStyle =
    location.pathname === "/"
      ? { position: "absolute", left: 0, top: "-7em", width: "320px" }
      : { position: "absolute", left: 0, top: "-3em", width: "200px" };

  const homeHeaderStyle =
    "absolute top-[5%] w-full flex flex-row justify-end items-center px-2 z-10";
  const otherPagesHeaderStyle =
    "absolute top-0 h-[14%] w-full flex flex-row justify-end items-center px-2 bg-[#3A7CA5] border-b-4";

  const headerStyle =
    location.pathname === "/" ? homeHeaderStyle : otherPagesHeaderStyle;

  return (
    <>
      <header className={headerStyle}>
        <img className="logo" src={Logo} alt="Site Logo" style={logoStyle} />
        <div className="flex-1 flex justify-end gap-4">
          {navLinks}
          {loggedIn ? (
            <div style={{ position: "relative" }}>
              <button className="user-button" onClick={toggleDropdown}>
                {userInfo.firstname}
              </button>
              {showDropdown && (
                <div
                  className="dropdown-content"
                  style={{ position: "absolute", right: 0, zIndex: 1000 }}
                >
                  <NavLink to="/users/profile">Profile</NavLink>
                  <br />
                  <a href="#" onClick={handleLogout}>
                    Logout
                  </a>
                </div>
              )}
            </div>
          ) : (
            <NavLink to="/users">Sign Up/Login</NavLink>
          )}
        </div>
      </header>

      {location.pathname === "/" && (
        <div className="relative h-[107vh]">
          {" "}
          <video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover brightness-120"
          >
            <source
              src="https://cdn.pixabay.com/video/2019/09/13/26830-361092105_large.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      )}
    </>
  );
};

export default Header;
