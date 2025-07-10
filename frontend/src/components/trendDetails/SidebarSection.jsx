import React from 'react'
import TableOfContentItem from './TableOfContentItem'

const SidebarSection = ({ activeSection, handleLinkClick, tableOfContent }) => {
  return (
    <aside className="w-5/6 mx-auto col-span-4 lg:px-4">
      <div className="p-4 mb-6 border border-[#E37561] bg-white shadow-sm rounded max-h-[930px] overflow-y-auto">
        <h2 className="text-base font-bold mb-4">Table of Content</h2>
        <ul className="text-sm space-y-2">
          {tableOfContent.map((item) => (
            <TableOfContentItem
              key={item.id}
              item={item}
              activeSection={activeSection}
              handleLinkClick={handleLinkClick}
            />
          ))}
        </ul>
      </div>
    </aside>
  )
}

export default SidebarSection
