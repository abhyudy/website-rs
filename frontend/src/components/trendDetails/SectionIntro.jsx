import React from "react";

const SectionIntro = ({item}) => {
  return (
    <section key={item.id} id={item.id} className="mb-10 scroll-mt-24">
      <div className="flex gap-4">
        <div>
          <h1 className="text-4xl font-semibold mb-2">{item.title}</h1>

          <p
            className="text-base md:text-lg text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: item.description }}
          >
            {/* {item.description} */}
          </p>
        </div>
        {item.hasButton && (
          <button className="bg-black text-white px-8 py-4 w-82 my-auto h-fit rounded-2xl text-sm font-medium hover:bg-[#E37561] cursor-pointer transition duration-300">
            Join Now
          </button>
        )}
      </div>
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
  );
};

export default SectionIntro;
