import React from "react";
import "./Signin.css";
import loginImg from "../../assets/login-img.jpg";
import hero from "../../assets/hero.jpg";
import buy from "../../assets/buy.jpg";
import { NavLink } from "react-router-dom";
function Signin() {
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
              Sign In
            </h2>
            <div className="mb-4">
              <label className="text-white font-light">Phone No./Email</label>
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
            <div className="flex items-center justify-between mb-4 font-light">
              <label className="text-white">
                <input type="checkbox" className="mr-2" />
                Remember Me
              </label>
              <p className="text-sm text-white font-normal text-normal no-underline hover:underline hover:text-red-600 cursor-pointer">
                Forgot password?
              </p>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded w-full font-medium hover:bg-blue-800">
              Sign In
            </button>
            <div className="signup">
              <p className="text-white mt-3 font-light text-sm">
                Haven't created an account yet?{" "}
                <span className="no-underline hover:underline font-semibold cursor-pointer">
                  <NavLink to="/signup">Sign Up</NavLink>
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signin;
