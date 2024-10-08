import React from "react";
import { Link, useLocation } from "react-router-dom";

const FooterBT = () => {
  const location = useLocation();

  // Determine background color based on the current path
  const getNavbarBackgroundColor = () => {
    switch (location.pathname) {
      case "/":
        return "bg-seed"; // Color for Process section
      case "/process":
        return "bg-black"; // Color for Process section
      case "/farming":
        return "bg-prim"; // Color for Farming section
      case "/sustainability":
        return "bg-pink-400"; // Color for Sustainability section
      case "/contact":
        return "bg-gray-500"; // Color for Sustainability section
      default:
        return "bg-gray-800"; // Default color
    }
  };

  return (
    <footer
      className={`${getNavbarBackgroundColor()} text-white py-4 w-full fixed bottom-0 left-0`}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        <Link
          to="/"
          className="text-2xl font-bold hover:text-yellow-400 transition duration-300 mb-4 md:mb-0"
        >
          Details
        </Link>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
          <div className="flex items-center space-x-2 animate-pulse">
            <span className="font-semibold">Purified Beans:</span>
            <span className="text-yellow-300">High Quality</span>
          </div>
          <div className="flex items-center space-x-2 animate-pulse">
            <span className="font-semibold">Location:</span>
            <span className="text-yellow-300">Illam</span>
          </div>
          <div className="flex items-center space-x-2 animate-pulse">
            <span className="font-semibold">Contact:</span>
            <span className="text-yellow-300">+977 98000000</span>
          </div>
          <div className="flex items-center space-x-2 animate-pulse">
            <span className="font-semibold">Email:</span>
            <span className="text-yellow-300">jewelhimalayanproducts</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterBT;
