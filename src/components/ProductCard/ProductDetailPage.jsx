import React from "react";
import login from "../../assets/login-img.jpg";
import "./ProductDetailPage.css";
import Review from "../Reviews/Reviews";

function ProductDetailPage() {
  const productDetails = {
    product_id: 4134,
    product_name: "Classic Denim Jeans",
    product_desc:
      "Premium over-ear headphones with noise-cancelling technology and exceptional audio quality",
    product_date: "2020-05-12",
    product_rating: 4.7,
    product_life: 2,
    product_price: 2800,
    product_img: null,
    merchant_id: 2620,
    category_id: 3515,
    category_name: "Clothing",
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div className="flex justify-around">
        <img
          src={login}
          alt="Product"
          className="w-auto h-auto max-h-96 rounded-lg shadow-lg"
        />
      </div>
      <div className="m-10 h-fit max-h-fit p-4 md:p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          {productDetails.product_name}
        </h2>
        <span className="product-name text-gray-800">
          Product Id: {productDetails.product_id}
        </span>
        <p className="text-lg text-gray-600 mb-4">
          {productDetails.product_desc}
        </p>
        <div className="text-gray-700 font-semibold mb-4">
          Category: {productDetails.category_name}
        </div>
        <p className="text-gray-700 strmb-4">
          Rating: {productDetails.product_rating}
        </p>
        <p className="text-gray-700 mb-4">
          Price: Rs {productDetails.product_price}
        </p>
        <p className="text-gray-700 mb-4">
          Life: {productDetails.product_life} years
        </p>
        <p className="text-gray-700 mb-4">
          Release Date: {productDetails.product_date}
        </p>
        {/* Add more details as needed */}
        <button className="bg-[#20B486] text-white py-2 px-4 rounded-full shadow-md hover:bg-green-600 transition duration-300">
          Add to Cart
        </button>
        <Review />
      </div>
    </div>
  );
}

export default ProductDetailPage;
