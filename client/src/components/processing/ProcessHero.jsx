import React from "react";
import Person from "../../assets/pictures/person/avatar9.png";
import Button from "../../layouts/Button";
import Title from "../../layouts/Title";
import { Link } from "react-router-dom";

function ProcessHero() {
  return (
    <div className="bg-processback bg-cover bg-center bg-no-repeat rounded-3xl">
      <div className="flex flex-col lg:flex-row-reverse justify-center items-center lg:justify-between h-auto lg:h-[70vh] rounded-3xl shadow-lg backdrop-blur-sm py-10 lg:py-20 px-5 lg:px-16">
        {/* Text Area */}
        <div className="text-area flex flex-col items-center lg:items-start w-full lg:w-1/2 text-center lg:text-left">
          <div className="slog rounded-full flex justify-center px-4 py-2 gap-3 mb-4">
            <Title />
          </div>
          <div className="title text-3xl lg:text-5xl font-semibold text-white mb-4">
            Our Coffee Processing from Scratch
          </div>
          <div className="description text-slate-200 text-base lg:text-lg mb-6 px-4 lg:px-0">
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

        {/* Image Area */}
        {/* <div className="image-area flex flex-col items-center lg:items-end w-full lg:w-1/2">
          <img
            src={Person}
            alt="Person"
            className="object-cover rounded-lg shadow-md h-auto max-w-full lg:max-w-md"
            style={{ height: "auto", maxWidth: "90%" }}
          />
        </div> */}
      </div>
    </div>
  );
}

export default ProcessHero;
