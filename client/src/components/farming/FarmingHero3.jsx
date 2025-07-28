import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "./farm.css"; // Custom CSS for styling

const FarmingHero3 = ({ slides }) =>
{
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () =>
  {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () =>
  {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0)
  {
    return null;
  }

  return (
    <>
      <div className="text-center py-8">
        <p className="font-semibold text-3xl lg:text-5xl text-green-700">
          From our Farm
        </p>
      </div>
      <section className="slider relative w-full h-96 lg:h-[70vh] overflow-hidden my-3 rounded-3xl">
        <FaArrowAltCircleLeft
          className="left-arrow absolute top-1/2 transform -translate-y-1/2 left-8 text-3xl lg:text-5xl text-white cursor-pointer z-10"
          onClick={prevSlide}
        />
        <FaArrowAltCircleRight
          className="right-arrow absolute top-1/2 transform -translate-y-1/2 right-8 text-3xl lg:text-5xl text-white cursor-pointer z-10"
          onClick={nextSlide}
        />
        {SliderData.map((slide, index) =>
        {
          return (
            <div
              className={`slide ${index === current ? "active" : ""
                } w-full h-full`}
              key={index}
            >
              {index === current && (
                <img
                  src={slide.image}
                  alt="Farm Image"
                  className="image w-full h-full object-cover shadow-lg"
                />
              )}
            </div>
          );
        })}
      </section>
    </>
  );
};

export default FarmingHero3;
