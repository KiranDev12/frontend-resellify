import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-gray-800 text-white">
      <div className="container mx-auto p-8">
        <div className="flex justify-between">
          {/* Contact Us */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
            <p>Email: info@example.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
          
          {/* Follow Us */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Horizontal Line */}
        <hr className="my-6 border-t border-gray-600" />

        {/* Copyright */}
        <p className="text-center text-gray-500">
          &copy; 2023 Your Resell Platform. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
