import React from "react";

const AboutBox = () => {
  return (
    <div className="bg-[#FFF3F3] ">
      <div className="container grid grid-cols-2 gap-20 w-full mx-auto  p-40 bg-[#FFF3F3]">
        {/* Box 1 - Full Image */}
        <div className="aspect-square overflow-hidden rounded-4xl ">
          <img
            src="/img/imagebox1.png" // Replace with your image URL
            alt="Box 1"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Box 2 - Text */}
        <div className="aspect-square bg-white p-10 flex flex-col justify-between text-center rounded-4xl">
          <div className="flex items-start flex-col text-semibold">
            <h2 className="text-5xl font-semibold text-gray-800">
              Why We Are{" "}
            </h2>
            <h2 className="text-5xl  font-semibold text-gray-800">the Best?</h2>
          </div>
          <p className="flex text-start text-lg text-black">
            Unlike other shopping blogs, we go beyond product listings. We
            provide detailed shopping guides, real user experiences, and tips to
            help you maximize your budget. Our dedicated team stays updated on
            market trends to bring you the most relevant and up-to-date shopping
            advice.
          </p>
        </div>

        {/* Box 3 - Text */}
        <div className="aspect-square text-start bg-white p-10 flex flex-col justify-between  rounded-4xl">
          <div className="flex items-start flex-col text-semibold">
            <h2 className="flex text-5xl  font-semibold text-gray-800">
              Why Choose
            </h2>
            <h2 className="flex text-5xl  font-semibold text-gray-800">Us?</h2>
          </div>
          <p className="text-lg text-black ">
            Unlike other shopping blogs, we go beyond product listings. We
            provide detailed shopping guides, real user experiences, and tips to
            help you maximize your budget. Our dedicated team stays updated on
            market trends to bring you the most relevant and up-to-date shopping
            advice.
          </p>
        </div>

        {/* Box 4 - Full Image */}
        <div className="aspect-square overflow-hidden rounded-4xl bg-gradient-to-r from-pink-300 to-purple-300">
          <img
            src="/img/imagebox2.png" // Replace with your image URL
            alt="Box 4"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutBox;