import React from "react";
import Button from "../layouts/Button";
import Cup from "../assets/pictures/person/avatar6.PNG";
import { Link } from "react-router-dom";
import Home2 from "./Home2";

const Home = () => {
  return (
    <>
      <div className="relative min-h-screen bg-cafe bg-cover bg-center flex flex-col items-center justify-center py-16 px-4 lg:px-16 rounded-3xl">
        {/* Overlay for Text and Image */}
        <div className="absolute inset-0 bg-black opacity-30"></div>

        <div className="relative z-10 flex flex-col lg:flex-row lg:justify-between items-center gap-10 rounded-3xl p-8 bg-white bg-opacity-70 shadow-lg">
          {/* Text Section */}
          <div className="w-full lg:w-2/4 text-center lg:text-left space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Start Your Day with
              <br />
              <span className="text-yellow-500">iNaya</span>
            </h1>
            <p className="text-md lg:text-lg text-gray-700 font-medium">
              Boost your productivity and elevate your mood with Mystical
              Coffee.
            </p>

            {/* Buttons */}
            <div className="flex flex-col lg:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/about">
                <Button title="ABOUT ⤴" />
              </Link>
              <Link to="/product">
                <Button title="PRODUCTS ⤴" />
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative">
            <img
              className="w-64 h-64 lg:w-96 lg:h-96 rounded-full object-cover shadow-2xl"
              src={Cup}
              alt="Mystical Coffee Cup"
            />
            {/* Floating Text Box */}
            <div className="absolute top-4 right-0 bg-yellow-400 px-4 py-2 rounded-full shadow-lg animate-bounce">
              <h2 className="text-white font-semibold">
                The Coffee Is Really Good!
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="py-7">
        <Home2 />
      </div>
    </>
  );
};

export default Home;
