"use client"

import React, { useContext, useState, useEffect } from "react"
import { ShopContext } from "../context/ShopContext"
import { Trash2, ShoppingBag } from "lucide-react"
import { useRouter } from "next/navigation"

const Cart = () => {
  const router = useRouter()
  const { products, currency, cart, removeFromCart } = useContext(ShopContext)
  const [cartData, setCartData] = useState([])

  const resolveImage = (img) => {
    if (!img) return ""
    if (typeof img === "string") return img
    return img?.src || img?.default || ""
  }

  useEffect(() => {
    const tempData = Array.isArray(cart)
      ? cart.map((it) => ({ _id: it.productId, size: it.size, quantity: it.quantity }))
      : []
    setCartData(tempData)
  }, [cart])

  const totalAmount = cartData.reduce((total, item) => {
    const product = products.find((p) => p._id === item._id)
    return total + (product ? product.price * item.quantity : 0)
  }, 0)

  return (
    <div className="p-8 min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <h2 className="text-4xl font-extrabold mb-10 text-gray-900 flex items-center gap-2">
        <ShoppingBag className="w-8 h-8 text-indigo-600" />
        Your Cart
      </h2>

      {cartData.length === 0 ? (
        <div className="text-center py-20 bg-white/70 backdrop-blur-md shadow-xl rounded-2xl border border-gray-200">
          <p className="text-xl text-gray-500">Your cart is empty 😔</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-10">
          {/* Items */}
          <div className="md:col-span-2 space-y-6">
            {cartData.map((item, index) => {
              const productInfo = products.find((p) => p._id === item._id)

              return (
                <div
                  key={index}
                  className="flex items-center gap-6 bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-md hover:shadow-xl transition-all border border-gray-100"
                >
                  {productInfo ? (
                    <>
                      <img
                        src={resolveImage(productInfo.image?.[0])}
                        alt={productInfo.name}
                        className="w-28 h-28 object-cover rounded-xl border shadow-sm"
                      />
                      <div className="flex flex-col flex-1">
                        <h3 className="text-lg font-semibold text-gray-800">
                          {productInfo.name}
                        </h3>
                        <p className="text-sm text-gray-500">Size: {item.size}</p>
                        <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                        <p className="text-sm mt-1">
                          Price:{" "}
                          <span className="font-medium text-gray-800">
                            {currency}{productInfo.price}
                          </span>
                        </p>
                        <p className="text-base font-bold text-indigo-600 mt-1">
                          Subtotal: {currency}{(productInfo.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item._id, item.size)}
                        className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-all flex items-center gap-1"
                      >
                        <Trash2 className="w-4 h-4" /> Remove
                      </button>
                    </>
                  ) : (
                    <p className="text-red-500">Product info not available</p>
                  )}
                </div>
              )
            })}
          </div>

          {/* Summary */}
          <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl h-fit border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h3>
            <div className="space-y-3 text-gray-700">
              <p className="flex justify-between">
                <span>Subtotal</span>
                <span>{currency}{totalAmount.toFixed(2)}</span>
              </p>
              <p className="flex justify-between">
                <span>Delivery</span>
                <span className="text-green-600 font-medium">Free 🚚</span>
              </p>
              <p className="flex justify-between font-bold text-xl border-t pt-3">
                <span>Total</span>
                <span>{currency}{totalAmount.toFixed(2)}</span>
              </p>
            </div>
            <button
              onClick={() => router.push("/Placeorder")}
              className="w-full mt-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:scale-105 transform transition font-semibold shadow-lg"
            >
              ✅ Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart
