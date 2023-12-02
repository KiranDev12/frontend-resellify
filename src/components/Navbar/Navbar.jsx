import React, { useState } from "react";
import logo from "../../assets/logo-withoutbg.png";
import hamburgerMenu from "../../assets/hamburgerMenu.svg";
import close from "../../assets/close.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import resellify from "../../assets/resellify.png";
import { store } from "fontawesome";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [loggedInCustomer, setLoggedInCustomer] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [isMerchant, setIsMerchant] = useState(false);
  useEffect(() => {
    // Check if user information is stored in local storage
    const storedUser = localStorage.getItem("user");
    console.log(storedUser);
    const fetchCustomerDetails = async (customerId) => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/fetch/customers/`);
        if (!response.ok) {
          throw new Error("Failed to fetch customer details");
        }
        const customerDetails = await response.json();
        // console.log(customerDetails);
        setLoggedInCustomer(customerDetails);
      } catch (error) {
        console.error("Error fetching customer details:", error);
      }
    };
    const fetchMerchantDetails = async (merchantId) => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/fetch/merchants/`);
        if (!response.ok) {
          throw new Error("Failed to fetch merchant details");
        }
        const merchantDetails = await response.json();
        // console.log(customerDetails);
        setLoggedInCustomer(merchantDetails);
      } catch (error) {
        console.error("Error fetching customer details:", error);
      }
    };
    console.log(storedUser);
    if (storedUser) {
      const userObject = JSON.parse(storedUser);
      if (storedUser && userObject.merchant != true) {
        console.log(userObject);
        setIsMerchant(false);
        fetchCustomerDetails(userObject.customerId);
      } else {
        console.log(userObject);
        setIsMerchant(true);
        fetchMerchantDetails(userObject.merchantId);
      }
    }
    // if (storedUser && storedUser.merchant == true) {
    //   const userObject = JSON.parse(storedUser);
    //   console.log(userObject);
    //   // const { merchantid } = userObject
    //   fetchCustomerDetails(userObject.customerId);
    // } else if (storedUser) {
    //   const userObject = JSON.parse(storedUser);
    //   console.log(userObject);
    //   const { merchantid } = userObject;
    //   // setIsMerchant(true);
    //   fetchMerchantDetails(merchantid);
    // }
  }, [location]);

  // const handleProfileClick = () => {
  //   navigate("/profile");
  // };
  const handleLogoutClick = () => {
    setLoggedInCustomer(null);
    localStorage.removeItem("user");
    window.location.reload();
  };
  // const formatPascalCase = (name) => {
  //   // Convert the name to PascalCase
  //   return name.replace(/(\w)(\w*)/g, function (g0, g1, g2) {
  //     return g1.toUpperCase() + g2.toLowerCase();
  //   });
  // };
  // console.log(loggedInCustomer[0].merchant);
  console.log(loggedInCustomer);
  return (
    <div className="w-full innerWidth h-[80px] bg-white border-b">
      <div className="md:max-w-[1480px] max-w-[600px] m-auto w-full h-full flex justify-between items-center md:px-0 px-4">
        <NavLink to="/">
          <img className="h-20" src={logo} />
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
          {loggedInCustomer ? (
            <>
              {isMerchant ? (
                <button className="px-4 mr-2 py-1 rounded-md bg-[#20B486] text-white font-bold">
                  <NavLink to="/addproduct">Add Product</NavLink>
                </button>
              ) : (
                <></>
              )}

              <div className="flex flex-row">
                <div className="flex self-center">
                  <p className="font-thin mr-4  text-black">
                    Username:{" "}
                    <span className="font-bold transition duration-150 border-b-4 border-transparent hover:border-red-500">
                      {isMerchant
                        ? loggedInCustomer[0].merchantName
                        : loggedInCustomer[0].customerName}
                    </span>
                  </p>
                </div>

                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    clipRule="evenodd"
                  />
                </svg> */}
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

          <div className="hidden md:flex items-center">
            {loggedInCustomer ? (
              <>
                {isMerchant && ( // Check if loggedInCustomer.merchant is true
                  <button className="px-4 mr-2 py-1 rounded-md bg-[#20B486] text-white font-bold">
                    <NavLink to="/addproduct">Add Product</NavLink>
                  </button>
                )}

                <div className="flex flex-row">
                  <div className="flex self-center">
                    <p className="font-thin mr-4  text-black">
                      Username:{" "}
                      <span className="font-bold transition duration-150 border-b-4 border-transparent hover:border-red-500">
                        {loggedInCustomer[0].customerName}
                      </span>
                    </p>
                  </div>

                  {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    clipRule="evenodd"
                  />
                </svg> */}
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
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
