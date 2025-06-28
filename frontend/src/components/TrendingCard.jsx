import React from 'react'

const TrendingCard = ({ image, date, author, desc }) => {
  return (
    <div
      className="bg-white rounded-xl overflow-hidden shadow-sm flex flex-col transform transition duration-300 hover:brightness-110 hover:scale-105 cursor-pointer "
      style={{ width: '370px', height: '335px' }} // Full card size
    >
      {/* Image */}
      <div className="w-full h-[216px] overflow-hidden">
        <img
          src={image}
          alt="Trending"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col justify-between flex-grow">
        <p className="text-xs text-gray-600 mb-1">
          By {author} • {date}
        </p>
        <p className="text-sm font-bold text-background-black mt-2 mb-4">{desc}</p>
        <a
          href="/trendsDetail"
          className="text-pink-500 text-sm font-medium underline mt-auto"
        >
          Read More
        </a>
      </div>
    </div>
  )
}

export default TrendingCard
