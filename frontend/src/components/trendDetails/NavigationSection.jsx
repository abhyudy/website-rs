import React from 'react'

const NavigationSection = () => {
  return (
    <div className="flex justify-between pt-4 mb-10">
      <button className="bg-black text-white font-inter px-4 py-2 rounded hover:bg-[#E37561] transition duration-300">
        Previous
      </button>
      <button className="bg-black text-white font-inter px-4 py-2 rounded hover:bg-[#E37561] transition duration-300">
        Next
      </button>
    </div>
  )
}

export default NavigationSection
