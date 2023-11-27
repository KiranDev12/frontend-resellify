import React from "react";

const SocialMediaInter = () => {
  return (
    <div className="bg-gray-200 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-8 text-[#20B486]">
          Follow Us on Social Media
        </h2>
        <div className="flex justify-center space-x-6">
          {/* Social Media Icons with Links */}
          <a
            href="https://www.facebook.com/your-page"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/facebook-icon.png" // Replace with your Facebook icon image
              alt="Facebook"
              className="h-12 w-12"
            />
          </a>

          <a
            href="https://twitter.com/your-handle"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/twitter-icon.png" // Replace with your Twitter icon image
              alt="Twitter"
              className="h-12 w-12"
            />
          </a>

          <a
            href="https://www.instagram.com/your-account"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/instagram-icon.png" // Replace with your Instagram icon image
              alt="Instagram"
              className="h-12 w-12"
            />
          </a>

          {/* Add more social media icons as needed */}
        </div>
      </div>
    </div>
  );
};

export default SocialMediaInter;
