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
        <div className="relative bg-farm bg-cover w-full rounded-2xl shadow-md">
          <div className="two rounded-2xl p-3 h-96 flex flex-col text-center justify-center gap-8 transition text-white">
            <div className="title flex justify-center">
              <div className="text font-medium flex items-center justify-center text-3xl md:text-4xl">
                <img className="w-1/12 rounded-full" src={JHCB} alt="" />
              </div>
            </div>
            <Link to={"/farming"}>
              <Button
                className="font-medium text-2xl hover:text-green-400 transition duration-100"
                title="Visit Our Farm"
              />
            </Link>
          </div>
          {/* Arrow down shape */}
          <div className="absolute bottom-0 left-0 right-0 h-0 w-0 mx-auto border-t-[50px] border-t-transparent border-l-[25px] border-l-transparent border-r-[25px] border-r-transparent border-b-[50px] border-b-white"></div>
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
        <div className="bg-cafe w-full  rounded-2xl shadow-md bg-cover py-3">
          <div className="three rounded-2xl p-3 h-96 flex flex-col text-center justify-center gap-8  bg-white bg-opacity-25 ">
            <div className="images flex justify-center ">
              <img
                className="w-1/6"
                src={iNaya}
                alt="iNaya"
                loading="lazy" /* Lazy loading for faster page load */
              />
            </div>
            <div className="title flex justify-center">
              <div className="text font-medium text-lg md:text-xl text-white">
                Food Coffee Conversation
              </div>
            </div>
            <Link to={"/inaya"}>
              <Button
                className="font-medium text-2xl"
                title="Visit Us"
                color="white"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero2;
