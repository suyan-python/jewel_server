import React from "react";
import "./footer.css";
import { assets } from "../../assets/assets";
import iNaya from "../../../../assets/pictures/png/iNaya.png";

const Footer = () => {
  return (
    <div
      className="footer bg-gradient-to-b from-green-800 to-white text-white py-10 rounded-3xl mt-20"
      id="footer"
    >
      <div className="container mx-auto px-4">
        <div className="footer-content flex flex-col md:flex-row justify-between">
          <div className="footer-content-left w-full md:w-1/3 mb-8 md:mb-0">
            <div className="footer-logo mb-4">
              <img src={iNaya} alt="iNaya Cafe Logo" className="h-20" />
            </div>
            <p className="text-base font-bold leading-relaxed">
              We got the best cafe in town. Its not only the cafe but also you
              can find many other different items.
            </p>
            <div className="footer-social-icons flex  mt-4">
              <img src={assets.facebook_icon} alt="Facebook" className="w-6" />
              <img src={assets.twitter_icon} alt="Twitter" className="w-6" />
              <img src={assets.linkedin_icon} alt="LinkedIn" className="w-6" />
            </div>
          </div>
          <div className="footer-content-center w-full md:w-1/3 mb-8 md:mb-0">
            <h2 className="text-lg font-semibold mb-2">COMPANY</h2>
            <ul className="text-sm">
              <li className="mb-1 hover:text-green-400 cursor-pointer">Home</li>
              <li className="mb-1 hover:text-green-400 cursor-pointer">
                About Us
              </li>
              <li className="mb-1 hover:text-green-400 cursor-pointer">
                Delivery
              </li>
              <li className="hover:text-green-400 cursor-pointer">
                Privacy Policy
              </li>
            </ul>
          </div>
          <div className="footer-content-right w-full md:w-1/3">
            <h2 className="text-lg font-semibold mb-2">Get in Touch</h2>
            <ul className="text-sm">
              <li className="mb-1">
                <a href="tel:+977 9828293162">9828293162</a>
              </li>
              <li className="hover:text-green-400 cursor-pointer">
                <a href="mailto: inayacafe@gmail.com"> inayacafe@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-6 border-gray-700" />
        <p className="footer-copyright text-center text-sm text-green-800">
          &copy; {new Date().getFullYear()} All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
