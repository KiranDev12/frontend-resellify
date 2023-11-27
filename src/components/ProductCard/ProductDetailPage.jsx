// ProductDetailPage.jsx

import React from "react";
import { FaStar } from "react-icons/fa";

const ProductDetailPage = ({ product }) => {
  return (
    <div className="product-detail-page">
      <img src={product.product_img} alt={product.product_name} />
      <h2 className="product-name">{product.product_name}</h2>
      <p className="product-desc">{product.product_desc}</p>
      <div className={`category-name category-${product.category_id % 7}`}>
        {product.category_name}
      </div>
      <div className="price-rating-container">
        <div className="price-container">
          <span className="black font-thin text-sm r-price">
            <span style={{ color: "black" }} className="pr-1">
              $
            </span>
            {product.product_price}
          </span>
        </div>
        <div className="rating-container">
          <p className="secondaryText rating-container">
            <FaStar
              className="starIcon text-yellow-500"
              style={{ WebkitTextStroke: "1px black" }}
            />
            <span className="black">{product.product_rating}</span>
          </p>
        </div>
      </div>
      <p className="product-date">Product Date: {product.product_date}</p>
      <p className="product-life">Product Life: {product.product_life} years</p>
      <p className="merchant-id">Merchant ID: {product.merchant_id}</p>
      {/* Add more details as needed */}
      <button className="buyNowButton">Buy Now</button>
    </div>
  );
};

export default ProductDetailPage;
