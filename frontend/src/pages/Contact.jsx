import React from 'react'
import { FiMapPin, FiMail, FiPhone, FiClock } from 'react-icons/fi'

const Contact = () => {
  return (
    <div className="bg-background-color text-black pt-10 px-4 sm:px-6 md:px-10 lg:px-20 relative">
      {/* Gradient Header */}
      <div className="bg-gradient-to-r from-[#FEC5C5] to-[#FFFCA7] text-background-black rounded-xl mx-auto w-full max-w-[1200px] h-[307px] flex flex-col justify-center items-center text-center p-6 sm:p-10 mb-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-4">
          Contact Us
        </h2>
        <p className="text-sm sm:text-base max-w-3xl mx-auto px-2">
          We'd love to hear from you!
        </p>
      </div>

      {/* Main Contact Box */}
      <div className="flex justify-center -mt-[10%] z-10 relative mb-10">
        <div className="flex w-[979px] h-[650px] bg-white rounded-xl shadow-lg overflow-hidden relative">
          {/* Left: Contact Form */}
          <div className="w-[460px] p-10 mt-10">
            <h2 className="text-3xl font-bold mb-2">Get in Touch</h2>
            <p className="text-sm text-gray-700 mb-6 max-w-md">
              Have a query or suggestion? Fill out the form below, and we’ll get
              back to you as soon as possible.
            </p>

            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full border-b border-gray-400 focus:outline-none py-1"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border-b border-gray-400 focus:outline-none py-1"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full border-b border-gray-400 focus:outline-none py-1"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="3"
                  className="w-full border-b border-gray-400 focus:outline-none py-1"
                />
              </div>

              <button
                type="submit"
                className="bg-black text-white font-semibold px-6 py-2 rounded-full w-full max-w-[120px] mx-auto block hover:bg-gray-800"
              >
                Send
              </button>
            </form>
          </div>

          {/* Right: Info Section */}
          <div className="relative bg-black text-white w-[480px] h-[320px] mt-30 mr-10 z-10 rounded-xl p-8 ml-auto">
            {/* Sticky Note Effect */}
            <div className="absolute -top-2 -left-2 w-6 h-6 bg-[#FFFCA7]  z-20" />

            <h2 className="text-xl font-semibold mb-6">Info</h2>

            <div className="space-y-6 text-sm">
              <div className="flex items-center gap-3">
                <FiMapPin className="text-white" />
                <span>123 Shopping Street, Retail City, RC 56789</span>
              </div>
              <div className="flex items-center gap-3">
                <FiMail className="text-white" />
                <span>support@yourblog.com</span>
              </div>
              <div className="flex items-center gap-3">
                <FiPhone className="text-white" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <FiClock className="text-white" />
                <span>10:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>
        {/* Pink Background Strip on Right Edge */}
        <div className="absolute top-0 right-0 h-full w-24 bg-[#FEC5C5] z-5 rounded-r-xl" />
        </div>
      </div>
    </div>
  )
}

export default Contact
