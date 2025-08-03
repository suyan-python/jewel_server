import React from "react";
import farmImage from "../assets/pictures/background/farm.jpeg";
import roastingImage from "../assets/pictures/coffeepics/beans.jpg";
import brewingImage from "../assets/pictures/person/women3.jpg";

function CoffeeJourney()
{
  return (
    <section
      className="bg-gradient-to-l from-[#6A3E36] via-[#9B5E55] to-[#F0B67F] py-12 px-6 lg:px-20 rounded-lg my-28"
      aria-labelledby="journey-title"
    >
      <h2
        id="journey-title"
        className="text-4xl lg:text-5xl font-bold text-center text-white mb-10"
      >
        The Journey from Seeds to Cup
      </h2>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* 1: Farm to Bean */}
        <div className="flex flex-col items-center">
          <img
            src={farmImage}
            alt="Organic coffee farm in Ilam, Nepal"
            className="w-full h-48 lg:h-64 object-cover rounded-lg shadow-lg"
            loading="lazy"
          />
          <h3 className="text-xl font-semibold text-white mt-4">
            Organic Farming
          </h3>
          <p className="text-center text-white font-medium">
            Single-origin Arabica beans grown sustainably in the high-altitude
            farms of Ilam, Nepal.
          </p>
        </div>

        {/* 2: Expert Roasting */}
        <div className="flex flex-col items-center">
          <img
            src={roastingImage}
            alt="Artisan coffee bean roasting process"
            className="w-full h-48 lg:h-64 object-cover rounded-lg shadow-lg"
            loading="lazy"
          />
          <h3 className="text-xl font-semibold text-white mt-4">
            Precision Roasting
          </h3>
          <p className="text-center text-white font-medium">
            Small-batch roasting to unlock the rich, nuanced flavors of each
            bean.
          </p>
        </div>

        {/* 3: Perfect Brew */}
        <div className="flex flex-col items-center">
          <img
            src={brewingImage}
            alt="Brewing a cup of fresh Himalayan coffee"
            className="w-full h-48 lg:h-64 object-cover rounded-lg shadow-lg"
            loading="lazy"
          />
          <h3 className="text-xl font-semibold text-white mt-4">
            Artisan Brewing
          </h3>
          <p className="text-center text-white font-medium">
            Enjoy your cup—direct-trade, single origin, and freshly roasted for
            maximum aroma.
          </p>
        </div>
      </div>
    </section>
  );
}

export default CoffeeJourney;
