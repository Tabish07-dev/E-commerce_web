"use client"

import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Link from 'next/link'
import Image from 'next/image'

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext)

  return (
    <Link
      href={`/product/${id}`}   // ✅ Next.js Link
      className="text-gray-700 cursor-pointer"
    >
      <div className="overflow-hidden">
        {/* ✅ Next.js Image Optimization */}
        <Image
          src={image[0]}         // first image
          alt={name}
          width={300}
          height={300}
          className="hover:scale-110 transition ease-in-out object-contain"
          // clicking image will follow the Link as before
        />
      </div>

      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className="text-sm font-medium">
        {currency}{price}
      </p>
    </Link>
  )
}

export default ProductItem
