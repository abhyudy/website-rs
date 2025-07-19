import React, { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { FaChevronDown } from 'react-icons/fa'
import { HiOutlineAdjustmentsHorizontal } from 'react-icons/hi2'

const FilterBox = ({
  selectedCategory,
  onCategoryChange,
  search,
  onSearchChange,
}) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const categories = [
    'Fashion & Apparel',
    'Beauty & Skincare',
    'Luxury & Designer',
    'Sustainable Shopping',
    'Tech & Gadgets',
  ]

  return (
    <div>
      {/* Hamburger Icon - Only on Mobile */}
      <div className="md:hidden relative">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 border rounded-md text-black bg-white shadow-sm hover:bg-gray-100"
        >
          <HiOutlineAdjustmentsHorizontal className="text-2xl" />
        </button>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="absolute right-0 top-full mt-2 w-52 bg-white border border-gray-200 rounded-md shadow-lg z-50 flex flex-col">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => {
                  onCategoryChange(index)
                  setMenuOpen(false)
                }}
                className={`flex justify-between items-center px-4 py-2 text-left text-sm font-inter border-b last:border-b-0 ${
                  selectedCategory === index
                    ? 'bg-gray-100 text-black'
                    : 'hover:bg-gray-100 text-black'
                }`}
              >
                {category}
                <img src="/img/Vector.png" alt="arrow" />
                {/* <FaChevronDown className="text-xs text-pink-300" /> */}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Desktop Categories and Search */}
      <div className="hidden md:flex items-center  gap-4 mt-4">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => onCategoryChange(index)}
            className={`flex items-center gap-1 px-3 py-2 rounded-full border transition-all duration-300 text-sm font-inter ${
              selectedCategory === index
                ? 'bg-gray-100 text-black border-gray-800'
                : 'bg-white text-black border-gray-400 hover:bg-gray-100'
            }`}
          >
            {category}
            <span className="p-1 rounded-full text-pink-300 bg-gray-100 hover:bg-white">
              <img src="/img/Vector.png" alt="arrow" />
              {/* <FaChevronDown className="text-xs text-pink-300" /> */}
            </span>
          </button>
        ))}
        <div className="flex-1" id="search-box">
          <div className="flex items-center border rounded-full px-4 py-2 bg-white text-black font-inter border-gray-300">
            <input
              type="text"
              placeholder="Search by card description..."
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
              className="bg-transparent outline-none w-full"
            />
            <FiSearch className="text-gray-500 ml-2" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilterBox
