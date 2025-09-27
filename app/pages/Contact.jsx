"use client";

import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Github,
  Code,
} from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-100 flex items-center justify-center px-6 py-20">
      <div className="max-w-5xl w-full bg-white rounded-3xl shadow-2xl p-10 md:p-14 space-y-12 border border-gray-200 relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute top-0 left-0 w-40 h-40 bg-indigo-200 rounded-full blur-3xl opacity-40 -z-10"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-indigo-300 rounded-full blur-3xl opacity-40 -z-10"></div>

        {/* Header */}
        <div className="text-center space-y-3">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-tight">
            Let’s <span className="text-indigo-600">Connect</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            We’re here to answer any questions. Drop us a line anytime 🚀
          </p>
        </div>

        {/* Contact Info & Form */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Info Left */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <Mail className="w-6 h-6 text-indigo-600 group-hover:scale-110 transition-transform" />
              <span className="text-gray-700 text-lg">tabisoomro12@gmail.com</span>
            </div>
            <div className="flex items-center gap-4 group">
              <Phone className="w-6 h-6 text-indigo-600 group-hover:scale-110 transition-transform" />
              <span className="text-gray-700 text-lg">0313-3196759</span>
            </div>
            <div className="flex items-center gap-4 group">
              <MapPin className="w-6 h-6 text-indigo-600 group-hover:scale-110 transition-transform" />
              <span className="text-gray-700 text-lg">Dadu, Pakistan</span>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 pt-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-indigo-50 hover:bg-indigo-100 text-indigo-600 shadow-sm hover:shadow-md transition"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/Tabish07-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-indigo-50 hover:bg-indigo-100 text-indigo-600 shadow-sm hover:shadow-md transition"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-indigo-50 hover:bg-indigo-100 text-indigo-600 shadow-sm hover:shadow-md transition"
              >
                <Code className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none shadow-sm hover:shadow transition"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none shadow-sm hover:shadow transition"
              required
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none shadow-sm hover:shadow transition"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 text-white font-medium rounded-xl flex items-center justify-center gap-2 hover:bg-indigo-700 transition transform hover:scale-[1.02] shadow-md"
            >
              <Send className="w-5 h-5" />
              Send Message
            </button>
          </form>
        </div>

        {/* Disclaimer */}
        <div className="text-center border-t pt-6 text-sm text-gray-500 leading-relaxed">
          <p>
            ⚠️ This is a{" "}
            <span className="font-semibold text-gray-700">dummy website</span>{" "}
            created purely for{" "}
            <span className="text-indigo-600 font-semibold">
              practice purposes
            </span>
            .  
            I am a dedicated{" "}
            <span className="font-semibold">MERN Stack Developer</span>{" "}
            learning & building modern applications.  
            This page demonstrates my{" "}
            <span className="text-indigo-600 font-semibold">UI/UX & coding
            skills</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
