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
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.520341992527!2d85.33081317619344!3d27.670308227122806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19b9079a4adb%3A0xab20f3b73dc8adac!2sINAYA%20CAFE!5e0!3m2!1sen!2snp!4v1728903597700!5m2!1sen!2snp"
            width="600"
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AppDownload;
