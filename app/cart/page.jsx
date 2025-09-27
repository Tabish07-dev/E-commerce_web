// Wrapper for app/pages/Cart.jsx to expose /cart route in App Router
"use client";

import React from 'react';
import CartPage from '../pages/Cart';

export default function Page() {
  // Render the existing Cart component (keeps user's code unchanged)
  return <CartPage />;
}
