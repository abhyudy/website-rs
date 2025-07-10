import React from 'react'

const HeaderSection = () => {
  return (
    <div className="flex flex-col gap-6 mb-8">
      <img
        src="/img/blog1.jpg"
        alt="Fashion Hero"
        className="w-full max-w-[768px] h-[402px] rounded-lg object-cover"
      />
      <p className="text-sm text-gray-500">By Sarah Thompson • 5 min read</p>
      <h1 className="text-5xl font-bold leading-tight text-background-black">
        10 Must-Have Fashion <br /> Trends for This Season
      </h1>
      <p className="text-base md:text-lg text-gray-700">
        Discover the top 10 trends you need now—bold colors, sleek cuts, and
        standout accessories to keep your look fresh and stylish all season.
      </p>
    </div>
  )
}

export default HeaderSection
