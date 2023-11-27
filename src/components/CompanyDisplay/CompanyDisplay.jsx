import React from "react";
import CompanyLogo1 from "../../assets/hamburgerMenu.svg";
import CompanyLogo2 from "../../assets/close.svg";
import CompanyLogo3 from "../../assets/lock.svg";
// Import more logos as needed
import "./CompanyDetails.css";

const CompanyDetails = () => {
  const companyLogos = [CompanyLogo1, CompanyLogo2, CompanyLogo3]; // Add more logos as needed

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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {companyLogos.map((logo, index) => (
          <div key={index} className="flex items-center justify-center">
            <img
              src={logo}
              alt={`Company Logo ${index + 1}`}
              className="h-16 object-contain"
            />
          </div>
        ))}
        {/* Add more company logos as needed */}
      </div>
    </div>
  );
};

export default CompanyDetails;
