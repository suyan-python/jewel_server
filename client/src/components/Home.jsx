import React from "react";
import Cup from "../assets/pictures/person/avatar6.PNG";
import { Link, useNavigate } from "react-router-dom";
import inaya from "../assets/pictures/png/iNaya.png";

const Home = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/inaya/home");
  };

  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-screen bg-cafe bg-cover bg-center bg-fixed right-0 left-0 w-full flex flex-col items-center justify-center py-16 px-4 lg:px-16  my-16">
        {/* Animated overlay with gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-0 opacity-75 animate-gradient-xy"></div>

        {/* Content Section */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10  p-8 bg-white bg-opacity-40  shadow-xl transition-all duration-500 ease-in-out transform ">
          {/* Text Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-8">
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Start Your Day in <br />
              <img src={inaya} alt="" />
            </h1>
            <p className="text-lg lg:text-xl text-gray-700 font-medium max-w-lg mx-auto lg:mx-0">
              Boost your productivity and elevate your mood with the mystical
              aroma of iNaya coffee, grown sustainably by smallholder farmers.
              Every cup is a step toward a better world.
            </p>

            {/* Button Section with Hover Effects */}
            <div className="flex flex-col lg:flex-row gap-4 justify-center lg:justify-start">
              {/* <Link to="/about">
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
              </Link> */}
              {/* <div className="mt-8 z-20">
                <button
                  onClick={handleRedirect}
                  className="bg-amber-900 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 hover:shadow-2xl hover:scale-105"
                >
                  Explore More
                </button>
              </div> */}
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
            <div className="absolute top-4 right-0 bg-green-700 px-6 py-3 rounded-full shadow-lg animate-bounce transform hover:scale-105">
              <h2 className="text-white text-lg font-bold">
                The Coffee Is Really Good!
              </h2>
            </div>
          </div>
        </div>

        {/* Redirect Button Section */}
      </div>
    </>
  );
};

export default Home;
