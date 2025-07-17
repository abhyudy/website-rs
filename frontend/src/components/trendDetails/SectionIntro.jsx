import React from 'react'

const SectionIntro = ({ item }) => {
  return (
    <section id={item.id} className=" scroll-mt-24">
      <div className="flex flex-col items-center md:flex-row gap-6">
        <div>
          <h1 className="text-4xl font-inter font-semibold py-2">
            {item.title}
          </h1>

          <p
            className="text-base md:text-lg font-inter text-black leading-relaxed"
            dangerouslySetInnerHTML={{ __html: item.description }}
          >
            {/* {item.description} */}
          </p>
        </div>
        {item.hasButton && (
          <button className="bg-black text-white px-6 py-3 rounded-2xl text-sm font-medium hover:bg-[#E37561] transition duration-300 w-[140px] sm:w-[180px] md:w-[240px] lg:w-96 my-4">
            Join Now
          </button>
        )}
      </div>
      {item.images && (
        <div className="flex flex-col sm:flex-row gap-6 py-2 flex-wrap">
          {item.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Introduction image ${index + 1}`}
              className="w-full sm:w-[300px] h-auto object-cover rounded-lg"
            />
          ))}
        </div>
      )}
    </section>
  )
}

export default SectionIntro
