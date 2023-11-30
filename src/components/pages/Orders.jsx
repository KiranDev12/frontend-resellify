import React from "react";

const Orders = () => {
  // Dummy data for demonstration
  const ordersData = [
    {
      orderId: "OD123",
      product: "Laptop",
      merchantId: 2,
      total: "$2000",
      status: "Shipped",
    },
    {
      orderId: "OD124",
      product: "Smartphone",
      merchantId: 1,
      total: "$800",
      status: "Processing",
    },
    {
      orderId: "OD125",
      product: "Headphones",
      merchantId: 3,
      total: "$150",
      status: "Delivered",
    },
    // Add more dummy data as needed
  ];

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
