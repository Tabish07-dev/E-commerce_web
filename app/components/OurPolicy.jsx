'use client'

import React from 'react'
import { assets } from '../assets/assets'  

const OurPolicy = () => {
  return (
    <div className="text-gray-700 md:text-base sm:text-sm text-xs py-20 
      text-center flex flex-col sm:flex-row justify-around gap-12 sm:gap-2">

     
      <div> 
        <img src={assets.exchange_icon.src} alt="exchange policy" className="w-12 m-auto mb-5" />
        <p className="font-semibold">Easy Exchange</p>
        <p className="text-gray-400">We offer hassle free exchange policy</p>
      </div>

      
      <div>
        <img src={assets.quality_icon.src} alt="return policy" className="w-12 m-auto mb-5" />
        <p className="font-semibold">7 Days Return</p>
        <p className="text-gray-400">Return within 7 days without any problem</p>
      </div>

     
      <div>
        <img src={assets.support_img.src} alt="shipping policy" className="w-12 m-auto mb-5" />
        <p className="font-semibold">Free Shipping</p>
        <p className="text-gray-400">Enjoy free shipping on all orders</p>
      </div>

    </div>
  )
}

export default OurPolicy
