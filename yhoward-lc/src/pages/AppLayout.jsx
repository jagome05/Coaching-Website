// TODO: JASON FIX THIS...
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import React, { useEffect, useState, useRef } from "react";
import { TOKEN_KEY } from "../constants";
import Footer from "../components/Footer";
import Freemium from "../components/Freemium";
import Book from "./Book";

function AppLayout() {
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
    navigate("/users"); // Redirect to login page after logout
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className={"app-layout" + (showDropdown ? " expanded-header" : "")}>
      <Freemium />
      <header>
        <img
          className="logo"
          src="https://www.creativefabrica.com/wp-content/uploads/2021/03/20/Mountain-logo-Design-Graphics-9785421-1-1-580x435.png"
          alt="Logo"
        ></img>
        <NavLink to="/">Home</NavLink>
        <NavLink to="about-me">About Me</NavLink>
        <NavLink to="services">Services</NavLink>
        <NavLink to="book">Book</NavLink>
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
      <main className="main-container">
        <Outlet />
      </main>
      <Book />
      <br />
      <footer className="footer" ref={contact}>
        <Footer />
      </footer>
    </div>
  );
}

export default AppLayout;
import { useRef } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Header from "../components/Header";

function AppLayout() {
  const navigate = useNavigate();

  return (
    <>
      <div className="app-layout">
        <Header style={"flex flex-row justify-end items-center gap-4 px-2 bg-[#3A7CA5] border-black border-b-4"}/>
        <main>
          <Outlet />
          <div class="fixed bottom-1 left-2 z-2">
          <Contact />
          </div>
        </main>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default AppLayout;
