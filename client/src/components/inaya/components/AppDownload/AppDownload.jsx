import React from "react";
import "./AppDownload.css";
import { assets } from "../../assets/assets";
import Footer from "../Footer/Footer";

const AppDownload = () => {
  return (
    <>
      <div
        className="app-download flex flex-col items-center justify-center bg-gray-100 p-8 md:p-16 rounded-lg shadow-lg"
        id="app-download"
      >
        <p className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          We are located <br />
        </p>
      </div>
      <Footer />
    </>
  );
};

export default AppDownload;
