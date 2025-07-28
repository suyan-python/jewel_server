import React, { useState } from "react";
import farm from "../../assets/pictures/png/farm.svg";

function FarmingHero4()
{
  const [isExpanded, setIsExpanded] = useState(false);

  function toggleExpand()
  {
    setIsExpanded((prev) => !prev);
  }

  return (
    <section
      className="flex flex-col lg:flex-row justify-center items-center lg:pt-20 pt-10 px-5 lg:px-32"
      aria-label="GAP and Organic Coffee Farming in Nepal"
    >
      <div className="flex flex-col lg:flex-row gap-10 w-full max-w-screen-xl items-center">
        {/* Left Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl lg:text-5xl font-bold text-green-800 mb-4">
            GAP & Organic Coffee Farming
          </h2>

          <p className="text-lg lg:text-xl text-green-700 mb-6 leading-relaxed">
            At <strong>Jewel Himalayan Coffee</strong>, we embrace{" "}
            <strong>Good Agricultural Practices (GAP)</strong> and organic farming methods to ensure sustainable, eco-friendly, and high-quality coffee cultivation in the Himalayan hills of Nepal.
          </p>

          <div className="flex justify-center lg:justify-start">
            <img
              src={farm}
              alt="Illustration of organic farming practices in Nepal"
              className="w-full max-w-sm lg:max-w-md h-auto"
              loading="lazy"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-gradient-to-br from-green-500 via-green-600 to-green-700 text-white p-6 rounded-xl shadow-xl w-full lg:w-1/2 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold py-3 leading-relaxed">
              Coffee farming in Nepal, since the 1980s, has proven instrumental in
              reducing landslides and flood risks across hilly regions.
            </h3>

            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${isExpanded ? "max-h-[800px]" : "max-h-28"
                }`}
            >
              <p className="font-medium leading-relaxed">
                We use only organic fertilizers and promote a bird-friendly ecosystem by growing shade trees that improve soil and air quality. One such tree is <em>Tephrosia candida</em> (Medulla), a nitrogen-fixing legume native to Nepal.
                {isExpanded && (
                  <span className="text-white no-underline">
                    <br />
                    <br />
                    It retains moisture and supports drought resistance. Additionally, we interplant crops like avocado and pineapple to boost biodiversity and farmer income. Coffee farms are also intercropped with turmeric, ginger, spinach, mustard, radish, and chillies — all vital in Nepali kitchens and rich in medicinal properties.
                  </span>
                )}
              </p>
            </div>
          </div>

          {/* Toggle Button */}
          <div className="mt-6 text-center lg:text-left">
            <button
              className="inline-flex items-center gap-2 px-5 py-2 border border-white text-white hover:bg-white hover:text-green-700 font-semibold rounded-md transition duration-300"
              onClick={toggleExpand}
              aria-expanded={isExpanded}
              aria-controls="expanded-farming-text"
            >
              {isExpanded ? "Show Less" : "Learn More"}
              <svg
                className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
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
    </section>
  );
}

export default FarmingHero4;
