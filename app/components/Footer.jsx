'use client'

import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <footer className="mt-40">
      {/* Top Section */}
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-10 py-10 w-3/4 m-auto text-sm">
        
        {/* Column 1 */}
        <div>
        <img src="/assets/logo"alt="logo" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
            corrupti facilis excepturi corporis numquam illo rerum fugit
            voluptatem ratione natus sit molestiae nihil? Nemo atque nesciunt
            mollitia molestias voluptatum quis alias assumenda.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <p className="text-xl font-medium mb-5">Company</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <p className="text-xl font-medium mb-5">Get in Touch</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>03133196759...</li>
            <li>Tabisoomro12@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 text-center py-4 text-gray-500 text-sm">
        © {new Date().getFullYear()} Copyright by <span className="font-medium text-black">tabi07</span>
      </div>
    </footer>
  )
}

export default Footer
