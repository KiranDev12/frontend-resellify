import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
const Orders = () => {
  const [ordersData, setOrdersData] = useState([]);
  const location = useLocation();
  const storedUser = JSON.parse(localStorage.getItem("user"));
  console.log(storedUser);
  const customerid = storedUser.customerid; // Assuming the property name is "customerid"
  const status = "Shipped";
  const fetchOrders = async (customerId) => {
    fetch("http://127.0.0.1:8000/receive/corders/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ customerid: customerId }), // Assuming your API expects an object with a property "customerid"
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
    console.log(ordersData);
  };

  useEffect(() => {
    // Fetch orders when the component mounts
    fetchOrders(customerid);
  }, [customerid]);
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
                  {order.orderid}
                </td>
                <td className="py-2 px-4 border-b text-center">
                  {order.productName}
                </td>
                <td className="py-2 px-4 border-b text-center">
                  {order.merchantid}
                </td>
                <td className="py-2 px-4 border-b text-center">
                  {order.productPrice}
                </td>
                <td
                  className={`py-2 px-4 border-b ${getStatusColor(
                    status
                  )} text-center`}
                >
                  {status}
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
