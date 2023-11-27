// ProductDetailPageRoute.jsx

import React from "react";
import { useParams } from "react-router-dom";
import ProductDetailPage from "./ProductDetailPage";

const ProductDetailPageRoute = () => {
  const { productId } = useParams();

  // Fetch the product details based on productId

  const productDetails = {}; // Replace with actual data fetching logic

  return <ProductDetailPage product={productDetails} />;
};

export default ProductDetailPageRoute;
