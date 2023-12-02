import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import hero from "../../assets/hero.jpg";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    password: "",
    repeatPassword: "",
    isMerchant: false,
    merchantCode: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = () => {
    setFormData({
      ...formData,
      isMerchant: !formData.isMerchant,
    });
  };

  const handleSignup = () => {
    console.log("Signup clicked");
    console.log("Form Data:", formData);

    fetch("http://127.0.0.1:8000/receive/register/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("API Response:", data);

        if (data.authenticated) {
          // Signup successful, show success message
          toast.success("Signup successful");
          // You can redirect to the login page or perform other actions on successful signup
        } else {
          // Signup failed, show an error message
          toast.error("Signup failed. Please check your information.");
        }
      })
      .catch((error) => {
        console.error("Error sending signup request:", error);
        // Handle error
        toast.error("An error occurred during signup");
      });
  };

  return (
    <div className="flex items-center justify-center bg-white h-screen overflow-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-2 w-full max-w-screen-xl">
        <div className="hidden sm:block">
          <img className="max-h-full object-cover" src={hero} alt="" />
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
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full bg-gray-800 border-b border-white text-white"
              />
            </div>
            <div className="mb-4">
              <label className="text-white font-light">Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="w-full bg-gray-800 border-b border-white text-white"
              />
            </div>
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
            <div className="mb-4">
              <label className="text-white font-light">Repeat Password</label>
              <input
                type="password"
                name="repeatPassword"
                value={formData.repeatPassword}
                onChange={handleInputChange}
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
                  onChange={handleCheckboxChange}
                />
                <label
                  htmlFor="merchantCheckbox"
                  className="flex items-center cursor-pointer"
                >
                  <span className="relative inline-block w-8 h-4 transition duration-200 ease-in-out bg-gray-600 border-2 border-white rounded-full">
                    <span
                      className={`absolute inline-block w-3 h-3 transition duration-200 ease-in-out transform translate-x-0 ${
                        formData.isMerchant
                          ? "translate-x-full bg-blue-500"
                          : "bg-white"
                      } rounded-full`}
                    />
                  </span>
                  <span className="ml-2 text-white">Merchant</span>
                </label>
              </div>
            </div>
            {formData.isMerchant && (
              <div className="mb-4">
                <label className="text-white font-light">Merchant Code</label>
                <input
                  type="text"
                  name="merchantCode"
                  value={formData.merchantCode}
                  onChange={handleInputChange}
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
