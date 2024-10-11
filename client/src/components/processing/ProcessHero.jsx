import React from "react";
import Button from "../../layouts/Button";
import { Link } from "react-router-dom";
import JHCB from "../../assets/pictures/png/JHCB.jpg";

function ProcessHero() {
  return (
    <div className="relative bg-processback bg-cover bg-center bg-no-repeat rounded-3xl">
      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start lg:justify-between h-auto lg:h-[70vh] rounded-3xl shadow-lg py-10 lg:py-20 px-5 lg:px-16">
        {/* Text Area */}
        <div className="text-area flex flex-col lg:items-start w-full lg:w-1/2 text-center lg:text-left">
          <div className="title text-3xl lg:text-5xl font-semibold text-white mb-4">
            Our Coffee Processing from Scratch
          </div>
          <div className="description text-slate-200 text-base lg:text-lg mb-6 px-4 lg:px-0 font-medium">
            We source our delicious, premium Arabica from our sister company,
            Jewel Himalayan Coffee Beans (JHCB), in Province No 1, Ilam
            district.
          </div>
          <div className="book">
            <Link to="/contact">
              <Button
                title="Contact JHP for premium Arabica from the Himalaya ⤴"
                color="white"
              />
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="absolute top-0 right-0 w-1/3 lg:w-1/4 p-4">
          <img
            className="w-full h-auto rounded-lg shadow-md"
            src={JHCB}
            alt="Jewel Himalayan Coffee Beans"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

export default ProcessHero;
