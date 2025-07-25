import React from 'react'

const AboutUsTop = () => {
  return (
    <div className="bg-[#FFF3F3]">
      <div className="container w-full max-w-6xl mx-auto flex flex-col items-center justify-center py-10 md:py-12 px-4">
        {/* Top Section */}
        <div className="relative z-0 w-full py-15 md:py-30 bg-gradient-to-r from-[#FEC5C5] to-[#FFFCA7] text-black rounded-xl flex flex-col  items-center justify-start shadow-lg px-4 md:px-16">
          <h1 className="text-4xl md:text-6xl font-bold custom-times text-center">
            About Us
          </h1>
          <p className="text-base md:text-base font-inter max-w-3xl mt-4 text-center">
            Unlock the latest trends, insider tips, and exclusive deals. We
            bring you expert insights, honest reviews, and the smartest shopping
            strategies.
          </p>
        </div>

        {/* Bottom Section */}
        <div className="relative z-10 -mt-8 md:-mt-15 w-full max-w-4xl text-black rounded-xl px-4">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 justify-between items-stretch">
            {/* Left Box */}
            <div className="flex-1 bg-white border border-gray-300 rounded-xl flex flex-col justify-between gap-10 p-6 md:p-10 shadow-md text-center">
              <h1 className="flex text-start text-2xl md:text-4xl font-semibold mb-4">
                Who We Are
              </h1>
              <p className="flex text-start">
                We are a community of shopping enthusiasts, trendsetters, and
                deal hunters, bringing you expert recommendations, honest
                reviews, and smart shopping strategies.
              </p>
            </div>

            {/* Right Box */}
            <div className="flex-1 bg-white border border-gray-300 rounded-xl flex flex-col justify-between gap-10 p-6 md:p-10 shadow-md text-center">
              <h1 className="flex text-2xl md:text-4xl font-semibold mb-4">
                Our Mission
              </h1>
              <p className="flex text-start mb-6">
                We're your go-to for smart, stylish, and eco-friendly shopping
                advice—helping you find trends, quality, and value.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUsTop
