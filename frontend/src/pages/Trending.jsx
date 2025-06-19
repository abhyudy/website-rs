import React, { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import TrendingCard from '../components/TrendingCard'

const mockData = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  image: `/img/blog${(i % 8) + 1}.jpg`, // Loop through 8 sample images
  title: `Trending Blog Title ${i + 1}`,
  date: 'March 25, 2025',
  author: 'Emily Carter',
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

  const totalPages = Math.ceil(mockData.length / ITEMS_PER_PAGE)

  const filteredData = mockData.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  )

  const paginatedData = filteredData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  return (
    <div className="bg-background-color text-white py-10 min-h-screen px-4 md:px-20">
      {/* Heading Section */}
      <div className="bg-gradient-to-r from-[#FEC5C5] to-[#FFFCA7] text-black rounded-xl p-10 text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Trending Post</h2>
        <p className="max-w-3xl mx-auto">
          Unlock the latest trends, insider tips, and exclusive deals. We bring
          you expert insights, honest reviews, and the smartest shopping
          strategies.
        </p>
      </div>

      {/* Category Buttons and Search */}
      <div className="bg-background-color py-8 px-4 md:px-16">
        <div className="flex flex-wrap gap-4 items-center">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full border text-sm transition-all ${
                selectedCategory === cat
                  ? 'bg-black text-white border-black'
                  : 'bg-white text-black border-gray-300 hover:bg-gray-100'
              }`}
            >
              {cat}
            </button>
          ))}

          <div className="flex items-center border rounded-full px-4 py-2 w-full sm:w-auto bg-white text-black border-gray-300">
            <input
              type="text"
              placeholder="Search here..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent outline-none w-full"
            />
            <FiSearch className="text-gray-500 ml-2" />
          </div>
        </div>
      </div>

      {/* Blog Cards Grid */}
      <div className="bg-background-color px-4 md:px-16 py-10 min-h-screen">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 justify-items-center">
          {paginatedData.map((item) => (
            <TrendingCard key={item.id} {...item} />
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center mt-8 space-x-2 text-sm">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            className="px-2 py-1 border rounded disabled:opacity-50"
            disabled={currentPage === 1}
          >
            &laquo;
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 border rounded ${
                currentPage === i + 1 ? 'bg-pink-200 text-black' : ''
              }`}
            >
              {i + 1}
            </button>
          )).slice(0, 3)}

          <span className="px-2 py-1">...</span>

          <button
            onClick={() => setCurrentPage(totalPages)}
            className={`px-3 py-1 border rounded ${
              currentPage === totalPages ? 'bg-pink-200 text-black' : ''
            }`}
          >
            {totalPages}
          </button>

          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            className="px-2 py-1 border rounded disabled:opacity-50"
            disabled={currentPage === totalPages}
          >
            &raquo;
          </button>
        </div>
      </div>
    </div>
  )
}

export default Trending
