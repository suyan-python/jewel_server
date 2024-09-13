import React, { useState } from "react";

function FarmingHero4() {
  const [isExpanded, setIsExpanded] = useState(false);

  function toggleExpand() {
    setIsExpanded((prev) => !prev);
  }

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center lg:pt-16 pt-8 px-5 lg:px-32">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 w-full max-w-screen-xl">
        {/* Left Section: Title and Subtitle */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <div className="title  text-4xl lg:text-5xl font-medium text-green-800 mb-4">
            GAP & Organic Farming
          </div>
          <div className="sub-title text-lg lg:text-xl text-justify text-green-600 mb-6">
            <b>Good Agricultural Practices (GAP)</b> is our prime focus on the
            farm. We want to build on the foundation of organic farming.
          </div>
        </div>

        {/* Right Section: Content */}
        <div className="bg-white p-6 rounded-xl shadow-lg w-full lg:w-1/2 flex flex-col justify-between">
          <div className="flex-1">
            <h2 className="text-xl font-semibold py-3 text-justify text-gray-800">
              Since the 1980s, coffee growing in Nepal has proved effective in
              preventing natural disasters such as landslides and floods.
            </h2>
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                isExpanded ? "max-h-[600px]" : "max-h-24"
              }`}
            >
              <p className="text-gray-700">
                We only use organic fertilizers and encourage a bird-friendly
                environment by planting shade trees, which also improve air
                quality. Medulla trees grow in this eastern, hilly part of
                Nepal. Medulla is the Nepali name for Tephrosia candida, a
                legume shade tree used for agroforestry and coffee establishment
                to support nitrogen-fixing.
                {isExpanded && (
                  <span>
                    <br />
                    <br />
                    It is a fast-growing and drought-tolerant shade tree that
                    retains moisture through its fallen leaves. We will also
                    plant avocado and pineapple for shade and an extra income
                    source. We encourage our farmers to intercrop and use
                    resources that would otherwise go unused by a single crop.
                    For now, farmers mostly grow turmeric and ginger alongside
                    coffee. They plant a common ginger that is a staple used in
                    cooking curry every day in every Nepali kitchen. This
                    variety is also used to treat muscle pain, nausea,
                    indigestion, cold and flu, and inflammation. Turmeric’s
                    bright orange flesh turns a distinct shade of yellow when
                    dried or boiled. It contains very rich antioxidant
                    properties and is used every day. Farmers also grow spinach,
                    mustard, chillies, and radish to eat themselves.
                  </span>
                )}
              </p>
            </div>
          </div>

          <div className="mt-auto text-center lg:text-left">
            <button
              className="flex items-center justify-center lg:justify-start text-green-600 hover:text-green-800 focus:outline-none"
              onClick={toggleExpand}
            >
              <span className="mr-2 border border-green-600 px-4 py-2 rounded-md hover:bg-green-600 hover:text-white transition-colors duration-300">
                {isExpanded ? "Show Less" : "Learn More"}
              </span>
              <svg
                className={`w-5 h-5 transition-transform duration-300 ${
                  isExpanded ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FarmingHero4;
