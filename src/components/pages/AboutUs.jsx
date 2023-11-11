import React from "react";
import { Link } from "react-router-dom";
import hero from "../../assets/hero.jpg"; // Import your custom image

const AboutUs = () => {
  return (
    <div className="container mx-auto mt-16 p-8 text-center">
      
      <img
        src={hero}
        alt="Resellify Logo"
        className="h-60 mx-auto mb-8"
      />

      <h2 className="text-4xl font-extrabold mb-6 text-[#20B486]">
        Welcome to Resellify
      </h2>

      <p className="text-lg mb-4">
        At Resellify, we're on a mission to revolutionize reselling. With access
        to 5,000+ products from 300+ certified merchants, we're shaping the
        future of online marketplaces.
      </p>

      <p className="text-lg mb-4">
        Your Stuff, Your Store: Resellify is the Next-Gen Marketplace designed
        for resellers of all levels. Whether you're just starting or an
        experienced seller, we provide the tools and platform you need to
        succeed.
      </p>

      <p className="text-lg mb-4">
        Explore a curated selection of high-quality products and create a
        personalized store that reflects your style. Join us in redefining the
        reselling experience.
      </p>

      <p className="text-lg mb-4">
        Experience convenience, variety, and innovation like never before. Your
        journey with Resellify starts here.
      </p>

      <div className="flex justify-center mt-8">
        <Link
          to="/signup"
          className="bg-[#20B486] text-white px-8 py-3 rounded-md text-lg font-bold hover:bg-[#0F8740] transition"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
