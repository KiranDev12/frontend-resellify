import React from "react";
import hero from "../../assets/hero.jpg"
function Products() {
  return (
    <div>
      <div className="flexColStart r-card">
        <img src={hero} alt="" />
        <span className="secondaryText r-price">
          <span style={{ color: "orange" }}>$</span>
          <span>900</span>
        </span>
        <span className="primaryText">Jewel</span>
        <div className="span secondaryText">Gold</div>
      </div>
    </div>
  );
}

export default Products;
