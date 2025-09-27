"use client";

import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Package, Truck, CheckCircle, Clock } from "lucide-react";

const statusSteps = [
  { key: "Processing", label: "Processing", icon: Clock, color: "text-yellow-600" },
  { key: "Shipped", label: "Shipped", icon: Truck, color: "text-blue-600" },
  { key: "Delivered", label: "Delivered", icon: CheckCircle, color: "text-green-600" },
];

const OrdersPage = () => {
  const { orders, currency } = useContext(ShopContext);

  if (!orders || orders.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh] text-center">
        <Package className="w-16 h-16 text-gray-400 mb-4" />
        <h2 className="text-2xl font-bold text-gray-700">No Orders Yet</h2>
        <p className="text-gray-500">Place an order and it will appear here 📦</p>
      </div>
    );
  }

  return (
    <div className="p-8 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <h2 className="text-4xl font-extrabold mb-10 text-gray-900 flex items-center gap-2">
        <Package className="w-8 h-8 text-indigo-600" />
        My Orders
      </h2>

      <div className="space-y-8">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-gray-200 p-6"
          >
           
            <div className="flex flex-wrap justify-between items-center mb-6">
              <div>
                <p className="text-sm text-gray-500">Order ID: {order.id}</p>
                <h3 className="text-xl font-bold text-gray-900">{order.customer?.name}</h3>
                <p className="text-sm text-gray-600">
                  {new Date(order.date).toLocaleString()}
                </p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-indigo-600">
                  {currency}
                  {order.total.toFixed(2)}
                </p>
                <p className="text-sm text-gray-500">
                  Payment: {order.paymentMethod?.toUpperCase()}
                </p>
              </div>
            </div>

            
            <div className="space-y-4 border-t pt-4">
              {order.items.map((item, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center bg-gray-50 p-3 rounded-lg border"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.product?.image}
                      alt={item.product?.name}
                      className="w-16 h-16 rounded-lg object-cover border"
                    />
                    <div>
                      <h4 className="font-medium text-gray-800">{item.product?.name}</h4>
                      <p className="text-xs text-gray-500">
                        Size: {item.size} | Qty: {item.quantity}
                      </p>
                    </div>
                  </div>
                  <p className="font-semibold text-gray-900">
                    {currency}
                    {(item.product?.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>

            
            <div className="mt-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Order Status</h4>
              <div className="flex items-center justify-between">
                {statusSteps.map((step, idx) => {
                  const Icon = step.icon;
                  const currentIndex = statusSteps.findIndex((s) => s.key === order.status);
                  const isCompleted = idx <= currentIndex;

                  return (
                    <div key={step.key} className="flex flex-col items-center flex-1">
                      <div
                        className={`w-10 h-10 flex items-center justify-center rounded-full border-2 ${
                          isCompleted
                            ? "bg-indigo-600 border-indigo-600"
                            : "border-gray-300 bg-white"
                        }`}
                      >
                        <Icon
                          className={`w-5 h-5 ${
                            isCompleted ? "text-white" : "text-gray-400"
                          }`}
                        />
                      </div>
                      <p
                        className={`mt-2 text-sm font-medium ${
                          isCompleted ? step.color : "text-gray-400"
                        }`}
                      >
                        {step.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrdersPage;
