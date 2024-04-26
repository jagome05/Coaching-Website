import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import AppLayout from "./pages/AppLayout";
import Home from "./pages/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import UserProfile from "./components/UserProfile";
import Contact from "./components/Contact";
import AboutMe from "./pages/AboutMe"
import Services from "./pages/Services";
import Book from "./pages/Book";
import Resources from "./pages/Resources"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route path="" element={<Home />} />
      <Route path="about-me" element={<AboutMe />} />
      <Route path="services" element={<Services />} />
      <Route path="book" element={<Book />} />
      <Route path="contact" element={<Contact />} />
      <Route path="users">
        <Route path="" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="profile" element={<UserProfile />} />
      </Route>
      <Route path="resource" element={<Resources />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;