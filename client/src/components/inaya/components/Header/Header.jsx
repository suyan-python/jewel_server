import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./Header.css";
import Cart from "../../pages/Cart/Cart";
import Modal from "../../../Modal";

function Header() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Navbar />

      <div className="bg-cafe bg-cover bg-center h-auto py-32">
        <div className="p-8 md:p-16 rounded-xl " id="inaya-home">
          <div className="header-contents max-w-xl mx-auto md:max-w-4xl flex flex-col items-center md:items-start bg-orange-500 bg-opacity-30 backdrop-blur-sm p-7 py-20 rounded-xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 text-center md:text-left">
              Order your favorite food here
            </h2>
            <p className="text-gray-200 text-lg md:text-xl mb-6 text-center md:text-left">
              Choose from a diverse menu featuring a delectable array of dishes
              crafted with the finest ingredients and culinary expertise. Our
              mission is to satisfy your cravings and elevate your dining
              experience, one delicious meal at a time.
            </p>
            <div className="flex gap-8">
              <div>
                <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 ease-in-out shadow-md hover:shadow-lg">
                  View Menu
                </button>
              </div>
              <div className="navbar-right hidden md:flex items-center space-x-4 ">
                <div className="hidden lg:flex">
                  <button
                    className="menu-button"
                    onClick={() => setShowModal(true)}
                    title="Menu"
                  >
                    Download Menu
                  </button>
                  {showModal && <Modal onClose={() => setShowModal(false)} />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Existing Floating Buttons */}
      <div className="flex flex-row">
        <div>
          <Link
            to="/"
            className="floating-button fixed bottom-4 right-4 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition duration-300 ease-in-out z-40"
          >
            Go to Jewel Himalayan
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
