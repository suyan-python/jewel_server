import React from "react";
import Person from "../../assets/pictures/person/avatar9.png";
import Button from "../../layouts/Button";
import Title from "../../layouts/Title";
import { Link } from "react-router-dom";

function ProcessHero() {
  return (
    <>
      <div className=" bg-processback bg-cover rounded-3xl ">
        <div className="flex flex-row-reverse justify-around h-2/4 rounded-3xl shadow-sm py-52 backdrop-blur-sm">
          <div className="text-area flex flex-col w-3/4 text-center justify-center items-center ">
            <div className="slog rounded-full flex w-2/5 justify-center px-3 py-2 gap-3">
              <Title />
            </div>
            <div className="title text-5xl py-3 font-medium w-3/4 text-white">
              Our Coffee Processing from scratch
            </div>
            <div className="description text-slate-200 w-2/3">
              We source our delicious, premium Arabica from our sister company,
              Jewel Himalayan Coffee Beans (JHCB), in Province No 1, Ilam
              district.
            </div>
            <div className="book py-3">
              <Link to={"/contact"}>
                {/* <Button title="Contact JHP for premium Arabic from the Himalaya ⤴" /> */}
              </Link>
            </div>
          </div>
          <div className="image-area flex flex-col w-3/4 justify-center items-center">
            {/* <img className="" style={{ height: "80vh" }} src={Person} alt="" /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProcessHero;
