import React from "react";
import Logo from "../../assets/pictures/png/iNaya.png";
import Person from "../../assets/pictures/person/farmer.jpg";
import Button from "../../layouts/Button";
import Title from "../../layouts/Title";
import { Link } from "react-router-dom";

function FarmingHero() {
  return (
    <div className="">
      <div className="flex justify-around h-2/4 rounded-3xl shadow-sm bg-gradient-to-r from-seed to-white py-4">
        <div className="ext-area flex flex-col w-3/4 text-center justify-center items-center">
          <div className="slog rounded-full flex w-2/5 justify-center px-3 py-2 gap-3">
            <Title />
          </div>
          <div className="title text-5xl py-3 font-medium w-3/4 ">
            Premium Arabica coffee from the Himalaya
          </div>
          <div className="description text-slate-500 w-2/3">
            We source our delicious, premium Arabica from our sister company,
            Jewel Himalayan Coffee Beans (JHCB), in Province No 1, Ilam
            district.
          </div>
          <div className="book py-3">
            <Link to={"/about"}>
              <Button title="Contact JHP for premium Arabic from the Himalaya ⤴" />
            </Link>
          </div>
        </div>
        <div className="image-area flex flex-col w-3/4 justify-center items-center">
          <img
            className="pt-14 rounded-full shadow-lg"
            style={{ height: "80vh" }}
            src={Person}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default FarmingHero;
