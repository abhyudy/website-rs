import React, { useState } from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import TrendingCard from '../components/TrendingCard'
import FilterBox from '../components/filter/FilterBox'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

// Mock data generation
const mockData = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  image: `/img/blog${(i % 6) + 1}.png`,
  title: `Trending Blog Title ${i + 1}`,
  desc: 'The quality of clothing is improving day by day with innovative materials and sustainable practices shaping the future of fashion trends.',
  category: [
    'Fashion & Apparel',
    'Beauty & Skincare',
    'Luxury & Designer',
    'Sustainable Shopping',
    'Tech & Gadgets',
  ][i % 5],
}))

const ITEMS_PER_PAGE = 3

const Trending = () => {
  const location = useLocation()
  const query =
    new URLSearchParams(location.search).get('search')?.toLowerCase() || ''

  const categories = [
    'Fashion & Apparel',
    'Beauty & Skincare',
    'Luxury & Designer',
    'Sustainable Shopping',
    'Tech & Gadgets',
  ]

  const [selectedCategory, setSelectedCategory] = useState(null)
  const [search, setSearch] = useState(query)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    const newQuery =
      new URLSearchParams(location.search).get('search')?.toLowerCase() || ''
    setSearch(newQuery)
    setCurrentPage(1)
  }, [location.search])

  const filteredData = mockData.filter((item) => {
    const matchesCategory =
      selectedCategory === null ||
      item.category === categories[selectedCategory]
    const matchesSearch = item.desc.toLowerCase().includes(search.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE)

  const paginatedData = filteredData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  return (
    <div className="bg-background-color">
      <div className="container w-full max-w-6xl mx-auto flex flex-col items-center justify-center py-10 md:py-12 px-4">
        {/* Header */}
        <div className="relative z-0 w-full py-15 md:py-30 bg-gradient-to-r from-[#FEC5C5] to-[#FFFCA7] text-black rounded-xl flex flex-col items-center justify-start shadow-lg px-4 md:px-16">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl custom-times font-bold">
              Trending Post
            </h2>
            <p className="text-base font-inter mt-4 max-w-3xl">
              Unlock the latest trends, insider tips, and exclusive deals. We
              bring you expert insights, honest reviews, and the smartest
              shopping strategies.
            </p>
          </div>
        </div>

        {/* Filter and Search */}
        <div className="w-full flex flex-col md:flex-row items-end md:items-center justify-between py-8">
          {/* Mobile View: Search + Filter */}
          <div className="flex flex-row gap-2 md:hidden w-full mb-4">
            <input
              type="text"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value)
                setCurrentPage(1)
              }}
              placeholder="Search by card description..."
              className="w-full p-2 border border-gray-300 rounded-md font-inter text-sm"
            />
            <FilterBox
              selectedCategory={selectedCategory}
              onCategoryChange={(index) => {
                setSelectedCategory(index)
                setCurrentPage(1)
              }}
              search={search}
              onSearchChange={setSearch}
            />
          </div>

          {/* Desktop View: Only Filter */}
          <div className="hidden md:block">
            <FilterBox
              selectedCategory={selectedCategory}
              onCategoryChange={(index) => {
                setSelectedCategory(index)
                setCurrentPage(1)
              }}
              search={search}
              onSearchChange={setSearch}
            />
          </div>
        </div>

        {/* No results found */}
        {filteredData.length === 0 ? (
          <p className="text-xl font-bold text-center text-black mt-6">
            No results found{search && ` for "${search}"`}
          </p>
        ) : (
          <>
            {/* Cards */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 justify-items-center">
              {paginatedData.map((item) => (
                <TrendingCard key={item.id} {...item} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-10 w-full">
              <Stack spacing={2}>
                <Pagination
                  count={totalPages}
                  page={currentPage}
                  onChange={(e, value) => setCurrentPage(value)}
                  shape="rounded"
                  color="standard"
                  variant="outlined"
                  siblingCount={1}
                  boundaryCount={1}
                />
              </Stack>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Trending
