import React from "react";
import Button from "../../layouts/Button";
import { Link } from "react-router-dom";

function FarmingHero() {
  return (
    <div className="bg-aboutback bg-cover bg-center rounded-3xl">
      <div className="flex flex-col lg:flex-row h-full rounded-3xl shadow-xl py-24 lg:py-56">
        {/* Text Area */}
        <div className="text-area flex flex-col w-full lg:w-3/4 text-center lg:text-left justify-center items-center lg:items-start px-5 lg:px-10 bg-black text-white  mx-7 py-4 bg-opacity-25 rounded-sm">
          <div className="slog rounded-full flex w-3/4 lg:w-2/5 justify-center lg:justify-start py-2 gap-3 mb-4">
            <h1 className="text-3xl font-semibold">
              Jewel Himalayan Coffee Beans
            </h1>
          </div>
          <div className="title text-3xl lg:text-5xl py-3 font-medium w-full lg:w-3/4">
            Premium Arabica coffee from the Himalaya
          </div>
          <div className="description text-slate-200 text-sm lg:text-base w-full lg:w-2/3 font-medium">
            We source our delicious, premium Arabica from our sister company,
            Jewel Himalayan Coffee Beans (JHCB), in Province No 1, Ilam
            district.
          </div>
          <div className="book py-3">
            <Link to="/contact">
              <Button
                className="font-medium text-green-400 hover:text-green-500"
                title="Contact JHP for premium Arabic from the Himalaya"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FarmingHero;
