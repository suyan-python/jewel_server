import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../layouts/Button";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import Modal from "./Modal";
import Title from "../layouts/Title";

import "./NavBar.css";

const NavBar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  const [showModal, setShowModal] = useState(false);

  return (
    <div className="w-full z-100">
      <div>
        <div className="flex flex-row justify-between p-5 lg:px-32 px-5">
          <div className="flex flex-row items-center cursor-pointer gap-2">
            {/* <span>
              <FiCoffee size={25} />
            </span> */}
            <Title />
          </div>

          <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
            <NavLink
              to="/"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer hover:text-seed"
            >
              Home
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </NavLink>
            <NavLink
              to="/farming"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer hover:text-seed about"
            >
              About Us
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </NavLink>
            <NavLink
              to="/source"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer hover:text-seed"
            >
              Sources
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </NavLink>
            <NavLink
              to="/process"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer hover:text-[#78350f] process"
            >
              Process
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </NavLink>

            <NavLink
              to="/contact"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer hover:text-blue contact"
            >
              Contact
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </NavLink>
          </nav>

          <div className="hidden lg:flex">
            <button
              className="px-6 py-1 border-2 border-white hover:text-seed transition-all rounded-full"
              onClick={() => setShowModal(true)}
              title="Menu"
            >
              Menu
            </button>
            {showModal && <Modal onClose={() => setShowModal(false)} />}
          </div>

          <div className="md:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={25} onClick={handleChange} />
            ) : (
              <AiOutlineMenuUnfold size={25} onClick={handleChange} />
            )}
          </div>
        </div>
        <div
          className={`${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-black text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300 z-10`}
        >
          <NavLink
            to="/"
            spy={true}
            smooth={true}
            duration={500}
            className="group relative inline-block cursor-pointer hover:text-seed"
            onClick={closeMenu}
          >
            Home
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
          </NavLink>
          {/* <NavLink
            to="menu"
            spy={true}
            smooth={true}
            duration={500}
            className="group relative inline-block cursor-pointer hover:text-seed"
            onClick={closeMenu}
          >
            Menu
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
          </NavLink> */}
          <NavLink
            to="/farming"
            spy={true}
            smooth={true}
            duration={500}
            className="group relative inline-block cursor-pointer hover:text-seed"
            onClick={closeMenu}
          >
            About Us
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
          </NavLink>
          <NavLink
            to="/source"
            spy={true}
            smooth={true}
            duration={500}
            className="group relative inline-block cursor-pointer hover:text-seed"
            onClick={closeMenu}
          >
            Sources
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
          </NavLink>
          <NavLink
            to="/process"
            spy={true}
            smooth={true}
            duration={500}
            className="group relative inline-block cursor-pointer hover:text-seed"
            onClick={closeMenu}
          >
            Process
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
          </NavLink>

          <NavLink
            to="/contact"
            spy={true}
            smooth={true}
            duration={500}
            className="group relative inline-block cursor-pointer hover:text-seed"
            onClick={closeMenu}
          >
            Contact
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
          </NavLink>

          <button
            className="px-6 py-1 border-2 border-white hover:text-seed transition-all rounded-full"
            onClick={() => setShowModal(true)}
            title="Menu"
          >
            Menu
          </button>
          {showModal && <Modal onClose={() => setShowModal(false)} />}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
