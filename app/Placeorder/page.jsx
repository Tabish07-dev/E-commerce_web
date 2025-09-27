// Wrapper for app/pages/Placeorder.jsx to expose /Placeorder route in App Router
"use client";

import React from 'react';
import PlaceOrder from '../pages/Placeorder';

export default function PlaceOrderPage() {
  // Render the existing PlaceOrder component (keeps user's code unchanged)
  return <PlaceOrder />;
}
