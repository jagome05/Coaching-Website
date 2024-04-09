import "./App.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Home from "./components/Home";
import Services from "./components/Services";
import Contact from "./components/Contact";
// import Login from "./components/auth/Login";
// import Register from "./components/auth/Register";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route path="" element={<Home />} />
      {/* <Route path="about-me" element={<AboutMe />} /> */}
      <Route path="services" element={<Services />} />
      <Route path="contact" element={<Contact />} />
      {/* <Route path="users"> */}
        {/* <Route path="" element={<Login />} /> */}
        {/* <Route path="register" element={<Register />} /> */}
      {/* </Route> */}

    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
