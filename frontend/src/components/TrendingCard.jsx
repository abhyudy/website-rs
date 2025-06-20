import React from 'react'

const TrendingCard = ({ image, date, author, desc }) => {
  return (
    <div
      className="bg-white rounded-xl overflow-hidden shadow-sm"
      style={{ width: '367px', height: '303px' }}
    >
      {/* Image */}
      <div className="h-[150px] w-full overflow-hidden">
        <img
          src={image}
          alt="Trending"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col justify-between h-[153px]">
        <p className="text-xs text-gray-600 mb-1">
          By {author} • {date}
        </p>
        <p className="text-sm text-gray-600 mt-2">{desc}</p>
        <a
          href="#"
          className="text-pink-500 text-sm font-medium underline mt-auto"
        >
          Read More
        </a>
      </div>

       <div className="bg-background-color text-black py-10 px-4 sm:px-6 md:px-10 flex justify-center">
      {/* Outer Container */}
      <div className="bg-white rounded-xl shadow-lg w-[979px] h-[747px] p-8 flex flex-col justify-start">
        {/* Title & Subtitle */}
        <h2 className="text-3xl font-bold mb-2">Get in Touch</h2>
        <p className="text-sm text-gray-700 mb-8 max-w-md">
          Have a query or suggestion? Fill out the form below, and we’ll get back to you as soon as possible.
        </p>

        {/* Form */}
        <form className="space-y-6 w-full max-w-md">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="w-full border-b border-gray-400 focus:outline-none py-1"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="w-full border-b border-gray-400 focus:outline-none py-1"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              className="w-full border-b border-gray-400 focus:outline-none py-1"
              placeholder="Enter your phone"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="3"
              className="w-full border-b border-gray-400 focus:outline-none py-1"
              placeholder="Write your message..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-black text-white font-semibold px-6 py-2 rounded-full w-full max-w-[120px] mx-auto block hover:bg-gray-900"
          >
            Send
          </button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default TrendingCard
