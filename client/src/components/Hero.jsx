import React from "react";
import Person from "../assets/pictures/person/avatar4.png";
import Button from "../layouts/Button";
import Title from "../layouts/Title";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="bg-herobean bg-cover rounded-3xl h-2/4">
      <div className="flex flex-col md:flex-row-reverse justify-between h-2/5 rounded-3xl shadow-2xl backdrop-blur-sm py-20 md:py-56">
        <div className="text-area flex flex-col w-full md:w-3/4 text-center justify-center items-center">
          <div className="slog rounded-full flex w-3/4 md:w-2/5 justify-center py-2 gap-3">
            <Title color="white" />
          </div>
          <div className="title text-3xl md:text-5xl py-3 font-medium text-white">
            From Seeds To
            <br />
            Cup
          </div>
          <div className="description text-slate-300 w-full md:w-2/3 text-sm md:text-base">
            <b>Jewel Himalayan Products (JHP)</b> delivers 100% premium Nepali
            Arabica to coffee aficionados while celebrating the efforts of our
            hardworking farmers.
          </div>
          <div className="book py-3">
            <Link to={"/farming"}>
              <Button title="ABOUT ⤴" color="white" />
            </Link>
          </div>
        </div>
        <div className="image-area flex flex-col w-full md:w-3/4 justify-center items-center">
          {/* <img className="" style={{ height: "72vh" }} src={Person} alt="" /> */}
        </div>
      </div>
    </div>
  );
}

export default Hero;
