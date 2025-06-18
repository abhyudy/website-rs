import React, {useRef} from 'react'

const categories = [
  'Fashion & Apparel',
  'Beauty & Skincare',
  'Luxury & Designer',
  'Sustainable Shopping',
  'Tech & Gadgets',
]

const blogImages = [
  '/img1.jpg',
  '/img2.jpg',
  '/img3.jpg',
  '/img4.jpg',
  '/img5.jpg',
  '/img6.jpg',
  '/img7.jpg',
]

const About = () => {
  const scrollRef= useRef(null)

    const scroll = (direction) => {
    const container = scrollRef.current
    if (direction === 'left') {
      container.scrollBy({ left: -300, behavior: 'smooth' })
    } else {
      container.scrollBy({ left: 300, behavior: 'smooth' })
    }
  }

  return (
    <section className="bg-background-color py-16">
      {/* About Us Header with Gradient */}
      <div
        className="max-w-4xl mx-auto px-6 py-12 rounded-lg text-center text-black"
        style={{
          background:
            'linear-gradient(85.66deg, #FEC5C5 20.79%, #FFFCA7 107.32%)',
        }}
      >
        <h2 className="text-4xl font-bold mb-4">About Us</h2>
        <p className="text-base">
          Unlock the latest trends, insider tips, and exclusive deals. We bring
          you expert insights, honest reviews, and the smartest shopping
          strategies.
        </p>
      </div>

      {/* Two Cards Section */}
      <div className="mt-12 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-bold mb-2">Who We Are</h3>
          <p className="text-sm text-gray-700">
            We are a community of shopping enthusiasts, trendsetters, and deal
            hunters, bringing you expert recommendations, honest reviews, and
            smart shopping strategies.
          </p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-xl font-bold mb-2">Our Mission</h3>
          <p className="text-sm text-gray-700">
            We’re your go-to for smart, stylish, and eco-friendly shopping
            advice—helping you find trends, quality, and value.
          </p>
        </div>
      </div>
      
    </section>
  )
}

export default About
