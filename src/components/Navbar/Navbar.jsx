import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/logo-withoutbg.png";
import hamburgerMenu from "../../assets/hamburgerMenu.svg";
import close from "../../assets/close.svg";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    console.log(storedUser);
    if (storedUser) {
      const userObject = JSON.parse(storedUser);
      const { merchant, name } = userObject;

      setLoggedInUser({
        name: name,
        isMerchant: merchant,
      });
    }
  }, [location]);

  console.log(loggedInUser);
  const handleLogoutClick = () => {
    setLoggedInUser(null);
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="w-full innerWidth h-[80px] bg-white border-b">
      <div className="md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center md:px-0 px-4">
        <NavLink to="/">
          <img className="h-20" src={logo} alt="Logo" />
        </NavLink>

        <div className="hidden md:flex items-center">
          <ul className="flex gap-4">
            <li className="font-bold transition duration-150 border-b-8 border-transparent hover:border-purple-500">
              <NavLink to="/products">Products</NavLink>
            </li>
            <li className="font-bold transition duration-150 border-b-8 border-transparent hover:border-purple-500">
              <NavLink to="/orders">Orders</NavLink>
            </li>
            <li className="font-bold transition duration-150 border-b-8 border-transparent hover:border-purple-500">
              <NavLink to="/issues">Issues</NavLink>
            </li>
            <li className="font-bold transition duration-150 border-b-8 border-transparent hover:border-purple-500">
              <NavLink to="/aboutus">About Us</NavLink>
            </li>
          </ul>
        </div>

        <div className="hidden md:flex items-center">
          {loggedInUser ? (
            <>
              {loggedInUser.isMerchant && (
                <button className="px-4 mr-2 py-1 rounded-md bg-[#20B486] text-white font-bold">
                  <NavLink to="/addproduct">Add Product</NavLink>
                </button>
              )}

              <div className="flex flex-row">
                <div className="flex self-center">
                  <p className="font-thin mr-4 text-black">
                    Username:{" "}
                    <span className="font-bold transition duration-150 border-b-4 border-transparent hover:border-red-500">
                      {loggedInUser.name}
                    </span>
                  </p>
                </div>

                <div
                  className="px-4 py-2 rounded-md bg-red-600 text-white font-bold"
                  onClick={handleLogoutClick}
                >
                  Logout
                </div>
              </div>
            </>
          ) : (
            <button className="px-4 py-2 rounded-md bg-[#20B486] text-white font-bold">
              <NavLink to="/signin">Login/Signup</NavLink>
            </button>
          )}
        </div>
        <div className="md:hidden" onClick={() => setToggle(!toggle)}>
          <img src={toggle ? close : hamburgerMenu} alt="Menu Icon" />
        </div>
      </div>

      <div
        className={
          toggle
            ? "absolute z-10 p-4 bg-white w-full px-8 md:hidden border-b flex flex-col items-center"
            : "hidden"
        }
      >
        <ul>
          <li className="w-full text-center">
            <NavLink to="/products">Products</NavLink>
          </li>
          <li className="w-full text-center">
            <NavLink to="/orders">Orders</NavLink>
          </li>
          <li className="w-full text-center">
            <NavLink to="/issues">Issues</NavLink>
          </li>
          <li className="w-full text-center">
            <NavLink to="/aboutus">About Us</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
