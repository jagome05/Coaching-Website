import React, { useEffect, useState, useRef } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { TOKEN_KEY } from "../constants";

export default function Header({ style }) {
  const [userInfo, setUserInfo] = useState({});
  const [showDropdown, setShowDropdown] = useState(false); // State to toggle dropdown
  const loggedIn = localStorage.getItem(TOKEN_KEY);
  const navigate = useNavigate();
  const contact = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

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
    navigate("/");
    window.location.reload();
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      {/* <header class="flex flex-row justify-end items-center gap-4 px-2 bg- z-1"> */}
      <header class={style}>
        <img
          className="logo"
          src="https://www.creativefabrica.com/wp-content/uploads/2021/03/20/Mountain-logo-Design-Graphics-9785421-1-1-580x435.png"
        ></img>
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
        <NavLink onClick={() => scrollToSection(contact)}>Contact</NavLink>
        {loggedIn ? (
          <div className="user-info">
            <button onClick={toggleDropdown}>{userInfo.firstname}</button>
            {showDropdown && ( // Render dropdown if showDropdown is true
              <div className="dropdown-content">
                <NavLink to="/users/profile">Profile</NavLink>
                <br />
                <a href="#" onClick={handleLogout}>
                  Logout
                </a>
              </div>
            )}
          </div>
        ) : (
          <NavLink to="users">Sign Up/Login</NavLink>
        )}
      </header>
    </>
  );
}
