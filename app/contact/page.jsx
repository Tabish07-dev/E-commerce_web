// Wrapper for app/pages/Cart.jsx to expose /cart route in App Router
"use client";

import React from 'react';
import Contact from '../pages/Contact';


export default function Page() {
  // Render the existing Cart component (keeps user's code unchanged)
  return <Contact/>;
}