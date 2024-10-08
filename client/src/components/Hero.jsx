import React from "react";
import Button from "../layouts/Button";
import Title from "../layouts/Title";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="bg-herobean bg-cover bg-center rounded-3xl h-auto">
      <div className="flex flex-col md:flex-row-reverse justify-between rounded-3xl shadow-xl py-20 md:py-40 px-4 md:px-16">
        {/* Text Area */}
        <div className="text-area flex flex-col w-full md:w-3/4 text-center justify-center items-center">
          <div className="slog text-4xl text-white rounded-full flex w-3/4 md:w-2/5 justify-center py-2 px-4 gap-3 shadow-lg">
            <Title color="white" />
          </div>

          <div className="title text-4xl md:text-6xl py-4 font-bold text-white tracking-tight leading-snug">
            From Seeds to Cup
          </div>

          <div className="description text-slate-200 w-full md:w-2/3 text-base md:text-lg leading-relaxed">
            <strong>Jewel Himalayan Products (JHP)</strong> delivers premium
            Nepali Arabica coffee to connoisseurs worldwide, while celebrating
            the dedication and expertise of our hardworking farmers.
          </div>

          <div className="book py-6">
            <Link to={"/farming"}>
              <Button title="Learn More ⤴" color="white" />
            </Link>
          </div>
        </div>

        {/* Image Area with Lazy Loading */}
        <div className="image-area hidden md:flex w-full md:w-1/2 justify-center items-center">
          <img
            className="rounded-full shadow-lg object-cover h-72 md:h-96"
            src={"path-to-coffee-farming-image.jpg"}
            alt="Coffee Farming in Illam"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
