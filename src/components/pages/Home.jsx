import React from "react";
import Hero from "../Hero/Hero";
import CompanyDetails from "../CompanyDisplay/CompanyDisplay";
import ProductCard from "../ProductCard/ProductCard";
import Footer from "../Footer/Footer";
import HowItWorks from "../HowItWorks/HowItWorks";
function Home() {
  return (
    <div>
      <Hero />
      <ProductCard />
      <HowItWorks />
      <CompanyDetails />
      <Footer />
    </div>
  );
}

export default Home;
