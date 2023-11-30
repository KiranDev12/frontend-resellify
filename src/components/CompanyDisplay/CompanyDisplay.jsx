import React, { useState, useEffect } from "react";
import aveva from "../../assets/aveva.svg";
import abu from "../../assets/Abu-Dhabi-Investment-Authority.svg";
import union from "../../assets/union-plus-free-college-benefit-logo.svg";
import ontapart from "../../assets/Ontraport.svg";
import orvis from "../../assets/Orvis-Retail.png";
import halo from "../../assets/halo.svg";
import jumbo from "../../assets/Jumbo-Collection.svg";
import "./CompanyDetails.css";

const CompanyDetails = () => {
  const allCompanyLogos = [aveva, union, abu, ontapart, orvis, halo, jumbo];
  const [companyLogos, setCompanyLogos] = useState([]);

  useEffect(() => {
    // Display only 4 logos at a time
    const interval = setInterval(() => {
      const startIndex = Math.floor(
        Math.random() * (allCompanyLogos.length - 4)
      );
      const visibleLogos = allCompanyLogos.slice(startIndex, startIndex + 4);
      setCompanyLogos(visibleLogos);
    }, 3000); // Rotate logos every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container innerWidth mx-auto mb-10 mt-12 p-8">
      <h2 className="text-4xl font-extrabold mb-6 text-[#20B486]">
        Companies Associated with Us
      </h2>

      <p className="py-2 text-gray-600 text-lg mb-8">
        We take pride in our strong relationships with leading companies and
        brands. These valued partnerships enable us to offer a diverse range of
        high-quality products to our customers. Discover the trusted names
        associated with our resell platform:
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-8">
        {companyLogos.map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center p-4 bg-white rounded-full shadow-md logo-rotate"
          >
            <img
              src={logo}
              alt={`Company Logo ${index + 1}`}
              className="h-16 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyDetails;
