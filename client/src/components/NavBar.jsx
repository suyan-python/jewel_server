import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenuUnfold } from "react-icons/ai";
import Modal from "./Modal";
import Title from "../layouts/Title";
import Jewel from "../assets/pictures/png/jhp.png";

import "./NavBar.css";
import NavbarTop from "./FooterBt";
import Button from "../layouts/Button";

const NavBar = () => {
  const [menu, setMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const location = useLocation();

  const handleMenuToggle = () => setMenu(!menu);
  const closeMenu = () => setMenu(false);

  if (location.pathname === "/inaya/home" || location.pathname === "/inaya") {
    return null;
  }

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between py-2 mx-4 md:mx-8 lg:mx-16 relative">
        {/* JHP Store Button (Mobile Left) */}
        <div className="flex md:hidden absolute left-4">
          <a
            href="https://jewelhimalayanproducts.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-md bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold text-sm md:text-base lg:text-lg transition-transform duration-300 hover:scale-105"
          >
            JHP Store
          </a>
        </div>

        {/* Logo (Center on mobile, left on desktop) */}
        <div className="flex items-center w-auto md:w-auto mx-auto md:mx-0">
          <NavLink to={"/"}>
            <img src={Jewel} alt="Logo" className="h-14 mx-auto md:mx-0" />
          </NavLink>
        </div>

        {/* Desktop Nav Links (Center) */}
        <div>
          <nav className="hidden md:flex gap-8 text-lg font-medium ml-8">
            <NavLink
              to="/"
              className="nav-link"
              activeClassName="active"
              onClick={closeMenu}
            >
              JHP
            </NavLink>
            <NavLink
              to="/farming"
              className="nav-link"
              activeClassName="active"
              onClick={closeMenu}
            >
              JHCB
            </NavLink>
            <NavLink
              to="/source"
              className="nav-link"
              activeClassName="active"
              onClick={closeMenu}
            >
              Sources
            </NavLink>
            <NavLink
              to="/process"
              className="nav-link"
              activeClassName="active"
              onClick={closeMenu}
            >
              Process
            </NavLink>
            <NavLink
              to="/sustainability"
              className="nav-link"
              activeClassName="active"
              onClick={closeMenu}
            >
              Sustainability
            </NavLink>
            <NavLink
              to="/contact"
              className="nav-link"
              activeClassName="active"
              onClick={closeMenu}
            >
              Contact
            </NavLink>
          </nav>
        </div>

        {/* JHP Store Button (Desktop Right) */}
        <div className="hidden md:flex">
          <a
            href="https://jewelhimalayanproducts.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-md bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold text-sm md:text-base lg:text-lg transition-transform duration-300 hover:scale-105"
          >
            JHP Store
          </a>
        </div>

        {/* Hamburger Menu (Mobile Right) */}
        <div className="md:hidden absolute right-4">
          {menu ? (
            <AiOutlineClose size={25} onClick={handleMenuToggle} />
          ) : (
            <AiOutlineMenuUnfold size={25} onClick={handleMenuToggle} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menu ? "open" : ""}`}>
        <NavLink
          to="/"
          className="mobile-nav-link"
          activeClassName="active"
          onClick={closeMenu}
        >
          Home
        </NavLink>
        <NavLink
          to="/farming"
          className="mobile-nav-link"
          activeClassName="active"
          onClick={closeMenu}
        >
          About Us
        </NavLink>
        <NavLink
          to="/source"
          className="mobile-nav-link"
          activeClassName="active"
          onClick={closeMenu}
        >
          Sources
        </NavLink>
        <NavLink
          to="/process"
          className="mobile-nav-link"
          activeClassName="active"
          onClick={closeMenu}
        >
          Process
        </NavLink>
        <NavLink
          to="/sustainability"
          className="mobile-nav-link"
          activeClassName="active"
          onClick={closeMenu}
        >
          Sustainability
        </NavLink>
        <NavLink
          to="/contact"
          className="mobile-nav-link"
          activeClassName="active"
          onClick={closeMenu}
        >
          Contact
        </NavLink>
      </div>
    </header>
  );
};

export default NavBar;
