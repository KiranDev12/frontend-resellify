import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const input = document.getElementById("search-input");
  const searchBtn = document.getElementById("search-btn");

  const expand = () => {
    searchBtn.classList.toggle("close");
    input.classList.toggle("square");
  };

  return (
    <nav>
      <Link to="/" className="title">
        <img src={logo}></img>
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/products">Products</NavLink>
        </li>
        <li>
          <NavLink to="/orders">Orders</NavLink>
        </li>
        <li>
          <NavLink to="/issues">Issues</NavLink>
        </li>
        <li>
          <NavLink to="/aboutus">About Us</NavLink>
        </li>
        <div className="login-btn">
          <NavLink to="/login-signup">Login</NavLink>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
