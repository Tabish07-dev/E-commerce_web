'use client'

import { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import ProductItem from './Productitem'

const LatestCollection = () => {
  const { products } = useContext(ShopContext)
  const [latestProducts, setLatestProducts] = useState([])

  useEffect(() => {
    if (products && products.length > 0) {
      setLatestProducts(products.slice(0, 10)) 
    }
  }, [products])

  return (
    <div className="my-10">
      
      <div className="text-center py-8 text-3xl font-bold">
        <Title text1="LATEST" text2="COLLECTIONS" />
      </div>

    
      <div className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 text-center">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
      </div>

    
      <div className="grid grid-cols-5 gap-4 gap-y-6 mt-10 px-4 sm:px-0 w-3/4 m-auto">
        {latestProducts.map((item, index) => (
          <ProductItem
            key={item._id || index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  )
}

export default LatestCollection
