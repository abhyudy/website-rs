import React, { useState } from 'react'
import { FiSearch, FiFilter } from 'react-icons/fi'
import TrendingCard from '../components/TrendingCard'

const mockData = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  image: `/img/blog${(i % 6) + 1}.png`,
  title: `Trending Blog Title ${i + 1}`,
  date: 'March 25, 2025',
  author: ['Emily Carter', 'John Doe', 'Alice Smith'][i % 3],
  desc: 'The quality of clothing is improving day by day.',
}))

const ITEMS_PER_PAGE = 12

const Trending = () => {
  const categories = [
    'Fashion & Apparel',
    'Beauty & Skincare',
    'Luxury & Designer',
    'Sustainable Shopping',
    'Tech & Gadgets',
  ]

  const [selectedCategory, setSelectedCategory] = useState('Fashion & Apparel')
  const [search, setSearch] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [showCategories, setShowCategories] = useState(false)

  const filteredData = mockData.filter((item) =>
    item.author.toLowerCase().includes(search.toLowerCase())
  )

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE)

  const paginatedData = filteredData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  return (
    <div className="bg-background-color text-white py-10 px-4 sm:px-6 md:px-10 lg:px-20">
      {/* Gradient Heading Section */}
      <div className="bg-gradient-to-r from-[#FEC5C5] to-[#FFFCA7] text-background-black rounded-xl mx-auto mb-10 w-full max-w-[1200px] h-[307px] flex flex-col justify-center items-center text-center p-6 sm:p-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4">
          Trending Post
        </h2>
        <p className="text-sm sm:text-base max-w-3xl mx-auto px-2">
          Unlock the latest trends, insider tips, and exclusive deals. We bring
          you expert insights, honest reviews, and the smartest shopping
          strategies.
        </p>
      </div>

      {/* Category & Search */}
      <div className="mb-8">
        {/* Small Screen: Search (Left) + Filter Icon (Right) */}
        <div className="flex sm:hidden items-center justify-between gap-2 mb-4">
          {/* Search Left */}
          <div className="flex items-center flex-grow border rounded-full px-4 py-2 bg-white text-background-black border-gray-300 max-w-[70%]">
            <input
              type="text"
              placeholder="Search by author..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent outline-none w-full"
            />
            <FiSearch className="text-gray-500 ml-2" />
          </div>

          {/* Filter Icon Right */}
          <button
            onClick={() => setShowCategories(!showCategories)}
            className="text-background-black bg-white p-2 rounded-full border border-gray-300"
          >
            <FiFilter />
          </button>
        </div>

        {/* Small Screen: Dropdown Categories */}
        {showCategories && (
          <div className="sm:hidden mb-4 bg-white text-background-black border border-gray-300 rounded-lg shadow-lg w-full max-w-[320px] mx-auto">
            {categories.map((cat, index) => (
              <button
                key={index}
                onClick={() => {
                  setSelectedCategory(cat)
                  setShowCategories(false) // Close dropdown after selection
                }}
                className={`block w-full text-left px-4 py-2 text-sm transition-all hover:bg-gray-100 ${
                  selectedCategory === cat
                    ? 'bg-background-black text-white'
                    : ''
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Large Screen: Inline Category + Search */}
        <div className="hidden sm:flex items-center justify-between flex-wrap gap-4">
          {/* Categories */}
          <div className="flex flex-wrap gap-3">
            {categories.map((cat, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full border text-sm transition-all ${
                  selectedCategory === cat
                    ? 'bg-background-black text-white border-background-black'
                    : 'bg-white text-background-black border-gray-300 hover:bg-gray-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="flex items-center border rounded-full px-4 py-2 bg-white text-background-black border-gray-300 w-full sm:w-auto sm:ml-auto">
            <input
              type="text"
              placeholder="Search by author..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent outline-none w-full"
            />
            <FiSearch className="text-gray-500 ml-2" />
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 justify-items-center">
        {paginatedData.map((item) => (
          <TrendingCard key={item.id} {...item} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-10 space-x-2 text-sm flex-wrap">
        {/* Previous */}
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="border border-background-black text-background-black px-3 py-1 rounded disabled:opacity-50"
        >
          «
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={`border border-background-black px-3 py-1 rounded ${
              currentPage === page
                ? 'bg-background-black text-white'
                : 'text-background-black'
            }`}
          >
            {page}
          </button>
        ))}

        {/* Next */}
        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="border border-background-black text-background-black px-3 py-1 rounded disabled:opacity-50"
        >
          »
        </button>
      </div>
    </div>
  )
}

export default Trending
