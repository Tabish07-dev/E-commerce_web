"use client"

import React, { useContext, useEffect, useState } from "react";
import { useParams as useNextParams } from "next/navigation";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";

const Product = ({ productId: productIdProp }) => {
  const nextParams = useNextParams();
  const productId = productIdProp || nextParams?.id;
  const { products } = useContext(ShopContext);

  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [selectedSize, setSelectedSize] = useState(null);
  const { addToCart } = useContext(ShopContext)

  
  const [toast, setToast] = useState({ show: false, message: '' })

  const handleAddToCart = () => {
    if (!productData) return
    addToCart(productData._id, selectedSize || null, 1)
    setToast({ show: true, message: '✅ You have successfully added this into the cart' })
    setTimeout(() => setToast({ show: false, message: '' }), 2500)
  }

  const resolveImage = (img) => {
    if (!img) return "";
    if (typeof img === "string") return img;
    return img?.src || img?.default || "";
  };

  useEffect(() => {
    const item = Array.isArray(products)
      ? products.find((i) => i._id === productId)
      : null;
    if (item) {
      setProductData(item);
      setImage(resolveImage(item.image?.[0]));
    }
  }, [productId, products]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      <div className="flex flex-col lg:flex-row gap-12">
        
       
        <div className="flex-1 flex gap-5">
         
          <div className="hidden sm:flex flex-col gap-3 w-24">
            {productData.image.map((item, index) => (
              <img
                key={index}
                onClick={() => setImage(item)}
                src={item}
                alt=""
                className={`w-full rounded-lg cursor-pointer border transition transform hover:scale-105 ${
                  image === item
                    ? "border-2 border-black shadow-md"
                    : "border-gray-300"
                }`}
              />
            ))}
          </div>

         
          <div className="flex-1">
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img
                className="w-full h-auto object-cover hover:scale-110 transition-transform duration-500"
                src={image}
                alt=""
              />
            </div>
          </div>
        </div>

        
        <div className="flex-1 space-y-6">
          <h1 className="font-extrabold text-3xl sm:text-5xl bg-gradient-to-r from-black via-gray-700 to-black bg-clip-text text-transparent">
            {productData.name}
          </h1>

          
          <div className="flex items-center gap-1">
            {[...Array(4)].map((_, i) => (
              <img key={i} src={assets.star_icon} alt="" className="w-5" />
            ))}
            <img src={assets.star_dull_icon} alt="" className="w-5" />
            <p className="pl-2 text-gray-600 text-sm">(122 reviews)</p>
          </div>

         
          <p className="text-3xl font-bold text-green-600">
            {Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(productData.price)}
          </p>

         
          {productData.sizes && (
            <div>
              <p className="mb-3 font-medium text-lg">Select Size:</p>
              <div className="flex gap-3 flex-wrap">
                {productData.sizes.map((size, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedSize(size)}
                    className={`px-5 py-2 rounded-lg border transition-all ${
                      selectedSize === size
                        ? "bg-black text-white border-black scale-105 shadow-md"
                        : "border-gray-300 hover:bg-gray-100"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

        
          <button onClick={handleAddToCart} className="px-8 py-3 bg-gradient-to-r from-black to-gray-800 text-white rounded-xl hover:opacity-90 transition-transform transform hover:scale-105 shadow-lg">
            🛒 Add to Cart
          </button>

         
          {toast.show && (
            <div className="fixed left-1/2 transform -translate-x-1/2 top-6 z-50">
              <div className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg">
                {toast.message}
              </div>
            </div>
          )}

        
          <div className="bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-lg mt-8 space-y-4">
            <h2 className="text-xl font-bold text-gray-800">About this item</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              {productData.description || "No description available."}
            </p>

          
            <div className="grid grid-cols-2 gap-4 text-sm mt-4">
              <p className="flex items-center gap-2">✅ Cash on Delivery</p>
              <p className="flex items-center gap-2">🔄 7 Days Return Policy</p>
              <p className="flex items-center gap-2">⚡ Fast Delivery</p>
              <p className="flex items-center gap-2">🔒 Secure Payment</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="py-20 text-center text-gray-600">
      <p className="text-lg font-semibold">
        Product not found or still loading
      </p>
    </div>
  );
};

export default Product;
