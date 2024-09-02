import React from "react";
import Logo from "../assets/pictures/png/iNaya.png";
import Person from "../assets/pictures/person/avatar4.png";
import Button from "../layouts/Button";
import Title from "../layouts/Title";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div>
      <div className="flex justify-around h-2/5 rounded-3xl shadow-sm bg-gradient-to-t from-seed to-white  px-32">
        <div className="text-area flex flex-col w-3/4 text-center justify-center items-center">
          <div className="slog rounded-full flex w-2/5 justify-center px-3 py-2 gap-3">
            <Title />
          </div>
          <div className="title text-5xl py-3 font-medium ">
            From Seeds To
            <br />
            Cup
          </div>
          <div className="description text-slate-500">
            <b>Jewel Himalayan Products (JHP)</b> delivers 100% premium Nepali
            Arabica to coffee aficionados while celebrating the efforts of our
            hardworking farmers.
          </div>
          <div className="book py-3">
            <Link to={"/farming"}>
              <Button title="ABOUT ⤴" />
            </Link>
          </div>
        </div>
        <div className="image-area flex flex-col w-3/4 justify-center items-center">
          <img
            className="pt-14"
            style={{ height: "66vh" }}
            src={Person}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
