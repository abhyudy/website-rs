import React from 'react'

const TrendingCard = ({ image, desc, category }) => {
  return (
    <a
      href="/trendsDetail"
      className="block w-full max-w-[370px] min-h-[335px] transition duration-300 hover:brightness-110 ease-in-out hover:scale-105 cursor-pointer"
      aria-label={`Trending post in ${category}`}
    >
      <div className="bg-white rounded-xl overflow-hidden shadow-sm flex flex-col h-full">
        {/* Image */}
        <div className="w-full h-[216px] overflow-hidden">
          <img
            src={image}
            alt={desc}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col justify-between flex-grow">
          {category && <p className="text-xs font-inter text-gray-600 mb-1">{category}</p>}
          <p className="text-sm font-bold text-background-black mt-2 mb-4 line-clamp-2">
            {desc.split(' ').slice(0, 15).join(' ') + '…'}
          </p>
          <span className="text-pink-500 text-sm font-medium font-inter underline mt-auto hover:text-pink-600">
            Read More
          </span>
        </div>
      </div>
    </a>
  )
}

export default TrendingCard
