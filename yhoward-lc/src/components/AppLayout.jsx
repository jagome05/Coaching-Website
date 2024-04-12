import { useRef } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";

function AppLayout() {
  const contact = useRef(null);
  const navigate = useNavigate();

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="app-layout">
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="about-me">About Me</NavLink>
        <NavLink to="services">Services</NavLink>
        <NavLink to="book">Book</NavLink>
        <NavLink onClick={() => scrollToSection(contact)}>Contact</NavLink>
        {/* <NavLink to="auth">Login</NavLink> */}
      </header>
      <main className="main-container">
        <Outlet />
      </main>
      <br />
      <footer className="footer" ref={contact}>
        <Footer />
      </footer>
    </div>
  );
}

export default AppLayout;