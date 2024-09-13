import React from "react";
import Button from "../../layouts/Button";
import Title from "../../layouts/Title";
import { Link } from "react-router-dom";

function FarmingHero() {
  return (
    <div className="bg-aboutback bg-cover rounded-3xl">
      <div className="flex flex-col lg:flex-row  h-full rounded-3xl shadow-xl backdrop-blur-sm py-24 lg:py-56">
        {/* Text Area */}
        <div className="text-area flex flex-col w-full lg:w-3/4 text-center lg:text-left justify-center items-center lg:items-start text-white px-5 lg:px-10 ">
          <div className="slog rounded-full flex w-3/4 lg:w-2/5 justify-center lg:justify-start  py-2 gap-3 mb-4">
            <Title />
          </div>
          <div className="title text-3xl lg:text-5xl py-3 font-medium w-full lg:w-3/4">
            Premium Arabica coffee from the Himalaya
          </div>
          <div className="description text-slate-200 text-sm lg:text-base w-full lg:w-2/3">
            We source our delicious, premium Arabica from our sister company,
            Jewel Himalayan Coffee Beans (JHCB), in Province No 1, Ilam
            district.
          </div>
          <div className="book py-3">
            <Link to="/contact">
              <Button title="Contact JHP for premium Arabic from the Himalaya ⤴" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FarmingHero;
