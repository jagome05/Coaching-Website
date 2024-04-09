import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";

function AppLayout() {
  const navigate = useNavigate();


  return (
    <div className="app-layout">
      <header>
        <NavLink to="/">Home</NavLink>
        {/* <NavLink to="about-me">About Me</NavLink> */}
        <NavLink to="services">Services</NavLink>
        <NavLink to="contact">Contact</NavLink>
        {/* <NavLink to="auth">Login</NavLink> */}
      </header>
      <br />
      <main>
        <Outlet />
      </main>
      <br />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default AppLayout;