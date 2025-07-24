import React, { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { HiOutlineAdjustmentsHorizontal } from 'react-icons/hi2'

const FilterBox = ({
  selectedCategory,
  onSelectCategory,
  search,
  onSearchChange,
  categories,
  showAll,
}) => {
  const [menuOpen, setMenuOpen] = useState(false)

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
            {showAll && (
              <button
                onClick={() => {
                  onSelectCategory(null)
                  setMenuOpen(false)
                }}
                className={`flex justify-between items-center px-4 py-2 text-left text-sm font-inter border-b last:border-b-0 ${
                  selectedCategory === null
                    ? 'bg-gray-100 text-black'
                    : 'hover:bg-gray-100 text-black'
                }`}
              >
                All
                <img src="/img/Vector.png" alt="arrow" />
              </button>
            )}
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  onSelectCategory(category)
                  setMenuOpen(false)
                }}
                className={`flex justify-between items-center px-4 py-2 text-left text-sm font-inter border-b last:border-b-0 ${
                  selectedCategory === category
                    ? 'bg-gray-100 text-black'
                    : 'hover:bg-gray-100 text-black'
                }`}
              >
                {category}
                <img src="/img/Vector.png" alt="arrow" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Desktop Categories and Search */}
      <div className="hidden md:flex items-center gap-4 mt-4">
        {showAll && (
          <button
            onClick={() => onSelectCategory(null)}
            className={`flex items-center gap-1 px-3 py-2 rounded-full border transition-all duration-300 text-sm font-inter ${
              selectedCategory === null
                ? 'bg-gray-100 text-black border-gray-800'
                : 'bg-white text-black border-gray-400 hover:bg-gray-100'
            }`}
          >
            All
            <span className="p-1 rounded-full text-pink-300 bg-gray-100 hover:bg-white">
              <img src="/img/Vector.png" alt="arrow" />
            </span>
          </button>
        )}
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`flex items-center gap-1 px-3 py-2 rounded-full border transition-all duration-300 text-sm font-inter ${
              selectedCategory === category
                ? 'bg-gray-100 text-black border-gray-800'
                : 'bg-white text-black border-gray-400 hover:bg-gray-100'
            }`}
          >
            {category}
            <span className="p-1 rounded-full text-pink-300 bg-gray-100 hover:bg-white">
              <img src="/img/Vector.png" alt="arrow" />
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
