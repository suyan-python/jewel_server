import React, { useState } from "react";
import { Link } from "react-router-dom";
import iNaya from "../../../../assets/pictures/png/iNaya.png";
import { assets } from "../../assets/assets";
import Modal from "../../../Modal";

const Navbar = ({ esetShowLogin }) => {
  const [menu, setMenu] = useState("menu");
  const [isOpen, setIsOpen] = useState(false); // For mobile menu toggle
  const [showModal, setShowModal] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <Link to="/inaya/home">
          <img className="h-10" src={iNaya} alt="iNaya Logo" />
        </Link>

        {/* Hamburger Menu (for mobile view) */}
        <div
          className="md:hidden flex flex-col cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={`bar h-1 w-6 bg-gray-800 mb-1 transition-transform ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`bar h-1 w-6 bg-gray-800 mb-1 transition-opacity ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`bar h-1 w-6 bg-gray-800 transition-transform ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </div>

        {/* Menu Links */}
        <ul
          className={`navbar-menu md:flex md:items-center md:space-x-6 absolute md:static bg-white md:bg-transparent transition-transform duration-300 ${
            isOpen
              ? "top-12 left-0 w-full flex flex-col md:flex-row md:space-x-0"
              : "top-[-200px] md:top-0"
          }`}
        >
          <li>
            <a
              href="#inaya-home"
              onClick={() => {
                setMenu("home");
                setIsOpen(false); // Close menu on link click
              }}
              className={`block px-4 py-2 text-gray-800 hover:text-green-600 ${
                menu === "home" ? "font-semibold" : ""
              }`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#explore-menu"
              onClick={() => {
                setMenu("menu");
                setIsOpen(false);
              }}
              className={`block px-4 py-2 text-gray-800 hover:text-green-600 ${
                menu === "menu" ? "font-semibold" : ""
              }`}
            >
              Menu
            </a>
          </li>
          <li>
            <a
              href="#app-download"
              onClick={() => {
                setMenu("mobile-app");
                setIsOpen(false);
              }}
              className={`block px-4 py-2 text-gray-800 hover:text-green-600 ${
                menu === "mobile-app" ? "font-semibold" : ""
              }`}
            >
              Mobile App
            </a>
          </li>
          <li>
            <a
              href="#footer"
              onClick={() => {
                setMenu("contact-us");
                setIsOpen(false);
              }}
              className={`block px-4 py-2 text-gray-800 hover:text-green-600 ${
                menu === "contact-us" ? "font-semibold" : ""
              }`}
            >
              Contact Us
            </a>
          </li>
        </ul>

        {/* Right Section (Search and Sign-in) */}
        <div className="navbar-right hidden md:flex items-center space-x-4">
          <img src={assets.search_icon} alt="Search" className="icon w-6 h-6" />
          <div className="navbar-cart relative">
            <img src={assets.basket_icon} alt="Cart" className="icon w-6 h-6" />
            <div className="dot absolute top-0 right-0 bg-red-500 rounded-full w-3 h-3"></div>
          </div>

          <div className="hidden lg:flex">
            <button
              className="menu-button"
              onClick={() => setShowModal(true)}
              title="Menu"
            >
              Menu
            </button>
            {showModal && <Modal onClose={() => setShowModal(false)} />}
          </div>

          {/* <button
            onClick={() => esetShowLogin(true)}
            className="sign-in-btn bg-green-500 text-white px-4 py-2 rounded transition duration-300 hover:bg-green-600"
          >
            Sign In
          </button> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
