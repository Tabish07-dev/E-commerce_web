"use client";

import Image from 'next/image';
import React from "react";
import { Star, Target, HeartHandshake } from "lucide-react";
import { assets } from "../assets/assets"; 

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
     
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden">
          <Image
            src={assets.about_img}
            alt="About Forever"
            fill
            className="absolute inset-0 w-full h-full object-cover"
          />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative text-center text-white px-6">
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Welcome to <span className="text-indigo-400">Forever</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-200">
            A brand built on trust, quality, and timeless fashion. At{" "}
            <span className="font-semibold">Forever</span>, we believe in
            redefining style that stays with you.
          </p>
        </div>
      </section>

   
      <section className="py-16 px-6 sm:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">About Us</h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                <span className="font-semibold text-gray-900">Forever</span> is not
                just a fashion brand; it’s a lifestyle. We are passionate about
                creating designs that are elegant, comfortable, and made for every
                occasion. Our collections are inspired by the idea that fashion
                should be simple yet everlasting.
              </p>

              
              <div className="mt-8 bg-white/60 rounded-lg p-6 inline-block">
                <p className="text-gray-700">
                  I completed this frontend project myself and included a certificate as evidence.
                </p>
                <p className="mt-3 text-sm text-gray-600">
                  The certificate is available at <span className="font-medium">/certificate.png</span> and is shown below.
                </p>
                <div className="mt-4">
                    <Image src={assets.certificate} alt="Project completion certificate" width={360} height={240} className="mx-auto rounded-lg shadow-md" />
                </div>
              </div>
        </div>
      </section>

     
      <section className="bg-white py-16 px-6 sm:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Target className="text-indigo-600 w-7 h-7" /> Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Our mission at <span className="font-semibold">Forever</span> is
              to deliver high-quality, affordable fashion that inspires
              confidence and lasts a lifetime. We aim to make style accessible
              to everyone while staying eco-conscious and customer-first.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={assets.about_img}
                alt="Our Mission"
                width={720}
                height={360}
                className="object-cover w-full h-full"
              />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 sm:px-12 lg:px-20 bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold">Why Choose Forever?</h2>
          <p className="text-gray-600 mt-2">
            Because we don’t just create fashion, we create timeless memories.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition">
            <Star className="w-10 h-10 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Premium Quality</h3>
            <p className="text-gray-600">
              Every Forever product is crafted with the best materials for
              comfort, durability, and unmatched style.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition">
            <Target className="w-10 h-10 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Customer First</h3>
            <p className="text-gray-600">
              At Forever, your happiness is our priority with seamless shopping
              and reliable support.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition">
            <HeartHandshake className="w-10 h-10 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Trusted Brand</h3>
            <p className="text-gray-600">
              Thousands trust <span className="font-semibold">Forever</span> for
              timeless fashion that speaks of elegance and class.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
