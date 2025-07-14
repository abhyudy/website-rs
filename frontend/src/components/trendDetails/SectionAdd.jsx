import React from "react";

const SectionAdd = ({ item, buttonLabel = "Join Now" }) => {
  const { id, image, title, description } = item;
  return (
    <div id={id} className="py-10 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <img
          src={image}
          alt={title}
          className="w-full md:w-1/2 h-auto rounded-lg shadow-lg object-cover"
        />
        <div className="text-center md:text-left space-y-4">
          <h2 className="text-2xl  font-inter md:text-3xl font-bold text-black">{title}</h2>
          <p className="text-gray-700 font-inter text-base md:text-lg">{description}</p>
          <button className="mt-4 bg-black text-white px-6 py-3 rounded-full shadow-md hover:shadow-xl font-semibold">
            {buttonLabel}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionAdd;
