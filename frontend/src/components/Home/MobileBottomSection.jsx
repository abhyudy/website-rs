import React from 'react'
import CategoryButtons from './CategoryButtons'

const MobileBottomSection = () => {
  return (
    <div className="block md:hidden w-full px-4 mt-8">
      <div className="flex flex-row justify-center gap-4">
        {/* Visitor Box */}
        <div
          className="rounded-xl w-1/2 aspect-square flex flex-col items-center justify-center p-4 flex-shrink-0"
          style={{
            backgroundColor: 'var(--color-color)',
         
          }}
        >
          <div className="flex -space-x-2 mb-2">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="User 1"
              className="w-7 h-7 rounded-full border-2 border-white"
            />
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="User 2"
              className="w-7 h-7 rounded-full border-2 border-white"
            />
            <img
              src="https://randomuser.me/api/portraits/women/65.jpg"
              alt="User 3"
              className="w-7 h-7 rounded-full border-2 border-white"
            />
          </div>
          <p className="text-3xl font-bold text-white">4.3k</p>
        </div>

        {/* Image */}
        <div
          className="flex w-1/2 aspect-square"
        >
          <img
            src="/img/home3.png"
            alt="Shopping Bags"
            className="w-full  h-full rounded-xl object-cover"
          />
        </div>
      </div>

      {/* Categories Below */}
      <div className="mt-6">
        <CategoryButtons />
      </div>
    </div>
  )
}

export default MobileBottomSection
