import React from "react";

const SectionGrid = ({ item }) => {
  const { id, title, description, images = [] } = item;
  return (
    <div id={id} className="py-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-700 mb-6 text-base md:text-lg">{description}</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
  );
};

export default SectionGrid;
