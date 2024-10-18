import React, { useEffect, useState } from "react";
import { SiInstagram, SiFacebook } from "react-icons/si";
import { useLocation } from "react-router-dom";

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
          <h1 className="font-semibold text-sm md:text-lg">
            Jewel Himalayan Products
          </h1>
        </div>

        {/* Links */}
        <div className="hidden md:block mb-4 md:mb-0">
          <h1 className="font-medium text-sm md:text-lg pb-3">Links</h1>
          <nav className="flex flex-col gap-2 text-xs md:text-base">
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="/menu"
            >
              Menu
            </a>
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="/about"
            >
              About Us
            </a>
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="/products"
            >
              Products
            </a>
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="/reviews"
            >
              Reviews
            </a>
          </nav>
        </div>

        {/* Mission Statement */}
        <div className="w-full md:w-1/4">
          <h1 className="font-medium text-sm md:text-lg pb-3">Our Mission</h1>
          <p className="text-xs md:text-base text-gray-600">
            At iNaya Cafe, we’re passionate about crafting the finest coffee
            from the rich soils of Illam. Every cup tells the story of our
            commitment to sustainability, quality, and supporting women in
            coffee farming.
          </p>
        </div>

        {/* Contact Info */}
        {/* Contact Info */}
        <div className="w-full md:w-1/4 footer-contact">
          <h1 className="font-medium text-sm md:text-lg pb-3">Contact Us</h1>
          <nav className="flex flex-col gap-2 text-xs md:text-base">
            <a
              href="mailto:jewel.himalayan.2021@gmail.com"
              className="hover:text-brightColor transition-all"
            >
              jewel.himalayan.2021@gmail.com
            </a>
            <a
              href="tel:+9779817576110"
              className="hover:text-brightColor transition-all"
            >
              +977 9817576110, 9841208219
            </a>
            <div className="social-medias flex gap-6 pt-2">
              <a
                href="https://www.instagram.com/inaya_cafe_2023/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red transition-all"
              >
                <SiInstagram size={30} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61556765843404"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brightColor transition-all"
              >
                <SiFacebook size={30} />
              </a>
            </div>
          </nav>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-xs md:text-sm text-center py-4 font-medium">
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
