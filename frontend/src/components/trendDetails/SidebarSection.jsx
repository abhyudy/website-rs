import React from 'react'
import TableOfContentItem from './TableOfContentItem'

const SidebarSection = ({ activeSection, handleLinkClick, tableOfContent }) => {
  return (
    <aside className="hidden lg:block w-5/6 mx-auto col-span-4 lg:px-4">
      <div className="p-4 mb-6 border border-[#E37561] bg-white shadow-sm rounded overflow-y-auto sticky top-4">
        <h2 className="text-base font-bold font-inter mb-4">Table of Content</h2>
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
