import React from "react";
import "./footer.css";
import { assets } from "../../assets/assets";
import iNaya from "../../../../src/assets/pictures/png/iNaya.png";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <div className="footer-logo">
            <img src={iNaya} alt="" />
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
            eveniet, magnam harum quisquam, error deleniti, corporis ab vero
            totam atque eaque perspiciatis a aperiam laudantium. Distinctio
            harum sed fugiat impedit?
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get in Touch</h2>
          <ul>
            <li>9800000000</li>
            <li>rii@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">All rights reserved</p>
    </div>
  );
};

export default Footer;
