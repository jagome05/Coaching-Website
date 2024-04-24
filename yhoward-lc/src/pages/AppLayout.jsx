import { useRef } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Contact from "../components/Contact"

function AppLayout() {
  const navigate = useNavigate();

  return (
    <>
      <div className="app-layout">
        <header class="flex flex-row justify-end items-center gap-4 px-2 bg-[rgba(58,124,165,0)] z-1">
          <img className="logo" src="https://www.creativefabrica.com/wp-content/uploads/2021/03/20/Mountain-logo-Design-Graphics-9785421-1-1-580x435.png"></img>
          <NavLink to="/" class="text-white no-underline visited:text-white visited:no-underline active:text-white">Home</NavLink>
          <NavLink to="about-me" class="">About Me</NavLink>
          <NavLink to="services" class="">Services</NavLink>
          <NavLink to="book" class="">Book</NavLink>
          <NavLink to="resource" class="">Resources</NavLink>
          {/* <NavLink to="auth">Login</NavLink> */}
        </header>
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