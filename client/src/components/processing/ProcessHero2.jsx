import React from "react";
import Button from "../../layouts/Button"; // Assuming you still want to use this
import "./Process.css";
import ExpandableDivs from "./Expandable";

function ProcessHero2() {
  return (
    <div className="relative w-full h-screen overflow-hidden rounded-3xl my-7">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto" // Added preload attribute
      >
        <source
          src="https://videos.pexels.com/video-files/6770222/6770222-uhd_2560_1440_24fps.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* ExpandableDivs Content Overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-10 p-4 lg:p-12">
        <ExpandableDivs />
      </div>
    </div>
  );
}

export default ProcessHero2;
