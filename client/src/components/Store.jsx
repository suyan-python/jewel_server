import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import storeImage from "../assets/pictures/background/store.JPG"; // Optional background image

const Store = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#fdfaf6] to-[#f5f3ed] flex items-center justify-center px-6 py-20 rounded-3xl">
      {/* Optional Background Image Overlay */}
      <div
        className="absolute inset-0  bg-cover bg-center rounded-3xl"
        style={{ backgroundImage: `url(${storeImage})` }}
      ></div>

      <div className="relative z-10 max-w-4xl text-center bg-white/10 rounded-3xl shadow-2xl p-10 md:p-16 backdrop-blur-sm backdrop-saturate-150">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
          Your Himalayan Wellness Journey Begins Here
        </h1>

        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Explore our exclusive store filled with naturally processed coffee,
          herbal blends, and organic treasures from Illam. Sourced ethically,
          crafted with care.
        </p>

        <Link
          to="https://store.jewelhimalayanproducts.com/store"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-semibold text-lg px-6 py-3 rounded-full transition duration-200 shadow-lg hover:shadow-xl"
        >
          <FaShoppingBag className="text-xl" />
          Visit Our Online Store
        </Link>

        <p className="text-sm text-white mt-6 font-semibold">
          Secure checkout · Fast delivery · Direct from the Himalayas
        </p>
      </div>
    </div>
  );
};

export default Store;
