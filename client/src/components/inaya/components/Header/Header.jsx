import React from "react";
import eating from "../../assets/eating.svg";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./Header.css";

function Header() {
  return (
    <>
      <Navbar />
      <div
        className="header bg-orange-600 p-8 md:p-16 rounded-xl shadow-lg text-center md:text-left flex justify-end"
        id="inaya-home"
      >
        <div className="header-contents max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Order your favorite food here
          </h2>
          <p className="text-gray-700 text-lg md:text-xl mb-6">
            Choose from a diverse menu featuring a delectable array of dishes
            crafted with the finest ingredients and culinary expertise. Our
            mission is to satisfy your cravings and elevate your dining
            experience, one delicious meal at a time.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 ease-in-out shadow-md hover:shadow-lg">
            View Menu
          </button>
        </div>
        <div className="image-area w-2/6">
          <img src={eating} alt="" />
        </div>
      </div>

      {/* Floating Button */}
      <Link
        to="/"
        className="floating-button fixed bottom-4 right-4 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition duration-300 ease-in-out z-40"
      >
        Go to Jewel Himalayan
      </Link>
    </>
  );
}

export default Header;
