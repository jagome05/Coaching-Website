import react from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

export default function Header({ style }) {

  return (
    <>
      {/* <header class="flex flex-row justify-end items-center gap-4 px-2 bg- z-1"> */}
      <header class={ style }>
        <img className="logo" src="https://www.creativefabrica.com/wp-content/uploads/2021/03/20/Mountain-logo-Design-Graphics-9785421-1-1-580x435.png"></img>
        <NavLink to="/" class="text-white no-underline visited:text-white visited:no-underline active:text-white">Home</NavLink>
        <NavLink to="about-me" class="">About Me</NavLink>
        <NavLink to="services" class="">Services</NavLink>
        <NavLink to="book" class="">Book</NavLink>
        <NavLink to="resource" class="">Resources</NavLink>
        {/* <NavLink to="auth">Login</NavLink> */}
      </header>
    </>
  )
}