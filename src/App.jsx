import React from "react";
import Navbar from "./components/Navbar/Navbar";
// import { Switch } from "@mui/material";
import { Route, Routes, useLocation } from "react-router-dom";
import AboutUs from "./components/pages/AboutUs";
import Issues from "./components/pages/Issues";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import Orders from "./components/pages/Orders";
import Signin from "./components/pages/Signin";
import Signup from "./components/pages/Signup";
function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/signin";
  const isSignupPage = location.pathname === "/signup";
  return (
    <div>
      {!(isLoginPage || isSignupPage) && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/issues" element={<Issues />} />
        <Route path="/products" element={<Products />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
