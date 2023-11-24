import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import hero from "../../assets/hero.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
function Signin(props) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [customers, setCustomers] = useState([]);
  const [merchants, setMerchants] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch customer data when the component mounts
    fetch("http://127.0.0.1:8080/fetch/customers/")
      .then((response) => response.json())
      .then((data) => setCustomers(data))
      .catch((error) => console.error("Error fetching customer data:", error));

    // Fetch merchant data when the component mounts
    fetch("http://127.0.0.1:8080/fetch/merchants/")
      .then((response) => response.json())
      .then((data) => setMerchants(data))
      .catch((error) => console.error("Error fetching merchant data:", error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
  
    // Check in both customer and merchant data
    const customer = customers.find(
      (c) => c.customerMail ===formData.email && c.customerPwd === formData.password
    );
  
    const merchant = merchants.find(
      (m) => m.merchantMail === formData.email && m.merchantPwd === formData.password
    );
  
    if (customer || merchant) {
      // Authentication successful, you can redirect or perform other actions
      props.onLogin(customer || merchant);
      toast.success("Successful login")
      navigate("/");
    } else {
      // Authentication failed, show an error message
      toast.error("Invalid Credentials");
    }
  };
  

  return (
    <div className="flex items-center justify-center bg-white h-screen overflow-hidden">
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />

      <div className="grid grid-cols-1 sm:grid-cols-2 w-full max-w-screen-xl">
        {/* Hide the image on screens with a width of 864 pixels and below */}
        <div className="hidden sm:block">
          <img className="max-h-full object-cover" src={hero} alt="" />
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
