import React from 'react'
import { FiMail, FiPhone, FiClock } from 'react-icons/fi'
import { TbBuildingCommunity } from 'react-icons/tb'

const Contact = () => {
  return (
    <div className="bg-background-color">
      <div className="container w-full max-w-6xl mx-auto flex flex-col items-center justify-center py-10 md:py-12 px-4">
        {/* Gradient Header */}
        <div className="relative z-0 w-full  py-15 md:py-30 bg-gradient-to-r from-[#FEC5C5] to-[#FFFCA7] text-black rounded-xl flex flex-col items-center justify-start shadow-lg px-4 md:px-16">
          <h1 className="text-4xl md:text-6xl font-bold custom-times text-center">
            Contact Us
          </h1>
          <p className="text-base md:text-base font-inter max-w-3xl mt-4 text-center">
            We’d love to hear from you! Whether you have a question, feedback,
            or collaboration inquiry, feel free to reach out.
          </p>
        </div>

        {/* Main Contact Box */}
        <div className="relative z-10 -mt-8 md:-mt-15 w-full max-w-4xl text-black rounded-xl px-4">
          <div className=" bg-white rounded-xl flex flex-col md:flex-row gap-10 md:gap-20 justify-between items-stretch max-md:items-center">
            {/* Left: Contact Form */}
            <div className="w-full lg:w-[460px] p-6 sm:p-10 max-md:pr-12">
              <h1 className="text-4xl font-inter font-semibold mb-2">
                Get in Touch
              </h1>
              <p className="text-sm font-inter text-black py-4 max-w-md ">
                Have a query or suggestion? Fill out the form below, and we’ll
                get back to you as soon as possible.
              </p>

              <form className="space-y-5 max-md:mr-3">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-inter mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full border-b border-gray-[#A0A0A0] focus:outline-none "
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-inter mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full border-b border-gray-[#A0A0A0] focus:outline-none "
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-inter mb-1"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full border-b border-gray-[#A0A0A0] focus:outline-none "
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-inter mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="3"
                    className="w-full border-b border-gray-[#A0A0A0] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-black py-2 text-white font-inter font-semibold rounded-full w-full  mx-auto block hover:bg-gray-800"
                >
                  Send
                </button>
              </form>
            </div>

            {/* Right: Info Section */}
            <div className="relative bg-black text-white w-[90%]  lg:w-[480px]  h-[320px] max-md:mb-[20px] mt-30 max-md:mt-0 z-10 rounded-l-2xl px-6 py-6 left-4 max-md:left-0  max-md:self-end ">
              {/* Sticky Note Effect */}
              <div className="absolute -top-2 -left-2 w-6 h-6 bg-[#FFFCA7] z-20" />

              <h2 className="text-2xl font-inter font-semibold mb-6">Info</h2>

              <div className="space-y-6 max-sm:space-y-3 text-sm font-inter ">
                <div className="flex items-center gap-3">
                  <TbBuildingCommunity className="text-white" />
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
            <div className=" absolute top-0 right-0 max-md:right-4 h-full w-24 max-md:w-10 bg-[#FEC5C5] z-0 rounded-r-xl" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
