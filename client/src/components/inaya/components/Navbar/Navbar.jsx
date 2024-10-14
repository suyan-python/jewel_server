import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import iNaya from "../../../../src/assets/pictures/png/iNaya.png";
import { assets } from "../../assets/assets";

const Navbar = ({ esetShowLogin }) => {
  const [menu, setMenu] = useState("menu");
  const [isOpen, setIsOpen] = useState(false); // For mobile menu toggle

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/inaya/home">
          <img className="logo" src={iNaya} alt="iNaya Logo" />
        </Link>

        {/* Hamburger Menu (for mobile view) */}
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        {/* Menu Links */}
        <ul className={`navbar-menu ${isOpen ? "open" : ""}`}>
          <Link
            to="/inaya/home"
            onClick={() => {
              setMenu("home");
              setIsOpen(false); // Close menu on link click
            }}
            className={menu === "home" ? "active" : ""}
          >
            home
          </Link>
          <a
            href="#explore-menu"
            onClick={() => {
              setMenu("menu");
              setIsOpen(false);
            }}
            className={menu === "menu" ? "active" : ""}
          >
            menu
          </a>
          <a
            href="#app-download"
            onClick={() => {
              setMenu("mobile-app");
              setIsOpen(false);
            }}
            className={menu === "mobile-app" ? "active" : ""}
          >
            mobile-app
          </a>
          <a
            href="#footer"
            onClick={() => {
              setMenu("contact-us");
              setIsOpen(false);
            }}
            className={menu === "contact-us" ? "active" : ""}
          >
            contact-us
          </a>
        </ul>

        {/* Right Section (Search and Sign-in) */}
        <div className="navbar-right">
          <img src={assets.search_icon} alt="Search" className="icon" />
          <div className="navbar-cart">
            <img src={assets.basket_icon} alt="Cart" className="icon" />
            <div className="dot"></div>
          </div>
          <button onClick={() => esetShowLogin(true)} className="sign-in-btn">
            sign in
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
