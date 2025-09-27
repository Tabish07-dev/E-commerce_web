"use client";

import Image from "next/image";
import Link from "next/link";
import { assets } from "../assets/assets";
import { useState } from "react";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6 font-medium">
        
        {/* Logo */}
        <Link href="/login">
          <Image
            src={assets.logo}
            alt="Logo"
            width={144} // w-36 = 144px
            height={50}
            className="cursor-pointer"
            priority
          />
        </Link>

        {/* Navigation Links (Desktop Only) */}
        <ul className="hidden sm:flex gap-8 text-sm text-gray-700 list-none">
          <li><Link href="/" className="hover:text-black">Home</Link></li>
          <li><Link href="/collection" className="hover:text-black">Collection</Link></li>
          <li><Link href="/about" className="hover:text-black">About</Link></li>
          <li><Link href="/contact" className="hover:text-black">Contact</Link></li>
        </ul>

        {/* Right Section */}
        <div className="flex items-center gap-6">
          {/* Search Icon */}
          <Image
            src={assets.search_icon}
            alt="Search"
            width={20}
            height={20}
            className="cursor-pointer"
          />

          {/* Profile Dropdown */}
          <div className="group relative">
            <Image
              src={assets.profile_icon}
              alt="Profile"
              width={20}
              height={20}
              className="cursor-pointer"
            />

            <div className="hidden group-hover:block absolute right-0 pt-4">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded shadow-md">
                <p className="cursor-pointer hover:text-black">My profile</p>
                <p className="cursor-pointer hover:text-black">Orders</p>
                <p className="cursor-pointer hover:text-black">Logout</p>
              </div>
            </div>
          </div>

          {/* Cart */}
          <Link href="/cart" className="relative">
            <Image
              src={assets.cart_icon}
              alt="Cart"
              width={20}
              height={20}
              className="min-w-5"
            />
            {/* Badge */}
            <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
              3
            </p>
          </Link>

          {/* Hamburger Menu (Mobile Only) */}
          <button onClick={() => setVisible(true)} className="sm:hidden">
            <Image
              src={assets.menu_icon}
              alt="Menu"
              width={20}
              height={20}
              className="cursor-pointer"
            />
          </button>
        </div>
      </div>

      {/* Sidebar for Small Screens */}
      <div
        className={`fixed top-0 right-0 h-full bg-white z-50 transition-all duration-300 ${
          visible ? "w-3/4 max-w-xs shadow-lg" : "w-0"
        } overflow-hidden sm:hidden`}
      >
        {/* Close Button */}
        <div className="flex items-center justify-between p-4 border-b">
          <p className="font-bold">Menu</p>
          <button onClick={() => setVisible(false)}>
            <Image
              src={assets.dropdown_icon}
              alt="Close"
              width={20}
              height={20}
              className="rotate-180"
            />
          </button>
        </div>

        {/* Mobile Nav Links */}
        <ul className="flex flex-col gap-6 text-gray-700 text-base px-6 pt-6">
          <li><Link href="/" onClick={() => setVisible(false)} className="hover:text-black">Home</Link></li>
          <li><Link href="/collection" onClick={() => setVisible(false)} className="hover:text-black">Collection</Link></li>
          <li><Link href="/about" onClick={() => setVisible(false)} className="hover:text-black">About</Link></li>
          <li><Link href="/contact" onClick={() => setVisible(false)} className="hover:text-black">Contact</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
