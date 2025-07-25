import React from 'react'
import { RiTelegram2Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'
const Subscribe = () => {
  return (
    <div className="bg-background-color py-6 sm:py-12 px-6">
      <section className="bg-background-light-gray border border-background-light-gray rounded-lg p-4 sm:p-6 md:p-8 shadow-sm flex flex-col items-center justify-center mx-auto w-full max-w-5xl">
        <h1 className="text-background-black mb-3 sm:mb-4 text-center font-inter text-2xl sm:text-3xl md:text-4xl lg:text-5xl custom-times font-semibold">
          Stay Updated!
        </h1>
        <p className="text-xs sm:text-sm md:text-base font-inter text-background-black mb-4 sm:mb-6 text-center max-w-lg">
          Subscribe to get the latest trends and exclusive deals!
        </p>
        <form className="flex flex-col sm:flex-row  justify-center w-full max-w-md gap-2">
          <input
            type="email"
            placeholder="Enter your email..."
            className="flex-1 px-3 sm:px-4 py-2 border bg-white border-white rounded-md focus:outline-none focus:ring-2 focus:ring-background-black text-xs sm:text-sm font-inter"
            required
          />
          <Link
            to="/contact"
            className="bg-background-black flex items-center gap-1 w-fit mx-auto text-white px-4 sm:px-3 py-2 rounded-md  sm:rounded-md hover:bg-gray-800 transition text-xs sm:text-sm text-center font-inter"
          >
            <img src="./img/air.png" alt="air" />
            Subscribe
          </Link>
        </form>
      </section>
    </div>
  )
}

export default Subscribe
