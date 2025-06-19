import React from 'react'

const TrendingCard = ({ image, title, date, author, desc }) => {
  return (
    <div
      className="bg-white rounded-xl overflow-hidden shadow-md"
      style={{ width: '367px', height: '303px' }}
    >
      <div className="h-[150px] w-full overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-4 flex flex-col justify-between h-[153px]">
        <p className="text-xs text-gray-600 mb-1">
          By {author} • {date}
        </p>
        <h3 className="text-base font-semibold mb-1 truncate">{title}</h3>
        <p className="text-sm text-gray-600 mb-2 line-clamp-2">{desc}</p>
        <a href="#" className="text-pink-500 text-sm font-medium mt-auto">
          Read More
        </a>
      </div>
    </div>
  )
}

export default TrendingCard
