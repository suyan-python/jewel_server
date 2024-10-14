import React from "react";
import Button from "../layouts/Button";
import Cup from "../assets/pictures/person/avatar6.PNG";
import { Link, useNavigate } from "react-router-dom";
import Home2 from "./Home2";

const Home = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/inaya/home");
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-screen bg-cafe bg-cover bg-center flex flex-col items-center justify-center py-16 px-4 lg:px-16 rounded-3xl">
        {/* Animated overlay with gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-0 opacity-75 animate-gradient-xy"></div>

        {/* Content Section */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10 rounded-3xl p-8 bg-white bg-opacity-40 backdrop-blur-md shadow-xl transition-all duration-500 ease-in-out transform ">
          {/* Text Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-8">
            <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900 leading-tight">
              Start Your Day with <br />
              <span className="text-yellow-500 underline underline-offset-4">
                iNaya Coffee
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-gray-700 font-medium max-w-lg mx-auto lg:mx-0">
              Boost your productivity and elevate your mood with the mystical
              aroma of iNaya coffee, grown sustainably by smallholder farmers.
              Every cup is a step toward a better world.
            </p>

            {/* Button Section with Hover Effects */}
            <div className="flex flex-col lg:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/about">
                <Button
                  title="ABOUT US"
                  color="primary"
                  additionalClasses="hover:bg-yellow-400 transform hover:scale-105 transition ease-in-out duration-300"
                />
              </Link>
              <Link to="/product">
                <Button
                  title="VIEW PRODUCTS"
                  color="secondary"
                  additionalClasses="hover:bg-gray-800 transform hover:scale-105 transition ease-in-out duration-300"
                />
              </Link>
            </div>
          </div>

          {/* Image Section with Floating Effect */}
          <div className="relative flex justify-center items-center">
            <img
              className="w-72 h-72 lg:w-96 lg:h-96 rounded-full object-cover shadow-2xl transition-transform duration-500 ease-in-out transform hover:scale-110 hover:rotate-3"
              src={Cup}
              alt="Mystical Coffee Cup"
            />
            {/* Floating Text Box with Animations */}
            <div className="absolute top-4 right-0 bg-yellow-500 px-6 py-3 rounded-full shadow-lg animate-bounce transform hover:scale-105">
              <h2 className="text-white text-lg font-bold">
                The Coffee Is Really Good!
              </h2>
            </div>
          </div>
        </div>

        {/* Redirect Button Section */}
        <div className="mt-8 z-20">
          <button
            onClick={handleRedirect}
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 hover:shadow-2xl hover:scale-105"
          >
            Explore More
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
