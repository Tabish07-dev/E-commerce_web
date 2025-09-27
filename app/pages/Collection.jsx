'use client'

import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from '../components/Productitem'

const Collection = () => {
  const { products } = useContext(ShopContext)

  const [filterProducts, setFilterProducts] = useState([])
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedTypes, setSelectedTypes] = useState([])
  const [sortOption, setSortOption] = useState('relevant')
  const [searchQuery, setSearchQuery] = useState('')
  const [priceRange, setPriceRange] = useState([0, 5000]) 
  const [showFilter, setShowFilter] = useState(true)

  
  useEffect(() => {
    let filtered = Array.isArray(products) ? [...products] : []

    
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(item =>
        selectedCategories.includes(item.category)
      )
    }

  
    if (selectedTypes.length > 0) {
      filtered = filtered.filter(item =>
        selectedTypes.includes(item.subCategory || item.type)
      )
    }

   
    if (searchQuery && searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase()
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(q) || (item.description || '').toLowerCase().includes(q)
      )
    }

    
    if (Array.isArray(priceRange) && priceRange.length === 2) {
      filtered = filtered.filter(item => item.price <= priceRange[1])
    }

    
    if (sortOption === 'low-high') {
      filtered.sort((a, b) => a.price - b.price)
    } else if (sortOption === 'high-low') {
      filtered.sort((a, b) => b.price - a.price)
    }

    setFilterProducts(filtered)
  }, [products, selectedCategories, selectedTypes, sortOption, searchQuery, priceRange])

  const handleCheckboxChange = (value, setState, state) => {
    if (state.includes(value)) {
      setState(state.filter(item => item !== value))
    } else {
      setState([...state, value])
    }
  }

  return (
    <div className="flex flex-col sm:flex-row gap-8 pt-10 border-t relative">
      
     
      {showFilter && (
        <div className="min-w-60 p-5 bg-white shadow-lg rounded-xl border sticky top-20 h-fit">
          <p className="my-2 font-semibold text-lg border-b pb-2">Filters</p>

          
          <p className="mb-3 mt-4 text-sm font-medium">Categories</p>
          <div className="flex flex-col gap-2 text-sm text-gray-700">
            {['Men', 'Women', 'Kids'].map(cat => (
              <label
                key={cat}
                className="flex items-center gap-2 cursor-pointer hover:text-black"
              >
                <input
                  type="checkbox"
                  className="w-4 h-4 accent-black"
                  checked={selectedCategories.includes(cat)}
                  onChange={() =>
                    handleCheckboxChange(cat, setSelectedCategories, selectedCategories)
                  }
                />
                {cat}
              </label>
            ))}
          </div>


          <p className="mt-5 mb-3 text-sm font-medium">Types</p>
          <div className="flex flex-col gap-2 text-sm text-gray-700">
            {['Topwear', 'Bottomwear', 'Winterwear'].map(type => (
              <label
                key={type}
                className="flex items-center gap-2 cursor-pointer hover:text-black"
              >
                <input
                  type="checkbox"
                  className="w-4 h-4 accent-black"
                  checked={selectedTypes.includes(type)}
                  onChange={() =>
                    handleCheckboxChange(type, setSelectedTypes, selectedTypes)
                  }
                />
                {type}
              </label>
            ))}
          </div>

          
          <p className="mt-5 mb-3 text-sm font-medium">Price Range</p>
          <input
            type="range"
            min="0"
            max="5000"
            step="100"
            value={priceRange[1]}
            onChange={e => setPriceRange([0, parseInt(e.target.value)])}
            className="w-full"
          />
          <p className="text-xs text-gray-600">
            Up to: <span className="font-semibold">PKR {priceRange[1]}</span>
          </p>
        </div>
      )}

      
      <div className="flex-1">
        
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-3">
          <h2 className="text-xl sm:text-2xl font-bold">All Collections</h2>

        
          <input
            type="text"
            placeholder="Search products..."
            className="border px-3 py-2 rounded-md text-sm w-full sm:w-1/3 focus:outline-none focus:ring-2 focus:ring-black"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />

          
          <select
            className="border-2 border-gray-300 text-sm px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            onChange={e => setSortOption(e.target.value)}
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

       
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filterProducts.length > 0 ? (
            filterProducts.map((item, index) => (
              <div
                key={index}
                className="relative transition-transform duration-200 hover:scale-105 hover:shadow-lg rounded-xl border bg-white group"
              >
               
                {item.isNew && (
                  <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
                    New
                  </span>
                )}

                <ProductItem
                  id={item._id}
                  name={item.name}
                  price={item.price}
                  image={item.image}
                />

                
                <button className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 text-xs rounded opacity-0 group-hover:opacity-100 transition">
                  Add to Cart
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-500 col-span-full text-center">
              No products found
            </p>
          )}
        </div>
      </div>

      
      <button
        className="sm:hidden fixed bottom-5 right-5 bg-black text-white px-4 py-2 rounded-full shadow-lg"
        onClick={() => setShowFilter(!showFilter)}
      >
        {showFilter ? 'Hide Filters' : 'Show Filters'}
      </button>
    </div>
  )
}

export default Collection