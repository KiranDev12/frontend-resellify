import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const Orders = () => {
  const [ordersData, setOrdersData] = useState([]);
  const location = useLocation();
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const { customerid, merchantid, merchant } = storedUser;
  let endpoint, formData;
  const navigate = useNavigate();
  if (merchant == false) {
    formData = {
      customerid: customerid,
    };
    endpoint = "http://127.0.0.1:8000/receive/corders/";
  } else {
    formData = {
      merchantid: merchantid,
    };
    endpoint = "http://127.0.0.1:8000/receive/morders/";
  }
  const status = "Shipped";
  const fetchOrders = async (customerId) => {
    fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData), // Assuming your API expects an object with a property "customerid"
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
    <div className="container innerWidth mx-auto mt-8 p-8">
      <h2 className="text-4xl font-extrabold mb-8 text-[#20B486]">
        Your Orders
      </h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-[#20B486] text-white">
              <th className="py-3 px-4 border-b">Order ID</th>
              <th className="py-3 px-4 border-b">Product</th>
              <th className="py-3 px-4 border-b">
                {!merchant ? <div>Merchant</div> : <div>Customer Name</div>}
              </th>
              <th className="py-3 px-4 border-b">Price</th>
              <th className="py-3 px-4 border-b">Status</th>
            </tr>
          </thead>
          <tbody>
            {ordersData.map((order) => (
              <tr key={order.orderid}>
                <td className="py-2 px-4 border-b text-center">
                  {order.orderid}
                </td>
                <td className="py-2 px-4 border-b text-center">
                  {!merchant ? order.productName : order.ProductName}
                </td>
                <td className="py-2 px-4 border-b text-center">
                  {!merchant ? order.merchantId : order.customerName}
                </td>
                <td className="py-2 px-4 border-b text-center">
                  {!merchant ? order.productPrice : order.Price}
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
