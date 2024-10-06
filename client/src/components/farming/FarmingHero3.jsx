import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "./farm.css"; // Custom CSS for styling

const FarmingHero3 = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <>
      <div className="text-center pt-8">
        <p className="font-medium text-3xl lg:text-5xl text-green-600">
          From our Farm
        </p>
      </div>
      <section className="slider my-3">
        <FaArrowAltCircleLeft
          className="left-arrow text-3xl lg:text-5xl"
          onClick={prevSlide}
        />
        <FaArrowAltCircleRight
          className="right-arrow text-3xl lg:text-5xl"
          onClick={nextSlide}
        />
        {SliderData.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <img
                  src={slide.image}
                  alt="Farm Image"
                  className="image w-full h-60 lg:h-96 object-cover"
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
