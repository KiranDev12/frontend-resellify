import React, { useState } from "react";
import logo from "../../assets/logo.png";
import hamburgerMenu from "../../assets/hamburgerMenu.svg";
import close from "../../assets/close.svg";
import { Link, NavLink, useNavigate } from "react-router-dom";
// import {SvgIcon} from "@mui/material/SvgIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Import Font Awesome styles
import "@fortawesome/fontawesome-free/css/all.css";
import AddProduct from "../AddProduct/AddProduct";

const Navbar = ({ loggedInCustomer }) => {
  const [toggle, setToggle] = useState(false);

  const handleHover = {
    borderBottom: "2px solid #20B486", // Change color as per your design
  };
  const Navigate = useNavigate();
  const handleProfileClick = () => {
    // Navigate to the UserProfile component
    Navigate("/profile");
  };
  //   const handleAddClick = () => {
  //     // Navigate to the UserProfile component
  //     Navigate("/addproduct");
  //   };
  return (
    <div className="w-full h-[80px] bg-white border-b">
      {/* navbar for wide screens */}
      <div className="md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center md:px-0 px-4">
        {/* left logo */}
        <NavLink to="/">
          <h1 className="text-2xl font-bold">LOGO</h1>
        </NavLink>
        {/* middle portion */}
        <div className="hidden md:flex items-center">
          <ul className="flex gap-4">
            <li className="font-bold transition duration-150 border-b-8 border-transparent hover:border-purple-500">
              <NavLink to="/products" activeStyle={handleHover}>
                Products
              </NavLink>
            </li>
            <li className="font-bold transition duration-150 border-b-8 border-transparent hover:border-purple-500">
              <NavLink to="/orders" activeStyle={handleHover}>
                Orders
              </NavLink>
            </li>
            <li className="font-bold transition duration-150 border-b-8 border-transparent hover:border-purple-500">
              <NavLink to="/issues" activeStyle={handleHover}>
                Issues
              </NavLink>
            </li>
            <li className="font-bold transition duration-150 border-b-8 border-transparent hover:border-purple-500">
              <NavLink to="/aboutus" activeStyle={handleHover}>
                About Us
              </NavLink>
            </li>
          </ul>
        </div>
        {/* auth and add product portion */}
        <div className="hidden md:flex">
          <>
            <button className="px-4 mr-2 py-1 rounded-md bg-[#20B486] text-white font-bold">
              <NavLink to="/addproduct">Add Product</NavLink>
            </button>
          </>
          {loggedInCustomer ? (
            // Display the customer's name and SvgIcon if logged in
            <>
              <p className="font-bold mr-2">{`${loggedInCustomer.customerName}`}</p>
              <FontAwesomeIcon
                icon={["far", "user"]}
                className="mr-1"
                onClick={handleProfileClick}
                style={{ cursor: "pointer" }}
              />
            </>
          ) : (
            // Display the login/signup button if not logged in
            <button className="px-8 py-3 rounded-md bg-[#20B486] text-white font-bold">
              <NavLink to="/signin">Login/Signup</NavLink>
            </button>
          )}
        </div>

        <div className="md:hidden" onClick={() => setToggle(!toggle)}>
          <img src={toggle ? close : hamburgerMenu} alt="Menu Icon" />
        </div>
      </div>

      {/* for hamburger menu */}
      <div
        className={
          toggle
            ? "absolute z-10 p-4 bg-white w-full px-8 md:hidden border-b flex flex-col items-center"
            : "hidden"
        }
      >
        <ul>
          <div className="hover:bg-blue-200">
            <li className="w-full text-center">
              <NavLink to="/products" activeStyle={handleHover}>
                Products
              </NavLink>
            </li>
          </div>
          <div className="hover:bg-blue-200">
            <li className="w-full text-center">
              <NavLink to="/orders" activeStyle={handleHover}>
                Orders
              </NavLink>
            </li>
          </div>
          <div className="hover:bg-blue-200">
            <li className="w-full text-center">
              <NavLink to="/issues" activeStyle={handleHover}>
                Issues
              </NavLink>
            </li>
          </div>
          <div className="hover:bg-blue-200">
            <li className="w-full text-center">
              <NavLink to="/aboutus" activeStyle={handleHover}>
                About Us
              </NavLink>
            </li>
          </div>

          <li className="w-full text-center">
            {loggedInCustomer ? (
              // Display the customer's name and SvgIcon if logged in
              <>
                <p className="font-bold">{`${loggedInCustomer.customerName}`}</p>
              </>
            ) : (
              // Display the login/signup button if not logged in
              <button className="px-8 py-3 rounded-md bg-[#20B486] text-white font-bold">
                <NavLink to="/signin">Login/Signup</NavLink>
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
