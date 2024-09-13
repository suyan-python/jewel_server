import React from "react";
import { SiInstagram, SiFacebook } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-seed to-white text-black rounded-t-3xl mt-16 md:mt-32 mx-4 md:mx-14 footer">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        {/* Company Name - Centered on mobile */}
        <div className="w-full md:w-1/4 flex justify-center md:justify-start items-center mb-6 md:mb-0">
          <h1 className="font-semibold text-lg md:text-xl">
            Jewel Himalayan Products
          </h1>
        </div>

        {/* Links - Hidden on Mobile */}
        <div className="hidden md:block mb-6 md:mb-0">
          <h1 className="font-medium text-lg md:text-xl pb-4">Links</h1>
          <nav className="flex flex-col gap-2 text-sm md:text-base">
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="menu"
            >
              Menu
            </a>
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="about"
            >
              About Us
            </a>
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="products"
            >
              Products
            </a>
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="reviews"
            >
              Reviews
            </a>
          </nav>
        </div>

        {/* Menu - Hidden on Mobile */}
        <div className="hidden md:block mb-6 md:mb-0">
          <h1 className="font-medium text-lg md:text-xl pb-4">Menu</h1>
          <nav className="flex flex-col gap-2 text-sm md:text-base">
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="menu"
            >
              Cappuccino
            </a>
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="about"
            >
              Latte
            </a>
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="products"
            >
              Americano
            </a>
          </nav>
        </div>

        {/* Contact - Centered on mobile */}
        <div className="w-full md:w-auto flex flex-col items-center md:items-start mb-6 md:mb-0">
          <h1 className="font-medium text-lg md:text-xl pb-4">Contact Us</h1>
          <nav className="flex flex-col gap-2 text-sm md:text-base text-center md:text-left">
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="mailto:jewel.himalayan.2021@gmail.com"
            >
              jewel.himalayan.2021@gmail.com
            </a>
            <a
              className="transition-all cursor-pointer"
              href="tel:+9779817576110"
            >
              +977{" "}
              <a className="hover:text-brightColor" href="tel:+9779817576110">
                9817576110,
              </a>
              <a className="hover:text-brightColor" href="tel:+9779841208219">
                {" "}
                9841208219
              </a>
            </a>
            {/* Social Media */}
            <div className="social-medias flex gap-6 pt-2 justify-center md:justify-start">
              <a
                className="hover:text-red transition-all cursor-pointer"
                href="https://www.instagram.com/inaya_cafe_2023/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiInstagram size={35} />
              </a>
              <a
                className="hover:text-brightColor transition-all cursor-pointer"
                href="https://www.facebook.com/profile.php?id=61556765843404"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiFacebook size={35} />
              </a>
            </div>
          </nav>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-sm text-center py-4">
        <p>
          &copy; developed by
          <span className="text-seed">
            {" "}
            <b className="bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
              Jewel Himalayan Org.
            </b>{" "}
          </span>{" "}
          | All rights reserved | 2023
        </p>
      </div>
    </footer>
  );
};

export default Footer;
