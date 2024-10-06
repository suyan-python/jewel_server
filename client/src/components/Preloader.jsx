import React, { useEffect } from "react";
import "./preloader.css";
import { preLoaderAnim } from "../../src/components/animations/index";

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);

  return (
    <div className="preloader">
      <div className="preloader-content">
        <div className="texts-container">
          <span>Jewel</span>
          <span>Himalayan</span>
          <span>Products</span>
        </div>
      </div>
    </div>
  );
};

export default PreLoader;
