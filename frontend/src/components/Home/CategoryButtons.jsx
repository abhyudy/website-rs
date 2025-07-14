import React, { useState } from 'react'

const categories = [
  { label: 'Luxury & Designer', width: '152px', height: '44px' },
  { label: 'Fashion & Style', width: '130px', height: '44px' },
  { label: 'Sustainable Shopping', width: '172px', height: '44px' },
  { label: 'Tech & Gadgets', width: '136px', height: '44px' },
  { label: 'Beauty & Skincare', width: '147px', height: '44px' },
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
            className={`rounded-full transition text-xs sm:text-base border
              ${
                active === cat.label
                  ? 'bg-white text-[#FFA8A8] border-[#FFA8A8]'
                  : 'bg-white text-[#A0A0A0] border-[#A0A0A0] hover:bg-gray-100'
              }`}
            style={{ width: cat.width, height: cat.height }}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default CategoryButtons
