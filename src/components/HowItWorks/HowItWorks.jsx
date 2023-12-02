import React from "react";
import HowItWorksStep from "./HowItWorksStep"; // Create a separate component for each step

// Import your images for each step
import RegisterImage from "../../assets/register.png";
import Explore from "../../assets/explore.png";
import ConnectWithBuyersImage from "../../assets/community.png";
import CompleteTransactionImage from "../../assets/lending.png";

const HowItWorks = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-8 text-[#20B486]">
          How It Works
        </h2>
        <div className="flex flex-wrap justify-center">
          {/* Step 1: Register */}
          <HowItWorksStep
            image={RegisterImage}
            title="Register an Account"
            description="Sign up for a free account on our platform. It only takes a few minutes to get started."
          />

          {/* Step 2: List Your Items */}
          <HowItWorksStep
            image={Explore}
            title="List Your Items"
            description="Create listings for the items you want to resell. Include details, images, and set your price."
          />

          {/* Step 3: Connect with Buyers */}
          <HowItWorksStep
            image={ConnectWithBuyersImage}
            title="Connect with Buyers"
            description="Communicate with merchants, negotiate prices, and finalize the sale details"
          />

          {/* Step 4: Complete the Transaction */}
          <HowItWorksStep
            image={CompleteTransactionImage}
            title="Complete the Transaction"
            description="Once you and the buyer agree, complete the transaction through our secure gateway."
          />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
