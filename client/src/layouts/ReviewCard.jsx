import React from "react";
import { TbStarFilled, TbStarHalfFilled } from "react-icons/tb";
import { FaQuoteRight } from "react-icons/fa6";

const ReviewCard = (props) => {
  return (
    <div className="flex flex-col w-full lg:w-2/6 bg-white p-3 rounded-lg gap-3">
      <div className="flex flex-row items-center lg:justify-start justify-center">
        <div className="w-1/4">
          <img className="rounded-full" src={props.img} alt="img" />
        </div>
        <div className="mx-3">
          <h2 className="font-semibold text-lg">{props.title}</h2>
          <div className="flex">
            <TbStarFilled className="text-brightColor" />
            <TbStarFilled className="text-brightColor" />
            <TbStarFilled className="text-brightColor" />
            <TbStarFilled className="text-brightColor" />
            <TbStarHalfFilled className="text-brightColor" />
          </div>
        </div>
        <span className="ml-16">
          <FaQuoteRight className="text-backgroundColor" size={42} />
        </span>
      </div>
      <p>Reviews Created Dynamically</p>
    </div>
  );
};

export default ReviewCard;
