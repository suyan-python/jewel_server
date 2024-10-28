import React from "react";
import Button from "../layouts/Button";
import { Link } from "react-router-dom";
import Mystical from "../assets/pictures/png/mystical.jpg";
import iNaya from "../assets/pictures/png/iNaya.png";
import JHCB from "../assets/pictures/png/JHCB.jpg";

function Hero2() {
  return (
    <div className=" shadow-md">
      <div className="mt-32 text-center font-medium text-5xl">
        Our Businesses
      </div>
      <div className="sub md:flex-row justify-around h-full py-2 mb-32 gap-3">
        {/* Farming Section */}
        <div className="relative bg-farm bg-cover w-full rounded-2xl shadow-lg overflow-hidden">
          <div className="flex flex-col items-center justify-center h-96 gap-6 p-5 md:p-8 bg-black bg-opacity-10 hover:bg-opacity-30 rounded-2xl text-white text-center transition transform hover:scale-105">
            {/* Title Section with Logo */}
            <div className="title flex justify-center">
              <div className="flex items-center justify-center gap-3 text-3xl md:text-4xl font-semibold">
                <img
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full shadow-lg"
                  src={JHCB}
                  alt="JHCB Logo"
                />
                Jewel Himalayan Coffee Beans
              </div>
            </div>

            {/* Visit Farm Button */}
            <Link to="/farming">
              <Button
                className="px-8 py-3 font-medium text-xl md:text-2xl bg-green-500 text-white rounded-full shadow-md hover:bg-green-600 transition-transform transform hover:scale-105"
                title="Visit Our Farm"
              />
            </Link>
          </div>

          {/* Decorative Arrow Shape */}
          <div className="absolute bottom-0 left-0 right-0 h-0 w-0 mx-auto border-t-[30px] md:border-t-[50px] border-t-transparent border-l-[25px] md:border-l-[50px] border-l-transparent border-r-[25px] md:border-r-[50px] border-r-transparent border-b-[30px] md:border-b-[50px] border-b-white opacity-80"></div>
        </div>

        {/* Coffee Trading Section */}
        <div className="two rounded-2xl p-3 w-full  h-96 flex flex-col text-center justify-center gap-6">
          <div className="title flex justify-center">
            {/* <div className="text font-medium text-3xl md:text-5xl">
              Coffee Trading
            </div> */}
          </div>
          <div className="images flex justify-center">
            <img
              className="w-1/5"
              src={Mystical}
              alt="Mystical Coffee"
              loading="lazy" /* Lazy loading for faster page load */
            />
          </div>
        </div>
        {/* Food Coffee Conversation Section */}

        <div className="bg-cafe w-full rounded-2xl shadow-lg bg-cover p-5 md:p-8 lg:p-10">
          <div className="rounded-2xl h-96 flex flex-col text-center justify-center gap-6 bg-black bg-opacity-20  p-6 md:p-8 lg:p-10 shadow-lg">
            {/* Logo Image */}
            <div className="images flex justify-center">
              <img
                className="w-1/4 md:w-1/6 lg:w-1/8 transition-transform transform hover:scale-105 bg-white"
                src={iNaya}
                alt="iNaya"
                loading="lazy"
              />
            </div>

            {/* Title */}
            <div className="title flex justify-center">
              <div className="text font-semibold text-lg md:text-2xl lg:text-3xl text-white bg-orange-300  p-2 md:px-4 rounded-full shadow-sm  transition duration-300">
                Food, Coffee, Conversation
              </div>
            </div>

            {/* Button */}
            <Link to={"/inaya"}>
              <Button
                className="font-semibold text-lg md:text-2xl text-white bg-green-500 px-6 py-3 rounded-full hover:bg-green-600 transition-transform transform hover:scale-105 shadow-lg"
                title="Visit Us"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero2;
