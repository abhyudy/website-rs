import React from 'react'
import { FiMapPin, FiMail, FiPhone, FiClock } from 'react-icons/fi'

const Contact = () => {
  return (
    <div className="bg-background-color">
      <div className="container mx-auto flex flex-col items-center justify-center  py-12">
        {/* Gradient Header */}
        <div className="relative z-0 w-full max-w-6xl h-85 bg-gradient-to-r from-[#FEC5C5] to-[#FFFCA7] text-black rounded-xl flex flex-col pt-20 items-center justify-start shadow-lg">
          <h1 className="text-6xl sm:text-4xl md:text-5xl font-bold text-center mb-2 sm:mb-4">
            Contact Us
          </h1>
          <p className="text-sm sm:text-base max-w-3xl mx-auto px-2">
            We'd love to hear from you!
          </p>
        </div>

        {/* Main Contact Box */}
        <div className="flex justify-center mt-[-50px] sm:mt-[-70px] lg:mt-[-10%] z-10 relative pb-10">
          <div className="flex flex-col lg:flex-row w-full max-w-4xl  bg-white rounded-xl shadow-lg overflow-hidden relative">
            {/* Left: Contact Form */}
            <div className="w-full lg:w-[460px] p-6 sm:p-10">
              <h2 className="text-4xl font-medium mb-2">Get in Touch</h2>
              <p className="text-sm text-gray-700 py-4 max-w-md">
                Have a query or suggestion? Fill out the form below, and we’ll
                get back to you as soon as possible.
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
            <div className="relative bg-black text-white w-full lg:w-[480px] h-auto lg:h-[320px] mt-6 lg:mt-24 lg:mr-14 z-10 rounded-xl p-6 sm:p-8">
              {/* Sticky Note Effect */}
              <div className="absolute -top-2 -left-2 w-6 h-6 bg-[#FFFCA7] z-20" />

              <h2 className="text-xl font-semibold mb-6">Info</h2>

              <div className="space-y-6 text-sm">
                <div className="flex items-center gap-3">
                  <FiMapPin className="text-white" />
                  <span>B-148, Kankarbagh Main Road, Patna, Bihar-800020</span>
                </div>
                <div className="flex items-center gap-3">
                  <FiMail className="text-white" />
                  <span>info@retailtypes.com </span>
                </div>
                <div className="flex items-center gap-3">
                  <FiPhone className="text-white" />
                  <span>+91 9430622181</span>
                </div>
                <div className="flex items-center gap-3">
                  <FiClock className="text-white" />
                  <span>10:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>

            {/* Pink Background Strip on Right Edge (visible only on desktop) */}
            <div className="hidden lg:block absolute top-0 right-0 h-full w-24 bg-[#FEC5C5] z-0 rounded-r-xl" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
