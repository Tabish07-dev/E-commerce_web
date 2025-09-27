'use client'

import React, { createContext, useState, useEffect } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;

  // ✅ cart state
  const [cart, setCart] = useState([]);

  // ✅ orders state (jitne orders place honge yahan store honge)
  const [orders, setOrders] = useState([]);

  // ---- Cart functions ----
  const addToCart = (productId, size = null, quantity = 1) => {
    setCart((prev) => {
      const idx = prev.findIndex(
        (it) => it.productId === productId && it.size === size
      );
      if (idx !== -1) {
        const copy = [...prev];
        copy[idx] = { ...copy[idx], quantity: copy[idx].quantity + quantity };
        return copy;
      }
      return [...prev, { productId, size, quantity }];
    });
  };

  const removeFromCart = (productId, size = null) => {
    setCart((prev) => {
      const idx = prev.findIndex(
        (it) => it.productId === productId && it.size === size
      );
      if (idx === -1) return prev;
      const copy = [...prev];
      if (copy[idx].quantity > 1) {
        copy[idx] = { ...copy[idx], quantity: copy[idx].quantity - 1 };
        return copy;
      }
      return copy.filter((_, i) => i !== idx);
    });
  };

  // ---- Place Order function ----
  const placeOrder = (orderData) => {
    const newOrder = {
      id: Date.now().toString(), // unique order id
      date: new Date().toISOString(),
      status: "Processing",
      ...orderData,
    };
    console.log("Placing order:", newOrder); // Debugging log
    setOrders((prev) => {
      const updatedOrders = [...prev, newOrder];
      console.log("Updated orders:", updatedOrders); // Debugging log
      return updatedOrders;
    });
    setCart([]); // ✅ order hone ke baad cart empty
  };

  // ---- LocalStorage (refresh par bhi orders/cart safe rahe) ----
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    const savedOrders = localStorage.getItem("orders");
    if (savedCart) setCart(JSON.parse(savedCart));
    if (savedOrders) setOrders(JSON.parse(savedOrders));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  const value = {
    products,
    currency,
    delivery_fee,
    cart,
    orders,       // ✅ orders context me available
    addToCart,
    removeFromCart,
    placeOrder,   // ✅ placeOrder function available
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
