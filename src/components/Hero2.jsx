import React from "react";
import Button from "../layouts/Button";
import { Link } from "react-router-dom";

function Hero2() {
  return (
    <div className="sub flex justify-around h-2/4 py-5 gap-3">
      <div className="one bg-gradient-to-r from-seed to-white rounded-2xl p-3 shadow-md w-1/4 h-60 ">
        <div className="title flex justify-center">
          <div className="text">Seed Farming</div>
        </div>
        <div className="images pt-28">
          <Link to={"/farming"}>
            <Button title="Visit Us ⤴" />
          </Link>
        </div>
        <div className="text text-slate-500">
          More than 4k farmers working together
        </div>
      </div>

      <div className="two bg-white rounded-2xl p-3 shadow-md w-1/4 h-60">
        <div className="title flex justify-center">
          <div className="text">Coffee Trading</div>
        </div>
        <div className="images pt-16 text-center text-xl font-medium">
          Mystical Coffee.JHP
        </div>
      </div>

      <div className="three bg-gradient-to-r from-white to-brightColor rounded-2xl p-3 shadow-md w-1/4 h-60">
        <div className="title flex flex-col justify-center items-center ">
          <div className="text font-semibold text-2xl">iNaya Cafe</div>
          <div className="images pt-16">
            <Link to={"/inaya"}>
              <Button title="iNaya ⤴" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero2;
