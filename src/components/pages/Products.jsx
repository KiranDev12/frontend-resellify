import React, { useState, useEffect } from "react";
import Product from "./Product";

function Products() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/fetch/products/")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="innerWidth grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {data.map((product) => (
        <Product key={product.product_id} product={product} />
      ))}
    </div>
  );
}

export default Products;
