import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import welcome from "../../assets/5098293.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function Signin(props) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to the server for authentication
      const response = await fetch("http://127.0.0.1:8000/receive/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        toast.error("Invalid Credentials");
        return;
      }

      // Authentication successful, parse the response data
      const responseData = await response.json();

      if (responseData.authenticated === false) {
        toast.error("No such account exists ... ");
        return;
      }
      localStorage.clear(); // Corrected line
      localStorage.setItem("user", JSON.stringify(responseData));
      props.onLogin(responseData);
      toast.success("Successful login");
      navigate("/");
    } catch (error) {
      console.error("Error during sign-in:", error);
      toast.error("An error occurred during sign-in");
    }
  };

  return (
    <div className="flex items-center justify-center bg-white h-screen overflow-hidden">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 w-full max-w-screen-xl">
        {/* Hide the image on screens with a width of 864 pixels and below */}
        <div className="hidden sm:block">
          <img className="max-h-full object-cover" src={welcome} alt="" />
        </div>
        <div className="flex items-center justify-center">
          {/* Sign In Form */}
          <form
            className="max-w-[400px] w-full bg-gray-900 p-8 px-8 rounded-lg"
            onSubmit={handleSignIn}
          >
            {/* Sign In Heading */}
            <h2 className="text-white mb-4 text-center font-semibold text-2xl">
              Sign In
            </h2>

            {/* Email/Phone Input */}
            <div className="mb-4">
              <label className="text-white font-light">Email</label>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-gray-800 border-b border-white text-white"
              />
            </div>

            {/* Password Input */}
            <div className="mb-4">
              <label className="text-white font-light">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full bg-gray-800 border-b border-white text-white"
              />
            </div>

            {/* Remember Me Checkbox and Forgot Password Link */}
            <div className="flex items-center justify-between mb-4 font-light">
              <label className="text-white">
                <input type="checkbox" className="mr-2" />
                Remember Me
              </label>
              <p className="text-sm text-white font-normal text-normal no-underline hover:underline hover:text-red-600 cursor-pointer">
                Forgot password?
              </p>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded w-full font-medium hover:bg-blue-800"
            >
              Sign In
            </button>

            {/* Sign Up Link */}
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
