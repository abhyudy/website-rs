import React, { useState } from 'react'
import logo from '../assets/img/logo1.png'

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen)
  }
  return (
    <>
      <header className="bg-background-color py-4 px-16 flex items-center justify-between ">
        {/* Logo Section */}
        <div className="flex items-center">
          <img className="h-10" src={logo} alt="R&S" />
        </div>
        {/* Navigation Links */}
        <nav className="flex space-x-12">
          <a
            href="/"
            className="text-gray-700 hover:text-pink-500 font-semibold"
          >
            Home
          </a>
          <a
            href="/about"
            className="text-gray-700 hover:text-pink-500 font-semibold"
          >
            About Us
          </a>
          <a
            href="/trends"
            className="text-gray-700 hover:text-pink-500 font-semibold"
          >
            Trends
          </a>
          <a
            href="/contact"
            className="text-gray-700 hover:text-pink-500 font-semibold"
          >
            Contact Us
          </a>
        </nav>

        {/* Search Icon */}
        <div className="flex items-center">
          <input
            style={{ visibility: isSearchOpen ? 'visible' : 'hidden' }}
            type="text"
            placeholder="Search for..."
            className="mr-2 px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
          />

          <div onClick={toggleSearch} className="cursor-pointer">
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
              ></path>
            </svg>
          </div>
        </div>
      </header>

      <hr />
    </>
  )
}

export default Header
