import React, { useState, useEffect } from "react";
// Import local images
import Coffee1 from "../assets/pictures/coffeepics/beans.jpg";
import Coffee2 from "../assets/pictures/coffeepics/coffeehand.jpg";
import Coffee3 from "../assets/pictures/coffeepics/cup.png";
import Coffee4 from "../assets/pictures/coffeepics/herobean.jpg";

const images = [Coffee1, Coffee2, Coffee3, Coffee4]; // Use imported images

const Home2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToNextSlide = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsAnimating(false);
    }, 500);
  };

  const goToPreviousSlide = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
      setIsAnimating(false);
    }, 500);
  };

  return (
    <div className="relative w-full h-64 md:h-80 lg:h-96 xl:h-[32rem] overflow-hidden rounded-3xl shadow-lg">
      {/* Images */}
      <div className="absolute inset-0 flex justify-center items-center">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out transform ${
              currentIndex === index
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95"
            }`}
          >
            <img
              src={img}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover rounded-3xl shadow-lg"
            />
          </div>
        ))}
      </div>

      {/* Previous and Next Buttons */}
      <button
        onClick={goToPreviousSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-yellow-500 text-white p-3 rounded-full hover:bg-yellow-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300"
      >
        &#10094;
      </button>

      <button
        onClick={goToNextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-yellow-500 text-white p-3 rounded-full hover:bg-yellow-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-300"
      >
        &#10095;
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3">
        {images.map((_, index) => (
          <span
            key={index}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? "bg-yellow-500 scale-125 shadow-lg"
                : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>

      {/* Slide Description */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-80 rounded-lg p-4 shadow-md">
        <h2 className="text-lg font-bold text-gray-800">
          Experience the Aroma
        </h2>
        <p className="text-gray-600">
          Discover the rich flavors of our sustainable coffee.
        </p>
      </div>
    </div>
  );
};

export default Home2;
