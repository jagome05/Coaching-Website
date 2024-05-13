import { Outlet } from "react-router-dom";
import React from "react";
import Footer from "../components/Footer";
import Book from "../components/Book";
import Contact from "../components/Contact";
import Header from "../components/Header";

//TODO think about breakpoints and mediaqueries

function AppLayout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
        <div class="fixed bottom-1 left-2 z-2">
          <Contact />
        </div>
        <Book />
        <h1 class="sticky bottom-0 -z-1 font-basker text-5xl italic text-blue-400/70 select-none">
          With Grace, Gratitude, and Goodness
        </h1>
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default AppLayout;
