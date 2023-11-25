import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AboutUs from "./components/pages/AboutUs";
import Issues from "./components/pages/Issues";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import Orders from "./components/pages/Orders";
import Signin from "./components/pages/Signin";
import Signup from "./components/pages/Signup";
import Navbar from "./components/Navbar/Navbar"; // Import Navbar
import UserProfile from "./components/pages/UserProfile";
import AddProduct from "./components/AddProduct/AddProduct";
function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/signin";
  const isSignupPage = location.pathname === "/signup";
  const [loggedInCustomer, setLoggedInCustomer] = useState(null);

  const handleLogin = (customer) => {
    // Set the logged-in customer when authentication is successful
    setLoggedInCustomer(customer);
  };

  return (
    <div>
      {!(isLoginPage || isSignupPage) && (
        <Navbar loggedInCustomer={loggedInCustomer} />
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/issues" element={<Issues />} />
        <Route path="/products" element={<Products />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/signin" element={<Signin onLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/profile"
          element={<UserProfile loggedInCustomer={loggedInCustomer} />}
        />
        <Route path="/addproduct" element={<AddProduct />} />
      </Routes>
    </div>
  );
}

export default App;
