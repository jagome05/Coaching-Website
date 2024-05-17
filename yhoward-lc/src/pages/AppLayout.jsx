import { Outlet } from "react-router-dom";
import React, { useState } from "react";
import Footer from "../components/Footer";
import Book from "../components/Book";
import Header from "../components/Header";
import Contact from "../components/Contact";

//TODO think about breakpoints and mediaqueries

function AppLayout() {
  return (
    //flex flex-row justify-end items-center gap-4 px-2 bg-[#535657] border-black border-b-2
    <div>
      <Header />
      <main>
        <Outlet/>
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
