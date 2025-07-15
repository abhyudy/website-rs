import React, { useState } from 'react'

const MobileTOC = ({ tableOfContent, handleLinkClick, activeSection }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="block lg:hidden px-4 mb-6">
      <div className="bg-white border border-[#E37561] rounded">
        <button
          className="w-full px-4 py-3 font-bold text-left text-base font-inter flex justify-between items-center"
          onClick={() => setOpen(!open)}
        >
          Table Of Content
          <span className="text-lg">{open ? '▲' : '▼'}</span>
        </button>
        {open && (
          <ul className="bg-white border-t border-[#E37561] text-sm">
            {tableOfContent.map((item) => (
              <li key={item.id}>
                <button
                  className={`w-full text-left px-4 py-2 hover:bg-pink-50 ${
                    activeSection === item.id ? 'text-[#E37561]' : 'text-black'
                  }`}
                  onClick={handleLinkClick(item.id)}
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default MobileTOC
