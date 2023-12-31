import React, { useState } from "react";
import { useEffect } from "react";
const AddProduct = () => {
  const [productData, setProductData] = useState({
    product_name: "",
    product_desc: "",
    product_date: "",
    product_rating: 0,
    product_life: 0,
    product_price: 0,
    product_img: "",
    merchant_id: "",
    category_name: "Clothing",
  });
  useEffect(() => {
    // Check if user information is stored in local storage
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      const userObject = JSON.parse(storedUser);
      const { merchantid } = userObject;
      const merchant_id = merchantid;
      setProductData({
        ...productData,
        merchant_id,
      });
    }
  }, []);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const convertImageToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result);
      };

      reader.onerror = reject;

      reader.readAsDataURL(file);
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    if (file) {
      convertImageToBase64(file).then((base64String) => {
        console.log(base64String.length);

        setProductData({
          ...productData,
          product_img: base64String,
        });
      });
    }
  };

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log(productData);
    // Validate that product_img is not null
    if (!productData.product_img) {
      console.error("Product image is required.");
      // Handle this case, e.g., show an error message
      return;
    }

    // Make a POST request to the server API endpoint with productData
    fetch("http://127.0.0.1:8000/receive/addproduct/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Product added successfully:", data);
        // Handle success, e.g., show a success message or redirect
      })
      .catch((error) => {
        console.error("Error adding product:", error);
        // Handle error
      });
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-4 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add Product</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-600">Product Name</label>
          <input
            type="text"
            name="product_name"
            value={productData.product_name}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Product Description</label>
          <input
            type="text"
            name="product_desc"
            value={productData.product_desc}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Product Life</label>
          <input
            type="text"
            name="product_life"
            value={productData.product_life}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Product Date</label>
          <input
            type="date"
            name="product_date"
            value={productData.product_date}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Product Price</label>
          <input
            placeholder="Price in rupees"
            type="text"
            name="product_price"
            value={productData.product_price}
            onChange={handlePriceChange} // Use handlePriceChange for price changes
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Add styling for other input fields */}

        <div className="mb-4">
          <label className="block text-gray-600">Category Name</label>
          <select
            name="category_name"
            value={productData.category_name}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          >
            <option value="Clothing">Clothing</option>
            <option value="Beauty & Personal Care">
              Beauty & Personal Care
            </option>
            <option value="Jewelry">Jewelry</option>
            <option value="Health & Wellness">Health & Wellness</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Home & Kitchen">Home & Kitchen</option>
            <option value="Sports & Outdoors">Sports & Outdoors</option>
            <option value="Books">Books</option>
            <option value="Toys & Games">Toys & Games</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-600">Product Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <button
            type="button"
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
