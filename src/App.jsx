import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import AboutUs from "./components/pages/AboutUs";
import Issues from "./components/pages/Issues";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import Orders from "./components/pages/Orders";
import Login from "./components/pages/Login";

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login-signup";

  return (
    <div>
      {!isLoginPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/issues" element={<Issues />} />
        <Route path="/products" element={<Products />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/login-signup" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
