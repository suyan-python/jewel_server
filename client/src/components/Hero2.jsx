import React from "react";
import Button from "../layouts/Button";
import { Link } from "react-router-dom";
import Mystical from "../assets/pictures/png/mystical.jpg";
import iNaya from "../assets/pictures/png/iNaya.png";

function Hero2() {
  return (
    <div>
      <div className="mt-32 text-center font-medium text-5xl">
        Our Businesses
      </div>
      <div className="sub flex flex-col md:flex-row justify-around h-full py-2 mb-32 gap-3">
        {/* Farming Section */}
        <div className="bg-farm bg-cover w-full md:w-2/5 rounded-2xl shadow-md">
          <div className="two rounded-2xl p-3 h-96 flex flex-col text-center justify-center gap-8 transition text-white">
            <div className="title flex justify-center">
              <div className="text font-medium text-3xl md:text-4xl">
                Farming
              </div>
            </div>
            <div className="images flex justify-center text-base md:text-lg">
              Visit our Farm
            </div>
            <Link to={"/farming"}>
              <Button title="Visit Us ⤴" color="white" />
            </Link>
          </div>
        </div>
        {/* Coffee Trading Section */}
        <div className="two rounded-2xl p-3 w-full md:w-2/5 h-96 flex flex-col text-center justify-center gap-6">
          <div className="title flex justify-center">
            {/* <div className="text font-medium text-3xl md:text-5xl">
              Coffee Trading
            </div> */}
          </div>
          <div className="images flex justify-center">
            <img
              className="w-2/4"
              src={Mystical}
              alt="Mystical Coffee"
              loading="lazy" /* Lazy loading for faster page load */
            />
          </div>
        </div>
        {/* Food Coffee Conversation Section */}
        <div className="bg-cafe w-full md:w-2/5 rounded-2xl shadow-md bg-cover">
          <div className="three rounded-2xl p-3 h-96 flex flex-col text-center justify-center gap-8 ">
            <div className="images flex justify-center">
              <img
                className="w-2/4"
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
              <Button title="Visit Us ⤴" color="white" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero2;
