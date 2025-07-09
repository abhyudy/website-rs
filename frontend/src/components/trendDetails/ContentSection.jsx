import React from 'react'
import TableOfContentItem from './TableOfContentItem'

const ContentSection = ({ tableOfContent, activeSection, handleLinkClick }) => {
  return (
    <>
      {tableOfContent.map((item) => (
        <section key={item.id} id={item.id} className="mb-10 scroll-mt-24">
          <h1 className="text-4xl font-semibold mb-2">{item.title}</h1>

          <p className="text-sm text-gray-700 leading-relaxed">
            {item.description}
          </p>
          {item.hasButton && (
            <button className="bg-black text-white px-6 py-2 w-fit rounded-full text-sm font-medium hover:bg-[#E37561] transition duration-300 mb-4">
              Join Now
            </button>
          )}
          {item.images && (
            <div className="flex gap-4 mt-4">
              {item.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Introduction image ${index + 1}`}
                  className="w-[341px] h-[386px] object-cover rounded-lg"
                />
              ))}
            </div>
          )}
        </section>
      ))}
    </>
  )
}

export default ContentSection
