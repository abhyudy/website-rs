import React from 'react'

const TrendingCard = ({ image, date, author, desc, category }) => {
  return (
    <div
      className="bg-white rounded-xl overflow-hidden shadow-sm flex flex-col transition duration-300 hover:brightness-110 ease-in-out hover:scale-105 cursor-pointer w-full max-w-[370px] min-h-[335px]"
      aria-label={`Trending post by ${author} on ${date}`}
    >
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
        {category && <p className="text-xs text-gray-600 mb-1">{category}</p>}
        <p className="text-xs text-gray-600 mb-1">
          By {author} • {date}
        </p>
        <p className="text-sm font-bold text-background-black mt-2 mb-4">
          {desc}
        </p>
        <a
          href="/trendsDetail"
          className="text-pink-500 text-sm font-medium underline mt-auto hover:text-pink-600"
        >
          Read More
        </a>
      </div>
    </div>
  )
}

export default TrendingCard
