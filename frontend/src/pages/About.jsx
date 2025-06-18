import React, { useRef, useEffect } from 'react'

const About = () => {
  const scrollRef = useRef(null)

  const blogImages = [
    '/img/blog1.jpg',
    '/img/blog2.jpg',
    '/img/blog3.jpg',
    '/img/blog4.jpg',
    '/img/blog5.jpg',
    '/img/blog6.jpg',
    '/img/blog7.jpg',
    '/img/blog8.jpg',
  ]

  // Auto-scroll effect
  useEffect(() => {
    const scrollContainer = scrollRef.current
    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0
      } else {
        scrollContainer.scrollLeft += 1
      }
    }
    const interval = setInterval(scroll, 20)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-background-color text-white py-10 min-h-screen px-4 md:px-20">
      {/* Gradient Section */}
      <div className="bg-gradient-to-r from-[#FEC5C5] to-[#FFFCA7] text-black rounded-xl p-10 text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">About Us</h2>
        <p className="max-w-3xl mx-auto">
          Unlock the latest trends, insider tips, and exclusive deals. We bring
          you expert insights, honest reviews, and the smartest shopping
          strategies.
        </p>
      </div>

      {/* Card Section */}
      <div className="flex flex-col md:flex-row justify-center items-start gap-8">
        <div className="bg-white text-black rounded-xl shadow-md p-6 w-full md:w-[400px]">
          <h3 className="text-xl font-semibold mb-3">Who We Are</h3>
          <p>
            We are a community of shopping enthusiasts, trendsetters, and deal
            hunters, bringing you expert recommendations, honest reviews, and
            smart shopping strategies.
          </p>
        </div>
        <div className="bg-white text-black rounded-xl shadow-md p-6 w-full md:w-[400px]">
          <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
          <p>
            We’re your go-to for smart, stylish, and eco-friendly shopping
            advice— helping you find trends, quality, and value.
          </p>
        </div>
      </div>

      {/* What We Cover Section */}
      <div className="mt-20 bg-white p-6 rounded-xl">
        <h2 className="text-4xl font-bold text-black mb-4">What We Cover</h2>
        <p className="text-black max-w-3xl mb-6">
          We explore a wide range of shopping categories, from fashion and tech
          to beauty and home essentials. Stay ahead with the latest trends,
          discover must-have products, and unlock exclusive deals curated just
          for you.
        </p>

        {/* Category Buttons */}
        <div className="flex flex-wrap gap-4 mb-10">
          {[
            'Fashion & Apparel',
            'Beauty & Skincare',
            'Luxury & Designer',
            'Sustainable Shopping',
            'Tech & Gadgets',
          ].map((cat, i) => (
            <button
              key={i}
              className="bg-white border text-black rounded-full px-4 py-2 shadow hover:bg-pink-100 flex items-center justify-between"
            >
              <span>{cat}</span>
              <span className="ml-2 text-pink-500 text-sm">➤</span>
            </button>
          ))}
        </div>

        {/* Blog Section */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-semibold text-black border-l-4 border-pink-500 pl-2">
            Blogs
          </h3>
          <div className="text-black font-medium">See All (30)</div>
        </div>

        {/* Auto Scroll Image Container */}
        <div className="relative overflow-hidden">
          <div
            ref={scrollRef}
            className="flex gap-4 whitespace-nowrap overflow-x-auto no-scrollbar scroll-smooth"
            style={{ width: '100%' }}
          >
            {/* Duplicate images to enable seamless looping */}
            {[...blogImages, ...blogImages].map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`blog-${i}`}
                className="h-48 min-w-[200px] rounded-xl object-cover"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
