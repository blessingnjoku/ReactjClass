import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "../src/pages/Homepage";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Signout from "./pages/Auth/Signout";
import Signup from "./pages/Auth/Signup";
import Blog from "./pages/Blog";
// import Login from "./pages/Login";
// import Logout from "./pages/Logout";
import Notfound from "./pages/Notfound";
// import Profle from "./pages/Profle";
// import Register from "./pages/Register";
// import User from "./pages/User";
import Footer from "./pages/Footer";
import Profile from "./pages/Profile";
import Useeffect from "./pages/FunctionComponent/UseeffectTest";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signout" element={<Signout />} />
        <Route path="/" element={<Notfound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
