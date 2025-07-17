import React from 'react'

const HeaderSection = () => {
  return (
    <div className="flex flex-col gap-4 sm:gap-6 mb-4 ">
      {/* Responsive Image */}
      <img
        src="/img/blog1.jpg"
        alt="Fashion Hero"
        className="w-full max-w-6xl sm:max-w-[640px] md:max-w-[768px] h-[220px] sm:h-[300px] md:h-[402px] rounded-lg object-cover mx-auto"
      />

      {/* Author + Time */}
      <p className="text-xs sm:text-sm text-gray-500 font-inter  sm:text-left">
        By Sarah Thompson • 5 min read
      </p>

      {/* Title */}
      <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold font-inter leading-tight text-background-black  sm:text-left">
        10 Must-Have Fashion <br className="hidden sm:block" /> Trends for This
        Season
      </h1>

      {/* Description */}
      <p className="text-sm sm:text-base md:text-lg font-inter text-gray-700  sm:text-left">
        Discover the top 10 trends you need now—bold colors, sleek cuts, and
        standout accessories to keep your look fresh and stylish all season.
      </p>
    </div>
  )
}

export default HeaderSection
