import { Outlet } from "react-router-dom";
import React from "react";
import Footer from "../components/Footer";
import Book from "../components/Book";
import Contact from "../components/Contact";
import Header from "../components/Header";

function AppLayout() {
  return (
    <div className={"app-layout"}>
      <Header
        style={
          "flex flex-row justify-end items-center gap-4 px-2 bg-[#3A7CA5] border-black border-b-4"
        }
      />
      <main>
        <Outlet />
        <div class="fixed bottom-1 left-2 z-2">
          <Contact />
        </div>
        <Book />
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default AppLayout;
