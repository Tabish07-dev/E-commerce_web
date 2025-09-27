// Wrapper for app/pages/Orders.jsx to expose /orders route in App Router
"use client";

import React from 'react';
import Login from '../pages/Login';


export default function OrdersPage() {
  // Render the existing Orders component (keeps user's code unchanged)
  return <Login/>;
}