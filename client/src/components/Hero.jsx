import React from "react";
import Jewel from "../assets/pictures/png/jhp.png";

function Hero() {
  return (
    <div className="bg-herobean bg-cover bg-center rounded-3xl h-auto">
      <div className="flex flex-col md:flex-row-reverse rounded-3xl shadow-xl py-16 md:py-32">
        <div className="text-area w-full flex flex-col text-center items-center px-6 bg-white bg-opacity-10 backdrop-blur-md rounded-lg py-24">
          <div className="slog text-3xl md:text-4xl  rounded-full flex justify-center w-3/4 md:w-2/6  py-3 px-4 gap-3  mb-4">
            <img src={Jewel} alt="" />
          </div>

          <div className="title text-4xl md:text-5xl lg:text-6xl py-4 font-bold text-white tracking-tight leading-snug">
            From Seeds to Cup
          </div>

          <div className="description text-slate-200 w-full md:w-3/4 lg:w-2/3 text-base md:text-lg lg:text-xl leading-relaxed py-2">
            <strong>Jewel Himalayan Products (JHP)</strong> delivers premium
            Nepali Arabica coffee to connoisseurs worldwide, while celebrating
            the dedication and expertise of our hardworking farmers.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
