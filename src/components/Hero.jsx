import React from "react";
import Logo from "../assets/pictures/png/iNaya.png";
import Person from "../assets/pictures/person/avatar4.png";
import Button from "../layouts/Button";
import Title from "../layouts/Title";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="">
      <div className="flex justify-around h-2/4 rounded-3xl shadow-sm bg-gradient-to-t from-[#B0B57E] to-white py-4">
        <div className="ext-area flex flex-col w-3/4 text-center justify-center items-center">
          <div className="slog rounded-full flex w-2/5 justify-center px-3 py-2 gap-3">
            <Title />
          </div>
          <div className="title text-5xl py-3 font-medium ">
            From Seeds To
            <br />
            Cup
          </div>
          <div className="description text-slate-500">
            Jewel Himalayan Products (JHP) delivers 100% premium Nepali Arabica
            to coffee aficionados while celebrating the efforts of our
            hardworking farmers.
          </div>
          <div className="book py-3">
            <Link to={"/about"}>
              <Button title="WE ARE HERE ↗" />
            </Link>
          </div>
        </div>
        <div className="image-area flex flex-col w-3/4 justify-center items-center">
          <img
            className="pt-14"
            style={{ height: "80vh" }}
            src={Person}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
