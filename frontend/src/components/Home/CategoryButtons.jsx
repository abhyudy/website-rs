import React, { useState } from 'react'

const categories = [
  { label: 'Luxury & Designer' },
  { label: 'Fashion & Style' },
  { label: 'Sustainable Shopping' },
  { label: 'Tech & Gadgets' },
  { label: 'Beauty & Skincare' },
]

const CategoryButtons = () => {
  const [active, setActive] = useState('Luxury & Designer')

  return (
    <div className="w-full max-w-6xl lg:w-1/3 sm:mt-6">
      <h1 className="text-background-black text-4xl font-bold custom-times mb-4">
        Categories
        <hr className="h-px mb-6 mt-2 border-0 bg-gradient-to-r from-gray-200 via-gray-600 to-gray-200" />
      </h1>

      <div className="flex flex-wrap gap-2 sm:gap-3">
        {categories.map((cat) => (
          <button
            key={cat.label}
            onClick={() => setActive(cat.label)}
            className={`rounded-full transition text-xs sm:text-base px-4 py-2 border
              ${
                active === cat.label
                  ? 'bg-white text-[#FFA8A8] border-[#FFA8A8]'
                  : 'bg-white text-[#A0A0A0] border-[#A0A0A0] hover:bg-gray-100'
              }`}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default CategoryButtons
