import React, { useState } from 'react'
import { NavLink, useNavigate, useLocation } from 'react-router-dom'
import logoSmall from '../assets/img/RS.png'
import logoLarge from '../assets/img/RS.png'

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [searchText, setSearchText] = useState('')

  const navigate = useNavigate()
  const location = useLocation()

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen)
    if (!isSearchOpen && isNavOpen) setIsNavOpen(false)
  }

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen)
    if (!isNavOpen && isSearchOpen) setIsSearchOpen(false)
  }

  const navLinkClasses = ({ isActive }) =>
    `font-semibold ${
      isActive ? 'text-pink-500' : 'text-gray-700 hover:text-pink-500'
    }`

  // Handle search input change
  const handleSearchChange = (value) => {
    setSearchText(value)
    // Only navigate or update URL if there's a search term
    if (value.trim()) {
      navigate(`/trends?search=${encodeURIComponent(value)}`)
    } else {
      // If search is cleared, navigate to /trends without query
      if (location.pathname === '/trends') {
        navigate('/trends')
      }
    }
  }

  return (
    <>
      <header className="m-auto bg-background-color">
        <div className="w-full max-w-6xl m-auto py-3 px-4 flex items-center justify-between relative">
          {/* Logo Section */}
          <div className="flex items-center">
            <NavLink to="/">
              <img
                className="h-6 md:hidden object-contain"
                src={logoSmall}
                alt="Logo Small"
              />
              <img
                className="hidden md:block h-10 object-contain"
                src={logoLarge}
                alt="Logo Large"
              />
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex lg:space-x-12 space-x-6">
            <NavLink to="/" className={navLinkClasses}>
              Home
            </NavLink>
            <NavLink to="/about" className={navLinkClasses}>
              About Us
            </NavLink>
            <NavLink to="/trends" className={navLinkClasses}>
              Trends
            </NavLink>
            <NavLink to="/contact" className={navLinkClasses}>
              Contact Us
            </NavLink>
          </nav>

          {/* Icons and Search */}
          <div className="flex items-center space-x-3">
            <input
              type="text"
              value={searchText}
              placeholder="Search for..."
              className={`hidden md:block px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 text-gray-700 w-32 lg:w-48 mr-2 ${
                isSearchOpen ? 'block' : 'hidden'
              }`}
              aria-label="Search"
              onChange={(e) => handleSearchChange(e.target.value)}
            />

            <div
              onClick={toggleSearch}
              className="cursor-pointer"
              aria-label="Toggle search"
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
                />
              </svg>
            </div>

            {/* Hamburger */}
            <div
              onClick={toggleNav}
              className="md:hidden cursor-pointer"
              aria-label="Toggle menu"
            >
              <svg
                className="w-5 h-5 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isNavOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Search Input */}
      {isSearchOpen && (
        <div className="md:hidden bg-background-color px-4 py-2 absolute z-50 w-full">
          <div className="flex items-center border rounded-md bg-white border-gray-300 px-3 py-2 relative">
            <svg
              className="w-5 h-5 text-gray-700 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
              />
            </svg>
            <input
              type="text"
              value={searchText}
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder="Search for..."
              className="w-full bg-transparent outline-none text-gray-700 pr-6"
              aria-label="Search input"
              autoFocus
            />
            {searchText && (
              <button
                onClick={() => handleSearchChange('')}
                className="absolute right-3 text-gray-500 hover:text-black"
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>
          <hr className="h-px border-0 bg-gradient-to-r from-gray-200 via-gray-600 to-gray-200 mt-2" />
        </div>
      )}

      {/* Mobile Nav */}
      {isNavOpen && (
        <div className="md:hidden bg-background-color py-4 px-4 sm:px-6 absolute z-[99] w-3/4 right-0">
          <nav className="flex flex-col space-y-4">
            <NavLink
              to="/"
              className={navLinkClasses}
              onClick={() => setIsNavOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={navLinkClasses}
              onClick={() => setIsNavOpen(false)}
            >
              About Us
            </NavLink>
            <NavLink
              to="/trends"
              className={navLinkClasses}
              onClick={() => setIsNavOpen(false)}
            >
              Trends
            </NavLink>
            <NavLink
              to="/contact"
              className={navLinkClasses}
              onClick={() => setIsNavOpen(false)}
            >
              Contact Us
            </NavLink>
          </nav>
        </div>
      )}

      <hr className="h-px border-0 bg-gradient-to-r from-gray-200 via-gray-600 to-gray-200" />
    </>
  )
}

export default Header
