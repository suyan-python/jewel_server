import React from "react";
import Button from "../layouts/Button";
import Cup from "../assets/pictures/person/avatar6.PNG";
import { Link } from "react-router-dom";
import Home2 from "./Home2";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-screen bg-cafe bg-cover bg-center flex flex-col items-center justify-center py-16 px-4 lg:px-16 rounded-3xl">
        {/* Overlay for Text and Image */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Content Section */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10 rounded-3xl p-8 bg-white bg-opacity-80 backdrop-blur-md shadow-xl">
          {/* Text Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-8">
            <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight">
              Start Your Day with
              <br />
              <span className="text-yellow-500">iNaya Coffee</span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-700 font-medium">
              Boost your productivity and elevate your mood with the mystical
              aroma of iNaya coffee, grown sustainably by smallholder farmers.
            </p>

            {/* Button Section */}
            <div className="flex flex-col lg:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/about">
                <Button title="ABOUT US" color="primary" />
              </Link>
              <Link to="/product">
                <Button title="VIEW PRODUCTS" color="secondary" />
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            <img
              className="w-72 h-72 lg:w-96 lg:h-96 rounded-full object-cover shadow-2xl transform hover:scale-105 transition duration-500 ease-in-out"
              src={Cup}
              alt="Mystical Coffee Cup"
            />
            {/* Floating Text Box */}
            <div className="absolute top-4 right-0 bg-yellow-400 px-6 py-3 rounded-full shadow-lg animate-bounce">
              <h2 className="text-white text-lg font-bold">
                The Coffee Is Really Good!
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Home2 Section */}
      <div className="py-12">
        <Home2 />
      </div>
    </>
  );
};

export default Home;
