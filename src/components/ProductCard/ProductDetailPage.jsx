import React from "react";
import login from "../../assets/login-img.jpg";
import './ProductDetailPage.css'
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
    <div className="flex flex-row w-full h-max justify-around">
      <div className="left mt-10">
        <img src={login} alt="Product" className="h-auto max-w-md rounded-lg" />
      </div>
      <div className="right p-4 mt-10">
        <h2 className="text-5xl font-bold mb-4">
          {productDetails.product_name}
        </h2>
        <p className="text-xl text-gray-600 mb-4">{productDetails.product_desc}</p>
        <div className={`category-name`}>
          {productDetails.category_name}
        </div>
        <p className="text-gray-600 mb-4">
          Rating: {productDetails.product_rating}
        </p>
        <p className="text-gray-600 mb-4">
          Price: Rs {productDetails.product_price}
        </p>
        <p className="text-gray-600 mb-4">
          Life: {productDetails.product_life} years
        </p>
        <p className="text-gray-600 mb-4">
          Release Date: {productDetails.product_date}
        </p>
        {/* Add more details as needed */}
      </div>
    </div>
  );
}

export default ProductDetailPage;
