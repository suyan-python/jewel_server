import React from "react";
// import { BsFillStarFill } from "react-icons/bs";
import { TbStarFilled, TbStarHalfFilled } from "react-icons/tb";

import Button from "./Button";

const ProductCard = (props) => {
  return (
    <div className="w-full lg:w-1/4 bg-white p-3 rounded-lg">
      <img className="rounded-lg" src={props.img} alt="" />
      <div className="flex flex-col items-center mt-5 gap-3">
        <h2 className="font-semibold text-xl"> {props.title} </h2>
        <div className="flex">
          <TbStarFilled className="text-brightColor" />
          <TbStarFilled className="text-brightColor" />
          <TbStarFilled className="text-brightColor" />
          <TbStarFilled className="text-brightColor" />
          <TbStarHalfFilled className="text-brightColor" />
        </div>
        <h3 className="font-semibold text-lg">$15.99</h3>
        <Button title="Add To Card" />
      </div>
    </div>
  );
};

export default ProductCard;
