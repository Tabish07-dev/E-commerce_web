"use client";

import React, { useState } from "react";
import { Mail, Lock, User } from "lucide-react";

const Login = () => {
  const [currentState, setCurrentState] = useState("login");

  const submithandler = (e) => {
    e.preventDefault();
    
    console.log("Form submitted:", currentState);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <form
        onSubmit={submithandler}
        className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 space-y-6 border border-gray-100"
      >
        
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">
            {currentState === "login" ? "Welcome Back 👋" : "Create Account ✨"}
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            {currentState === "login"
              ? "Login to continue shopping"
              : "Sign up and start your journey"}
          </p>
        </div>

        
        {currentState === "signup" && (
          <div className="flex items-center border rounded-lg px-3 py-2 gap-2 focus-within:ring-2 focus-within:ring-gray-300">
            <User className="text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Full Name"
              className="w-full outline-none text-gray-700"
              required
            />
          </div>
        )}

        
        <div className="flex items-center border rounded-lg px-3 py-2 gap-2 focus-within:ring-2 focus-within:ring-gray-300">
          <Mail className="text-gray-400 w-5 h-5" />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full outline-none text-gray-700"
            required
          />
        </div>

       
        <div className="flex items-center border rounded-lg px-3 py-2 gap-2 focus-within:ring-2 focus-within:ring-gray-300">
          <Lock className="text-gray-400 w-5 h-5" />
          <input
            type="password"
            placeholder="Password"
            className="w-full outline-none text-gray-700"
            required
          />
        </div>

        
        <button
          type="submit"
          className="w-full py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition shadow-sm"
        >
          {currentState === "login" ? "Login" : "Sign Up"}
        </button>

        
        <p className="text-center text-sm text-gray-600">
          {currentState === "login" ? (
            <>
              Don’t have an account?{" "}
              <button
                type="button"
                onClick={() => setCurrentState("signup")}
                className="text-gray-900 font-medium hover:underline"
              >
                Sign Up
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                type="button"
                onClick={() => setCurrentState("login")}
                className="text-gray-900 font-medium hover:underline"
              >
                Login
              </button>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
