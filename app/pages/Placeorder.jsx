"use client";

import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { useRouter } from "next/navigation";
import { MapPin, CreditCard, ShoppingCart, Wallet } from "lucide-react";

const PlaceOrder = () => {
  const { products, currency, cart, placeOrder } = useContext(ShopContext);
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    country: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("cod");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const cartData = Array.isArray(cart)
    ? cart.map((it) => ({
        _id: it.productId,
        size: it.size,
        quantity: it.quantity,
      }))
    : [];

  const totalAmount = cartData.reduce((total, item) => {
    const product = products.find((p) => p._id === item._id);
    return total + (product ? product.price * item.quantity : 0);
  }, 0);

  const handlePlaceOrder = () => {
    if (!paymentMethod) {
      alert("⚠️ Please select a payment method!");
      return;
    }

    if (!formData.name || !formData.address || !formData.city) {
      alert("⚠️ Please fill in your delivery details!");
      return;
    }

    // ✅ Save order in context
    placeOrder({
      customer: formData,
      paymentMethod,
      total: totalAmount,
      currency,
      items: cartData.map((item) => ({
        ...item,
        product: products.find((p) => p._id === item._id),
      })),
    });

    alert("🎉 Thanks for ordering from here!");
    router.push("/Orders");
  };

  return (
    <div className="p-8 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <h2 className="text-4xl font-extrabold mb-10 text-gray-900 flex items-center gap-2">
        <ShoppingCart className="w-8 h-8 text-indigo-600" />
        Place Your Order
      </h2>

      <div className="grid md:grid-cols-3 gap-10">
        {/* Address Form */}
        <div className="md:col-span-2 bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <MapPin className="w-6 h-6 text-indigo-600" /> Delivery Address
          </h3>

          <div className="grid sm:grid-cols-2 gap-6">
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" className="p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none" />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" className="p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none" />
            <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Street Address" className="p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none col-span-2" />
            <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" className="p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none" />
            <input type="text" name="zip" value={formData.zip} onChange={handleChange} placeholder="ZIP Code" className="p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none" />
            <input type="text" name="country" value={formData.country} onChange={handleChange} placeholder="Country" className="p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none col-span-2" />
          </div>

          {/* Payment Methods */}
          <div className="mt-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Wallet className="w-6 h-6 text-indigo-600" /> Payment Method
            </h3>

            <div className="space-y-4">
              {[
                { value: "card", label: "Credit / Debit Card", img: "/card.png" },
                { value: "upi", label: "UPI / PayPal", img: "/paypal.png" },
                { value: "cod", label: "Cash on Delivery (COD)", img: "/cod.png" },
              ].map((opt) => (
                <label
                  key={opt.value}
                  className="flex items-center justify-between p-4 border rounded-xl cursor-pointer hover:shadow-md transition"
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="payment"
                      value={opt.value}
                      checked={paymentMethod === opt.value}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-5 h-5 text-indigo-600 focus:ring-indigo-500"
                    />
                    <span className="font-medium text-gray-800">{opt.label}</span>
                  </div>
                  <img src={opt.img} alt={opt.label} className="h-6" />
                </label>
              ))}
            </div>
          </div>

          <button
            onClick={handlePlaceOrder}
            className="mt-10 w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:scale-105 transform transition font-semibold shadow-lg"
          >
            🚀 Place Order
          </button>
        </div>

        {/* Order Summary */}
        <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-gray-200 h-fit">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <CreditCard className="w-6 h-6 text-indigo-600" /> Order Summary
          </h3>

          <div className="space-y-4 max-h-64 overflow-y-auto pr-2">
            {cartData.map((item, index) => {
              const product = products.find((p) => p._id === item._id);
              if (!product) return null;
              return (
                <div key={index} className="flex justify-between items-center bg-gray-50 p-3 rounded-lg border">
                  <div>
                    <h4 className="text-sm font-medium text-gray-800">{product.name}</h4>
                    <p className="text-xs text-gray-500">
                      Size: {item.size} | Qty: {item.quantity}
                    </p>
                  </div>
                  <p className="font-semibold text-gray-900">
                    {currency}
                    {(product.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-6 border-t pt-4 space-y-2 text-gray-700">
            <p className="flex justify-between">
              <span>Subtotal</span>
              <span>
                {currency}
                {totalAmount.toFixed(2)}
              </span>
            </p>
            <p className="flex justify-between">
              <span>Delivery</span>
              <span className="text-green-600 font-medium">Free 🚚</span>
            </p>
            <p className="flex justify-between font-bold text-xl border-t pt-3">
              <span>Total</span>
              <span>
                {currency}
                {totalAmount.toFixed(2)}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Page() {
  return <PlaceOrder />;
}
