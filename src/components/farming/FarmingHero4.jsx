import React, { useState } from "react";

function FarmingHero4() {
  const [isExpanded, setIsExpanded] = useState(false);

  function toggleExpand() {
    setIsExpanded((prev) => !prev);
  }

  return (
    <div className="flex justify-center pt-16 mx-52">
      <div className="flex gap-2">
        <div className="w-2/4">
          <div className="title text-5xl w-2/4">GAP & organic farming</div>
          <div className="sub-title w-3/4 text-justify py-5 text-green-600">
            <b>Good Agricultural Practices (GAP)</b> is our prime focus on the
            farm. We want to build on the foundation of organic farming.
          </div>
        </div>
        <div className="p-4 rounded-lg w-full max-w-md flex flex-col">
          <div className="flex-1">
            <h2 className="text-lg font-semibold py-3 text-justify">
              Since the 1980s, coffee growing in Nepal has proved effective in
              preventing natural disasters such as landslides and floods.
            </h2>
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                isExpanded ? "max-h-[500px]" : "max-h-0"
              }`}
            >
              <p>
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
          <div className="mt-auto mb-4 text-center">
            <button
              className="flex items-center justify-center text-blue-500 hover:text-blue-700 focus:outline-none"
              onClick={toggleExpand}
            >
              <span className="mr-2 border px-4 py-1 rounded-md hover:text-green-600">
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
