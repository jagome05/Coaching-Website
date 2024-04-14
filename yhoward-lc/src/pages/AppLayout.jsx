import { useRef } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Freemium from "../components/Freemium";

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
    <>
      <div className="app-layout">
      <Freemium />
        <header>
          <img className="logo" src="https://www.creativefabrica.com/wp-content/uploads/2021/03/20/Mountain-logo-Design-Graphics-9785421-1-1-580x435.png"></img>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about-me">About Me</NavLink>
          <NavLink to="services">Services</NavLink>
          <NavLink to="book">Book</NavLink>
          {/*  // todo fix this lmao */}
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
    </>
  );
}

export default AppLayout;