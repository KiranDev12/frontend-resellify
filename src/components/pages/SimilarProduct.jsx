import React from "react";

const SimilarProduct = ({ productName, productImg, category }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg mb-4">
      <img
        className="w-full h-auto object-cover"
        src={productImg}
        alt={productName}
      />
      <div className="px-6 py-4">
        <div className="primaryText mb-2">{productName}</div>
        <p className="bg-blue-500 w-fit p-1 text-white rounded-lg">{category}</p>
      </div>
    </div>
  );
};

export default SimilarProduct;
