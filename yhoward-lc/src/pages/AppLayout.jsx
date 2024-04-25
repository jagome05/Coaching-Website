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