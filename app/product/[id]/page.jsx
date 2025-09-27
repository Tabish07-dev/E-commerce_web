"use client"

import React from 'react'
import { useParams } from 'next/navigation'
import Product from '../../pages/Product'

export default function ProductPageWrapper() {
  // next/navigation useParams returns an object with route params
  const params = useParams()
  // We will let the client component `Product` read from context using
  // react-router style useParams inside it; to be safe we also pass the id
  // via props if needed.
  return <Product productId={params.id} />
}
