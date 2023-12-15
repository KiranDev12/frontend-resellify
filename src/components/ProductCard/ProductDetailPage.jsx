import React, { useState, useEffect } from "react";
import login from "../../assets/login-img.jpg";
import "./ProductDetailPage.css";
import Review from "../Reviews/Reviews";
import { toast } from "react-toastify";

function ProductDetailPage() {
  const [productDetails, setProductDetails] = useState({
    product_id: 0,
    product_name: "",
    product_desc: "",
    product_date: "",
    product_rating: 0.0,
    product_life: 0,
    product_price: 0,
    product_img: null,
    merchant_id: 0,
    category_id: 0,
    category_name: "",
  });

  const user = localStorage.getItem("user");
  var storedUserObject = JSON.parse(user);
  const { customerid } = storedUserObject;
  const productId = window.location.pathname.split("/").pop();
  const formData = {
    customerid: customerid,
    productid: productId,
  };
  console.log(formData);
  const similarProductsSend = {
    productid: productId,
  };

  //MODEL DATA ENDPOINT
  const similarProducts = fetch("endpoint", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(similarProductsSend),
  });

  console.log(similarProducts);
  // {
  //   {productid, productname, categoryid},
  //   {productid, productname, categoryid},
  //   {productid, productname, categoryid},
  // }

  const handleBuyNow = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to the server for authentication
      const response = await fetch("http://127.0.0.1:8000/receive/orders/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        toast.error("Unsuccessful transaction");
        return;
      }

      // Authentication successful, parse the response data
      const responseData = await response.json();
      const { orderid } = responseData;
      if (orderid != null) {
        console.log("Ordered product successfully");
      }
    } catch (error) {
      console.error("Error during ordering:", error);
      toast.error("An error occurred during ordering");
    }
  };

  useEffect(() => {
    // const productId = window.location.pathname.split("/").pop(); // Extracting product ID from the URL
    console.log(productId);
    fetch(`http://127.0.0.1:8000/fetch/products/`)
      .then((response) => response.json())
      .then((data) => {
        const foundProduct = data.find(
          (product) => product.product_id === parseInt(productId, 10)
        );
        console.log(foundProduct);
        if (foundProduct) {
          setProductDetails({
            product_id: foundProduct.product_id,
            product_name: foundProduct.product_name,
            product_desc: foundProduct.product_desc,
            product_date: foundProduct.product_date,
            product_rating: foundProduct.product_rating,
            product_life: foundProduct.product_life,
            product_price: foundProduct.product_price,
            product_img: foundProduct.product_img,
            merchant_id: foundProduct.merchant_id,
            category_id: foundProduct.category_id,
            category_name: foundProduct.category_name,
          });
        }
      })
      .catch((error) =>
        console.error("Error fetching product details:", error)
      );
  }, []);

  return (
    <div className="innerWidth">
      <div className="flex justify-around mt-10">
        <a
          href="#"
          className="pl-8 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-900"
        >
          <img
            className="mr-10 object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
            src={productDetails.product_img}
            alt=""
          />

          <div className="flex flex-col justify-between p-4 leading-normal">
            <div className="flex justify-between ">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {productDetails.product_name}
              </h5>
              <p className="flex justify-center mb-3 font-normal text-gray-700 dark:text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="yellow"
                  // viewBox="0 0 24 24"
                  // strokeWidth={1.5}
                  // stroke="currentColor"
                  className="w-6 h-6 mr-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
                {productDetails.product_rating}
              </p>
            </div>

            <span className="mb-3 text-sm text-gray-700 dark:text-gray-400">
              Product Id: {productDetails.product_id}
            </span>
            <div className="text-black text-xs mb-2  font-semibold p-1 rounded-md bg-cyan-500 w-fit">
              {productDetails.category_name}
            </div>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {productDetails.product_desc}
            </p>

            <p className="text-gray-200">
              &#8377; {productDetails.product_price}
            </p>
            <p className="text-gray-400">
              Life: {productDetails.product_life} years
            </p>
            <p className="text-gray-400">
              Release Date: {productDetails.product_date}
            </p>
            <button
              onClick={handleBuyNow}
              className="bg-green-600 text-white mt-2 py-2 px-4 rounded-full shadow-md hover:bg-green-700 transition duration-300"
            >
              Buy Now
            </button>
          </div>
        </a>
      </div>

      <Review />
    </div>
  );
}

export default ProductDetailPage;
