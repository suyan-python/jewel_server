import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import iNaya from "../../../../assets/pictures/png/iNaya.png";
import Modal from "../../../Modal";

const Navbar = ({ esetShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [isOpen, setIsOpen] = useState(false); // For mobile menu toggle
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: "inaya-home", name: "home" },
        { id: "explore-menu", name: "menu" },
        { id: "app-download", name: "mobile-app" },
        { id: "footer", name: "contact-us" },
      ];

      const scrollPosition = window.scrollY + 200; // Adding some offset

      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const sectionTop = element.offsetTop;
          const sectionHeight = element.offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setMenu(section.name);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement your search logic here
    // For example, you can filter items based on searchTerm
    console.log("Searching for:", searchTerm);
  };

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
          className={`navbar-menu md:flex md:items-center md:space-x-6 absolute md:static bg-white md:bg-transparent transition-transform duration-300  ${
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
                setIsOpen(false); // Close menu on a click
              }}
              className={`block px-4 py-2 text-gray-800 hover:text-green-600 ${
                menu === "home" ? "font-semibold text-green-600" : ""
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
                menu === "menu" ? "font-semibold text-green-600" : ""
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
                menu === "mobile-app" ? "font-semibold text-green-600" : ""
              }`}
            >
              Location
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
                menu === "contact-us" ? "font-semibold text-green-600" : ""
              }`}
            >
              Contact Us
            </a>
          </li>

          {/* Search Section */}
          {/* <li className="md:flex md:items-center">
            <form onSubmit={handleSearch} className="flex items-center">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <button
                type="submit"
                className="ml-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
              >
                Search
              </button>
            </form>
          </li> */}

          {/* Mobile Menu and Cart Buttons */}
          <li className="lg:hidden flex flex-col items-center space-y-2 my-4 ">
            <button
              className=" px-4 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition"
              onClick={() => setShowModal(true)}
              title="Menu"
            >
              Menu
            </button>
            {showModal && <Modal onClose={() => setShowModal(false)} />}
          </li>
        </ul>

        <div className="navbar-right hidden md:flex items-center space-x-4 ">
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
