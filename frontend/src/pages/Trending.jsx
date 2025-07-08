import React, { useState } from 'react'
import { FiSearch, FiFilter } from 'react-icons/fi'
import TrendingCard from '../components/TrendingCard'
import FilterBox from '../components/filter/FilterBox'

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

  const filteredData = mockData.filter((item) =>
    item.author.toLowerCase().includes(search.toLowerCase())
  )

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE)

  const paginatedData = filteredData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  return (
    <div className="bg-background-color">
      <div className="container w-full max-w-6xl mx-auto flex flex-col items-center justify-center py-10 md:py-12 px-4">
        {/* Gradient Heading Section */}
        <div className="relative z-0 w-full  py-15 md:py-30 bg-gradient-to-r from-[#FEC5C5] to-[#FFFCA7] text-black rounded-xl flex flex-col  items-center justify-start shadow-lg px-4 md:px-16">
          <h1 className="text-4xl md:text-6xl text-center font-bold">
            Trending Post
          </h1>
          <p className="text-base md:text-xl max-w-3xl mt-4 text-center">
            Unlock the latest trends, insider tips, and exclusive deals. We
            bring you expert insights, honest reviews, and the smartest shopping
            strategies.
          </p>
        </div>

        {/* Category & Search */}
        <div className=" w-full flex flex-row md:flex-row-reverse gap-4 items-end justify-between py-8">
          {/* Search */}
          <div className="flex items-center border rounded-full px-4 py-2 bg-white text-background-black border-gray-300 w-full sm:w-34">
            <input
              type="text"
              placeholder="Search by author..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-transparent outline-none w-full"
            />
            <FiSearch className="text-gray-500 ml-2" />
          </div>
          <FilterBox />
        </div>

        {/* Cards */}
        <div className=" w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 justify-items-center ">
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
            &laquo;
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
            &raquo;
          </button>
        </div>
      </div>
    </div>
  )
}

export default Trending
