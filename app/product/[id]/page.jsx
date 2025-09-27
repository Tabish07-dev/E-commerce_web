"use client"

import React from 'react'
import { useParams } from 'next/navigation'
import Product from '../../pages/Product'

export default function ProductPageWrapper() {
  
  const params = useParams()
  
  return <Product productId={params.id} />
}
