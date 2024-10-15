import React from "react";
import { Link, useLocation } from "react-router-dom";

const FooterBT = () => {
  const location = useLocation();

  // Determine background color based on the current path
  const getNavbarBackgroundColor = () => {
    switch (location.pathname) {
      case "/":
        return "bg-[#6A3E36]";
      case "/process":
        return "bg-black";
      case "/farming":
        return "bg-prim";
      case "/sustainability":
        return "bg-pink-700";
      case "/contact":
        return "bg-gray-500";
      case "/order":
        return "bg-orange-700";
      case "/inaya":
        return "bg-amber-900";
      default:
        return "bg-gray-800";
    }
  };

  if (
    location.pathname === "/inaya/home" ||
    location.pathname === "/inaya/order"
  ) {
    return null; // Return null to hide the Navbar on this page
  }

  return (
    <footer
      className={`${getNavbarBackgroundColor()} text-white py-2 w-full fixed bottom-0 left-0 z-50`}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Logo or main link */}
        <Link
          to="/"
          className="text-lg md:text-2xl font-bold hover:text-yellow-400 transition duration-300 mb-4 md:mb-0"
        >
          Details
        </Link>

        {/* Information section */}
        <div className="flex flex-row md:text-xs md:flex-row space-y-2 md:space-y-0 md:space-x-6">
          {/* Information items */}
          <div className=" hidden flex-col lg:flex items-center space-x-2 animate-pulse">
            <div>
              <span className="font-semibold text-xs md:text-sm">
                Purified Beans:
              </span>
            </div>
            <div>
              <span className="text-yellow-300 text-xs md:text-sm">
                High Quality
              </span>
            </div>
          </div>

          <div className="flex-col  justify-center lg:flex items-center space-x-2 animate-pulse">
            <div>
              <span className="font-semibold text-xs md:text-sm">
                Location:
              </span>
            </div>

            <div>
              <span className="text-yellow-300 text-xs md:text-sm">
                Balkhu, Kathmandu
              </span>
            </div>
          </div>

          <div className="flex-col lg:flex items-center space-x-2 animate-pulse">
            <div>
              <span className="font-semibold text-xs md:text-sm">Contact:</span>
            </div>
            <div>
              <a
                href="tel:+9779851174646"
                className="text-yellow-300 text-xs md:text-sm"
              >
                +977 9851174646
              </a>
            </div>
          </div>

          <div className="flex-col lg:flex justify-center items-center space-x-2 animate-pulse">
            <div>
              <span className="font-semibold text-xs md:text-sm">Email:</span>
            </div>
            <div>
              <a
                href="mailto:jewel.himalayan.2021@gmail.com"
                className="text-yellow-300 text-xs md:text-sm"
              >
                jewel.himalayan.2021@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterBT;
