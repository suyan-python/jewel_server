import React from "react";
import Button from "../layouts/Button";
import { Link } from "react-router-dom";
import Mystical from "../assets/pictures/png/mystical.jpg";
import iNaya from "../assets/pictures/png/iNaya.png";

function Hero2() {
  return (
    <div className="sub flex justify-around h-full py-5 my-2 gap-3 ">
      {/* <div className="one bg-gradient-to-r from-seed to-white rounded-2xl p-3 shadow-md w-1/4 h-60 flex flex-col text-center justify-center gap-11 ">
        <div className="title flex justify-center">
          <div className="text">Seed Farming</div>
        </div>
        <div className="text text-slate-500">
          More than 4k farmers working together
        </div>
        <Link to={"/farming"}>
          <Button title="Visit Us ⤴" />
        </Link>
      </div> */}

      <div className="two  bg-gradient-to-r from-seed to-white rounded-2xl p-3 shadow-md w-2/5 h-96 flex flex-col text-center justify-center gap-14">
        <div className="title flex justify-center">
          <div className="text font-medium text-2xl">Farming</div>
        </div>
        <div className="images flex justify-center">Visit our Farm</div>
        <Link to={"/farming"}>
          <Button title="Visit Us ⤴" />
        </Link>
      </div>

      <div className="two rounded-2xl p-3 shadow-inner w-2/5 h-96 flex flex-col text-center justify-center gap-11">
        <div className="title flex justify-center">
          <div className="text font-medium text-2xl">Coffee Trading</div>
        </div>
        <div className="images flex justify-center">
          <img className="w-2/4" src={Mystical} alt="" />
        </div>
        <Button title="Learn More ⤴" />
      </div>

      <div className="three bg-gradient-to-r from-white to-brightColor rounded-2xl p-3 shadow-md w-2/5 h-96 flex flex-col text-center justify-center gap-11">
        <div className="title flex justify-center">
          <div className="text font-medium text-2xl">Cafe</div>
        </div>
        <div className="images flex justify-center">
          <img className="w-2/4" src={iNaya} alt="" />
        </div>

        <Link to={"/inaya"}>
          <Button title="Visit Us ⤴" />
        </Link>
      </div>
    </div>
  );
}

export default Hero2;
