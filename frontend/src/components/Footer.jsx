import React from 'react'
import logo from '../assets/img/logo1.png'

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-0 pb-6 relative overflow-hidden">
      {/* Curved Top Edge */}
      <div className="absolute top-0 left-0 w-full h-24 bg-pink-100 rounded-b-[100%] z-0"></div>

      {/* Main Content */}
      <div className="relative z-10 pt-28 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div>
          <img src={logo} alt="R&S" className="h-10 w-auto mb-4" />
          <p className="text-sm">
            Your go-to source for shopping trends, exclusive deals, and expert
            tips. Stay ahead in the retail world!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-pink-500">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-pink-500">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-pink-500">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start">
              <svg
                className="w-5 h-5 mr-2 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              123 Shopping Street, Retail City, RC 56789
            </li>
            <li className="flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              +1 555 123-4567
            </li>
            <li className="flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              support@yourblog.com
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-pink-500">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2.04c-5.52 0-10 4.48-10 10 0 4.42 3.58 8.06 8.14 8.92v-6.3H7.5v-2.62h2.64V9.92c0-2.62 1.6-4.04 3.94-4.04 
                1.12 0 2.08.08 2.36.12v2.74h-1.62c-1.26 0-1.5.6-1.5 1.48v1.94h3l-.4 2.62h-2.6v6.3c4.56-.86 8.14-4.5 
                8.14-8.92 0-5.52-4.48-10-10-10z"
                />
              </svg>
            </a>
            <a href="#" className="hover:text-pink-500">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2.04c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm-1.5 15.5h-3v-6h3v6zm-1.5-6.75c-.96 
                0-1.75-.79-1.75-1.75s.79-1.75 1.75-1.75 1.75.79 1.75 1.75-.79 1.75-1.75 1.75zm6 
                6.75h-3v-3c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v3z"
                />
              </svg>
            </a>
            <a href="#" className="hover:text-pink-500">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2.04c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm5.64 
                6.36l-6.36 6.36-3.36-3.36 1.06-1.06 2.3 2.3 5.3-5.3 1.06 1.06z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative z-10 border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        <p>© 2025 Retail Blog. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
