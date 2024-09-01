import React from "react";
import Logo from "../assets/pictures/png/iNaya.png";

const Footer = () => {
  return (
    <div className="bg-gradient-to-b from-seed to-white text-black rounded-t-3xl mt-32 mx-14">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className="w-full md:w-1/4 flex justify-center items-center">
          <h1 className="font-semibold text-xl pb-4">
            <img src={Logo} alt="" />
          </h1>
        </div>
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Links</h1>
          <nav className="flex flex-col gap-2">
            <a
              className="hover:text-backgroundColor transition-all cursor-pointer"
              href="menu"
            >
              Menu
            </a>
            <a
              className="hover:text-backgroundColor transition-all cursor-pointer"
              href="about"
            >
              About Us
            </a>
            <a
              className="hover:text-backgroundColor transition-all cursor-pointer"
              href="products"
            >
              Products
            </a>
            <a
              className="hover:text-backgroundColor transition-all cursor-pointer"
              href="reviews"
            >
              Reviews
            </a>
          </nav>
        </div>

        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Menu</h1>
          <nav className="flex flex-col gap-2">
            <a
              className="hover:text-backgroundColor transition-all cursor-pointer"
              href="menu"
            >
              Cappuccino
            </a>
            <a
              className="hover:text-backgroundColor transition-all cursor-pointer"
              href="about"
            >
              Latte
            </a>
            <a
              className="hover:text-backgroundColor transition-all cursor-pointer"
              href="products"
            >
              Americano
            </a>
          </nav>
        </div>

        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
          <nav className="flex flex-col gap-2">
            <a
              className="hover:text-backgroundColor transition-all cursor-pointer"
              href="menu"
            >
              jewel.himalayan.2021@gmail.com
            </a>
            <a className="transition-all cursor-pointer" href="about">
              +977{" "}
              <a
                className="hover:text-backgroundColor"
                href="tel: +977 9817576110"
              >
                9817576110,{" "}
              </a>
              <a
                className="hover:text-backgroundColor"
                href="tel: +977 9841208219"
              >
                9841208219
              </a>
            </a>
            <a
              className="hover:text-backgroundColor transition-all cursor-pointer"
              href="products"
            >
              Social Media
            </a>
          </nav>
        </div>
      </div>
      <div className="text-xs font-medium">
        <p className="text-center py-2">
          @copyrights developed by
          <span className="text-brightColor"> iNaya.Inc </span>| All rights
          reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
