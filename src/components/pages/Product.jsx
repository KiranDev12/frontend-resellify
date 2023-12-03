import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Product.css";

function Product({ product }) {
  return (
    <div className={`flexColStart r-card flex-column`}>
      <img
        className="mb-2"
        src={product.product_img}
        alt={product.product_name}
      />
      <span className="product-name text-gray-800">{product.product_name}</span>

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
      <div className="seemore hover:underline">
        <Link
          className="text-sm text-gray-700"
          to={`/products/${product.product_id}`}
        >
          See More
        </Link>
      </div>
    </div>
  );
}

export default Product;
