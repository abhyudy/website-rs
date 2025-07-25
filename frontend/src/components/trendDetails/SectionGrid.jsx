import React from 'react'

const SectionGrid = ({ item }) => {
  const { id, title, description, images = [] } = item
  return (
    <div id={id}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-inter font-semibold mb-2">{title}</h2>
        <p className="text-black mb-6 text-base md:text-lg">{description}</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`trend-img-${index}`}
              className="w-full h-auto object-cover rounded-md"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default SectionGrid
