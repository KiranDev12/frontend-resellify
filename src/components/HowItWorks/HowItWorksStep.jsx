import React from "react";

const HowItWorksStep = ({ image, title, description }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        {/* Circle container with background image */}
        <div className="z-10 flex items-center justify-center mb-6 h-16 w-16 bg-[#20B486] rounded-full overflow-hidden mx-auto">
          <div
            className="z-0 bg-cover bg-center w-full h-full"
            style={{ backgroundImage: `url(${image})` }}
          />
        </div>

        <h3 className="text-lg font-semibold mb-4">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default HowItWorksStep;
