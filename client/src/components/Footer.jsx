import React, { useEffect, useState } from "react";
import { SiInstagram, SiFacebook } from "react-icons/si";
import { NavLink, useLocation } from "react-router-dom";
import Jewel from "../assets/pictures/png/jhp.png";

import "./Footer.css";

const Footer = () => {
  const location = useLocation();
  const [bgColor, setBgColor] = useState("bg-gradient-to-b from-seed to-white");

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setBgColor("bg-gradient-to-b from-brownn to-white");
        break;
      case "/farming":
        setBgColor("bg-gradient-to-b from-green-700 to-white");
        break;
      case "/process":
        setBgColor("bg-gradient-to-b from-black to-white");
        break;
      case "/sustainability":
        setBgColor("bg-gradient-to-b from-pink-700 to-white");
        break;
      case "/contact":
        setBgColor("bg-gradient-to-b from-gray-500 to-white");
        break;
      case "/order":
        setBgColor("bg-gradient-to-b from-orange-500 to-white");
        break;
      case "/inaya":
        setBgColor("bg-gradient-to-b from-amber-900 to-white");
        break;
      default:
        setBgColor("bg-gradient-to-b from-seed to-white");
        break;
    }
  }, [location]);

  if (location.pathname === "/inaya/home" || location.pathname === "/inaya") {
    return null; // Return null to hide the Navbar on this page
  }

  return (
    <footer
      className={`${bgColor} text-black rounded-t-3xl mt-12 md:mt-16 mx-4 md:mx-14 mb-36 lg:mb-14 md:mb-32`}
    >
      <div className="flex flex-col md:flex-row justify-between p-6 md:p-8 md:px-32 px-5 gap-6 md:gap-8">
        {/* Company Name */}
        <div className="w-full md:w-1/4 flex justify-center md:justify-start items-center mb-4 md:mb-0">
          <img src={Jewel} alt="" />
        </div>

        {/* Links */}
        <div className="hidden md:block mb-4 md:mb-0">
          <h1 className="font-medium text-sm text-white md:text-lg pb-3">
            Links
          </h1>
          <nav className="flex flex-col gap-2 text-xs md:text-base">
            <NavLink
              className="hover:text-white transition-all cursor-pointer"
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className="hover:text-white transition-all cursor-pointer"
              to="/farming"
            >
              About Us
            </NavLink>
            <NavLink
              className="hover:text-white transition-all cursor-pointer"
              to="/source"
            >
              Sources
            </NavLink>
            <NavLink
              className="hover:text-white transition-all cursor-pointer"
              to="/process"
            >
              Process
            </NavLink>
            <NavLink
              className="hover:text-white transition-all cursor-pointer"
              to="/sustainability"
            >
              Sustainability
            </NavLink>
            <NavLink
              className="hover:text-white transition-all cursor-pointer"
              to="/contact"
            >
              Contact
            </NavLink>
          </nav>
        </div>

        {/* Mission Statement */}
        <div className="w-full md:w-1/4">
          <h1 className="font-medium text-sm text-white md:text-lg pb-3">
            Our Vision
          </h1>
          <p className="text-xs md:text-base text-gray-900 hover:text-white transition">
            Our vision is to be an epitome of a producer-consumer company by
            serving the finest coffee beans. We offer 100% natural Arabica
            coffee beans to our customers, while delivering on our promise to
            give more than we take from our farmers, the environment, and
            planet.
          </p>
        </div>

        <div className="w-full md:w-1/4 footer-contact">
          <h1 className="font-medium text-sm text-white md:text-lg pb-3">
            Contact Us
          </h1>
          <nav className="flex flex-col gap-2 text-xs md:text-base">
            <a
              href="mailto:jewel.himalayan.2021@gmail.com"
              className="hover:text-white transition-all"
            >
              jewel.himalayan.2021@gmail.com
            </a>
            <a
              href="tel:+9779817576110"
              className="hover:text-white transition-all"
            >
              +977 9817576110
            </a>
            <a
              href="tel:++9779841208219"
              className="hover:text-white transition-all"
            >
              +977 9841208219
            </a>
            <div className="social-medias flex gap-6 pt-2">
              <a
                href="https://www.instagram.com/inaya_cafe_2023/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <SiInstagram size={30} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61556765843404"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-all"
              >
                <SiFacebook size={30} />
              </a>
            </div>
          </nav>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-[10px] md:text-sm text-center py-4 font-medium">
        <p>
          &copy;2022 developed by{" "}
          <b className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            Jewel Himalayan
          </b>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
