import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom"; // Import useLocation
import { AiOutlineClose, AiOutlineMenuUnfold } from "react-icons/ai";
import Modal from "./Modal";
import Title from "../layouts/Title";
import Jewel from "../assets/pictures/png/jhp.png";

import "./NavBar.css";
import NavbarTop from "./FooterBt";

const NavBar = () => {
  const [menu, setMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const location = useLocation(); // Hook to get the current location

  const handleMenuToggle = () => setMenu(!menu);
  const closeMenu = () => setMenu(false);

  // Conditionally hide Navbar if on /inaya/home
  if (location.pathname === "/inaya/home" || location.pathname === "/inaya") {
    return null; // Return null to hide the Navbar on this page
  }

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center py-2 mx-8 md:px-8 lg:px-16 ">
        <div className="flex items-center  text-orange-600 text-2xl w-1/6 md:w-1/12">
          <NavLink to={"/"}>
            {/* <Title /> */}
            <img src={Jewel} alt="" />
          </NavLink>
        </div>

        <nav className="hidden md:flex flex-row items-center gap-8 text-lg font-medium">
          <NavLink
            to="/"
            className="nav-link"
            activeClassName="active"
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/farming"
            className="nav-link"
            activeClassName="active"
            onClick={closeMenu}
          >
            About Us
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

        <div className="md:hidden flex items-center">
          {menu ? (
            <AiOutlineClose size={25} onClick={handleMenuToggle} />
          ) : (
            <AiOutlineMenuUnfold size={25} onClick={handleMenuToggle} />
          )}
        </div>
      </div>

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
        <button
          className="menu-button"
          onClick={() => setShowModal(true)}
          title="Menu"
        >
          Menu
        </button>
        {showModal && <Modal onClose={() => setShowModal(false)} />}
      </div>
    </header>
  );
};

export default NavBar;
