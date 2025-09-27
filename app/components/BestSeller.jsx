
'use client'

import React, { useEffect, useState, useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import ProductItem from "./Productitem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    if (products && products.length > 0) {
      const bestProducts = products.filter((item) => item.bestseller);
      setBestSeller(bestProducts.slice(0, 5));
    }
  }, [products]);

  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1="BEST" text2="SELLERS" />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 w-3/4 m-auto">
        
{
  bestSeller.map((item, index) => (
    <ProductItem
      key={index}
      id={item._id}
      name={item.name}
      image={item.image}
      price={item.price}
    />
  ))
}
          </div>
      </div>
  );
};

export default BestSeller;
