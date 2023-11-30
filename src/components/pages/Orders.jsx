import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
const Orders = () => {
  // Dummy data for demonstration
  const { ordersData, setOrdersData } = useState([]);
  const location = useLocation();
  const storedUser = localStorage.getItem("user");
  console.log(storedUser);

  const fetchOrders = async (customerId) => {
    // console.log("Signup clicked");
    // console.log("Form Data:", formData);

    fetch("http://127.0.0.1:8080/receive/corders/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(customerId),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setOrdersData(data);
      })
      .catch((error) => {
        console.error("Error sending signup request:", error);
        // Handle error
      });
  };
  return (
    <div className="container mx-auto mt-8 p-8">
      <h2 className="text-4xl font-extrabold mb-8 text-[#20B486]">
        Your Orders
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-[#20B486] text-white">
              <th className="py-3 px-4 border-b">Order ID</th>
              <th className="py-3 px-4 border-b">Product</th>
              <th className="py-3 px-4 border-b">Merchant</th>
              <th className="py-3 px-4 border-b">Total</th>
              <th className="py-3 px-4 border-b">Status</th>
            </tr>
          </thead>
          <tbody>
            {ordersData.map((order) => (
              <tr key={order.orderId}>
                <td className="py-2 px-4 border-b text-center">
                  {order.orderId}
                </td>
                <td className="py-2 px-4 border-b text-center">
                  {order.product}
                </td>
                <td className="py-2 px-4 border-b text-center">
                  {order.merchantId}
                </td>
                <td className="py-2 px-4 border-b text-center">
                  {order.total}
                </td>
                <td
                  className={`py-2 px-4 border-b ${getStatusColor(
                    order.status
                  )} text-center`}
                >
                  {order.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const getStatusColor = (status) => {
  switch (status) {
    case "Shipped":
      return "text-[#20B486]"; // Green
    case "Processing":
      return "text-[#FF9900]"; // Orange
    case "Delivered":
      return "text-[#3333CC]"; // Blue
    default:
      return "";
  }
};

export default Orders;
