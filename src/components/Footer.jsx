import React from "react";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-[#FFDCAB] to-[#AB6B2E] text-black rounded-t-3xl mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className="w-full md:w-1/4">
          <h1 className="font-semibold text-xl pb-4">iNaya</h1>
          <p className="text-sm">
            Welcome to our official website! Explore out aromatic brews, Savor
            artisanal flavors and discover the perfect roas to elevate your
            daily ritual.
          </p>
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
              mail@gmail.com
            </a>
            <a
              className="hover:text-backgroundColor transition-all cursor-pointer"
              href="about"
            >
              +977 9800000000
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
        <p className="text-center py-4">
          @copyrights developed by
          <span className="text-backgroundColor"> iNaya.Inc </span>| All rights
          reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
