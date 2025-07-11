import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Jewel from "../assets/pictures/logo/logo.jpg";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Set scrolled true if scrolling down, false if scrolling up
      if (currentScrollY > 10 && currentScrollY > lastScrollY) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "JHP", path: "/" },
    { name: "JHCB", path: "/farming" },
    { name: "Sources", path: "/source" },
    { name: "Process", path: "/process" },
    { name: "Sustainability", path: "/sustainability" },
    { name: "Store", path: "/store" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 py-2 px-4 md:px-8 lg:px-16 transition-all duration-400
    ${scrolled ? "bg-white  shadow-md  rounded-full mx-20 my-2" : " py-7"}
  `}
    >
      <div className="flex items-center justify-between mx-4 md:mx-8 lg:mx-16 relative">
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img src={Jewel} alt="Logo" className="h-14 w-auto" />
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 lg:gap-10 text-[16px] font-medium text-gray-700">
          {navLinks.map(({ name, path }) => (
            <NavLink
              key={name}
              to={path}
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-green-700 font-semibold border-b-2 border-green-700 pb-0.5"
                  : "hover:text-green-600 transition"
              }
            >
              {name}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Store Button */}
        <div className="hidden md:flex">
          <a
            href="https://store.jewelhimalayanproducts.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-md text-white font-semibold text-sm md:text-base 
              bg-gradient-to-r from-green-400 via-blue-500 to-purple-500
              bg-[length:200%_200%] animate-gradient-x
              transition-transform duration-300 hover:scale-105 shadow-md"
          >
            Visit Store
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center z-50">
          <button onClick={toggleMenu}>
            {menuOpen ? (
              <AiOutlineClose size={26} />
            ) : (
              <AiOutlineMenu size={26} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute top-[70px] left-0 w-full bg-white  transition-all duration-300 ease-in-out ${
          menuOpen
            ? "max-h-[500px] py-4 shadow-lg rounded-3xl"
            : "max-h-0 overflow-hidden"
        }`}
      >
        <nav className="flex flex-col items-center gap-4 text-base font-medium text-gray-800">
          {navLinks.map(({ name, path }) => (
            <NavLink
              key={name}
              to={path}
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive
                  ? "text-green-700 font-semibold"
                  : "hover:text-green-600 transition"
              }
            >
              {name}
            </NavLink>
          ))}

          <a
            href="https://store.jewelhimalayanproducts.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-5 py-2 rounded-full bg-gradient-to-r from-green-400 to-blue-500 text-white animate-gradient-x
              transition-transform duration-300 font-semibold text-sm shadow hover:scale-105 "
          >
            Visit Store
          </a>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
