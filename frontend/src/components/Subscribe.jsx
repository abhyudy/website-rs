import React from 'react'

const Subscribe = () => {
  return (
    <div className="bg-background-color">
      <section
        className="bg-background-light-gray border border-background-light-gray rounded-lg p-4 sm:p-6 shadow-sm flex flex-col items-center justify-center mx-auto my-8"
        style={{ width: '1132px', height: '268px' }}
      >
        <h1 className="text-background-black mb-3 sm:mb-4 text-center text-4xl sm:text-5xl custom-times font-semibold">
          Stay Updated!
        </h1>
        <p className="text-xs sm:text-sm text-background-black mb-6 text-center">
          Subscribe to get the latest trends and exclusive deals!
        </p>
        <form className="flex justify-center w-full max-w-md">
          <input
            type="email"
            placeholder="Enter your email..."
            className="flex-1 px-4 py-2 border bg-white border-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-background-black text-sm"
            required
          />
          <a
            href="/contact"
            type="submit"
            className="bg-background-black text-white px-5 py-2 rounded-r-md hover:bg-gray-800 transition text-sm"
          >
            Subscribe
          </a>
        </form>
      </section>
    </div>
  )
}

export default Subscribe
