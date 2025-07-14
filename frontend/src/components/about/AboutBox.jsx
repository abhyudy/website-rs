import React from 'react'

const AboutBox = () => {
  return (
    <div className="bg-[#FFF3F3]">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 w-full p-6 md:p-20 lg:p-40">
        {/* Box 1 - Full Image */}
        <div className="w-full overflow-hidden rounded-3xl aspect-square md:aspect-square">
          <img
            src="/img/imagebox1.png"
            alt="Box 1"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Box 2 - Text */}
        <div className="w-full bg-white p-6 md:p-10 flex flex-col justify-between text-center rounded-3xl aspect-auto md:aspect-square">
          <div className="text-left">
            <h1 className="text-3xl md:text-5xl font-inter font-semibold text-black">
              Why We Are
            </h1>
            <h1 className="text-3xl md:text-5xl font-inter font-semibold text-black">
              the Best?
            </h1>
          </div>
          <p className="text-left text-base font-inter md:text-lg text-black mt-4">
            Unlike other shopping blogs, we go beyond product listings. We
            provide detailed shopping guides, real user experiences, and tips to
            help you maximize your budget. Our dedicated team stays updated on
            market trends to bring you the most relevant and up-to-date shopping
            advice.
          </p>
        </div>

        {/* Box 3 - Text */}
        <div className="w-full bg-white p-6 md:p-10 flex flex-col justify-between rounded-3xl aspect-auto md:aspect-square">
          <div className="text-left">
            <h1 className="text-3xl md:text-5xl font-inter font-semibold text-black">
              Why Choose
            </h1>
            <h1 className="text-3xl md:text-5xl font-inter font-semibold text-black">
              Us?
            </h1>
          </div>
          <p className="text-left text-base font-inter md:text-lg text-black mt-4">
            We stand out by providing well-researched, unbiased recommendations
            that ensure you get the best shopping experience. Our team curates
            top deals, offers real product insights, and keeps you ahead with
            emerging trends. We prioritize authenticity, quality, and savings,
            making sure every purchase you make is worth it.
          </p>
        </div>

        {/* Box 4 - Full Image */}
        <div className="w-full overflow-hidden rounded-3xl bg-gradient-to-r from-pink-300 to-purple-300 aspect-square md:aspect-square">
          <img
            src="/img/imagebox2.png"
            alt="Box 4"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default AboutBox
