import React from 'react'

const Subscribe = () => {
  return (
    <section className="bg-background-light-gray border border-background-light-gray rounded-lg p-4 sm:p-6 mx-auto my-8 shadow-sm w-full max-w-4xl">
      <h1 className="text-background-black mb-4 sm:mb-6 text-center text-5xl custom-times  font-semibold">
        Stay Updated!
      </h1>
      <p className="text-xs sm:text-sm text-background-black mb-4 sm:mb-6 text-center">
        Subscribe to get the latest trends and exclusive deals!
      </p>
      <form className="flex justify-center">
        <input
          type="email"
          placeholder="Enter your email..."
          className="w-full max-w-[250px] sm:max-w-xs px-3 sm:px-4 py-2 border border-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-background-black text-sm"
          required
        />
        <button
          type="submit"
          className="bg-background-black text-white px-4 sm:px-6 py-2 rounded-r-md hover:bg-gray-800 transition text-sm"
        >
          Subscribe
        </button>
      </form>
    </section>
  )
}

export default Subscribe
