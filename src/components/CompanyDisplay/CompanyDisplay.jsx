import React from "react";
import CompanyLogo1 from "../../assets/hamburgerMenu.svg"; // Import your company logos
import CompanyLogo2 from "../../assets/close.svg";
import CompanyLogo3 from "../../assets/lock.svg";
// ... Import more logos as needed
import './CompanyDetails.css'
const CompanyDetails = () => {
  return (
    <div className="container mx-auto mt-12 p-8">
      <h2 className="text-4xl font-extrabold mb-6 text-[#20B486]">
        Companies Associated with Us
      </h2>

      <p className="text-lg mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec massa
        quis augue vestibulum dapibus. Nulla facilisi. Proin vehicula, tortor ut
        tempor lacinia, nunc nulla mattis justo, nec suscipit arcu metus vel
        turpis. Sed non nisi sed ex feugiat hendrerit. Etiam dapibus risus in
        justo tincidunt, vel dictum neque ullamcorper.
      </p>

      <div className="flex overflow-hidden">
        <div className="marquee">
          <img
            src={CompanyLogo1}
            alt="Company Logo 1"
            className="h-16 object-contain"
          />
          <img
            src={CompanyLogo2}
            alt="Company Logo 2"
            className="h-16 object-contain"
          />
          <img
            src={CompanyLogo3}
            alt="Company Logo 3"
            className="h-16 object-contain"
          />
          {/* Add more company logos as needed */}
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
