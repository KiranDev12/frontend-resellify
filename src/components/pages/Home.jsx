import React from "react";
import Hero from "../Hero/Hero";
import CompanyDetails from "../CompanyDisplay/CompanyDisplay";
import ProductCard from "../ProductCard/ProductCard";
function Home() {
  
  return (
    <div>
      <Hero />
      <ProductCard />
      <CompanyDetails />
    </div>
  );
}

export default Home;
