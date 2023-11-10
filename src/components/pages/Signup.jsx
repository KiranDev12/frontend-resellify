import React, { useState } from "react";
import "./Signin.css";
import loginImg from "../../assets/login-img.jpg";
import { NavLink } from "react-router-dom";
function Signup() {
  const [isMerchant, setIsMerchant] = useState(false);
  const [merchantCode, setMerchantCode] = useState("");

  const handleSignup = () => {
    // Implement signup logic here, including handling the merchantCode
    console.log("Signup clicked");
    console.log("Name:", name);
    console.log("Phone Number:", phoneNumber);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Repeat Password:", repeatPassword);
    console.log("Is Merchant:", isMerchant);
    console.log("Merchant Code:", merchantCode);
  };

  return (
    <div className="flex items-center justify-center bg-gray-800 h-screen overflow-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-2 w-full max-w-screen-xl">
        {/* Hide the image on screens with a width of 864 pixels and below */}
        <div className="hidden sm:block">
          <img className="max-h-full object-cover" src={loginImg} alt="" />
        </div>
        <div className="flex items-center justify-center">
          <form className="max-w-[400px] w-full bg-gray-900 p-8 px-8 rounded-lg">
            <h2 className="text-white mb-4 text-center font-semibold text-2xl">
              Sign Up
            </h2>
            <div className="mb-4">
              <label className="text-white font-light">Name</label>
              <input
                type="text"
                className="w-full bg-gray-800 border-b border-white text-white"
              />
            </div>
            <div className="mb-4">
              <label className="text-white font-light">Phone Number</label>
              <input
                type="text"
                className="w-full bg-gray-800 border-b border-white text-white"
              />
            </div>
            <div className="mb-4">
              <label className="text-white font-light">Email</label>
              <input
                type="text"
                className="w-full bg-gray-800 border-b border-white text-white"
              />
            </div>
            <div className="mb-4">
              <label className="text-white font-light">Password</label>
              <input
                type="password"
                className="w-full bg-gray-800 border-b border-white text-white"
              />
            </div>
            <div className="mb-4">
              <label className="text-white font-light">Repeat Password</label>
              <input
                type="password"
                className="w-full bg-gray-800 border-b border-white text-white"
              />
            </div>
            <div className="mb-4">
              <label className="text-white font-light">
                Sign up as a Merchant?
              </label>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="merchantCheckbox"
                  className="hidden"
                  onChange={() => setIsMerchant(!isMerchant)}
                />
                <label
                  htmlFor="merchantCheckbox"
                  className="flex items-center cursor-pointer"
                >
                  <span className="relative inline-block w-8 h-4 transition duration-200 ease-in-out bg-gray-600 border-2 border-white rounded-full">
                    <span
                      className={`absolute inline-block w-3 h-3 transition duration-200 ease-in-out transform translate-x-0 ${
                        isMerchant ? "translate-x-full bg-blue-500" : "bg-white"
                      } rounded-full`}
                    />
                  </span>
                  <span className="ml-2 text-white">Merchant</span>
                </label>
              </div>
            </div>
            {isMerchant && (
              <div className="mb-4">
                <label className="text-white font-light">Merchant Code</label>
                <input
                  type="text"
                  value={merchantCode}
                  onChange={(e) => setMerchantCode(e.target.value)}
                  className="w-full bg-gray-800 border-b border-white text-white"
                />
              </div>
            )}
            <button
              type="button"
              onClick={handleSignup}
              className="bg-blue-600 text-white px-4 py-2 rounded w-full font-medium hover:bg-blue-800"
            >
              Sign Up
            </button>
            <div className="signup">
              <p className="text-white mt-3 font-light text-sm">
                Already have an account?{" "}
                <span className="no-underline hover:underline font-semibold cursor-pointer">
                  <NavLink to="/signin">Sign In</NavLink>
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
