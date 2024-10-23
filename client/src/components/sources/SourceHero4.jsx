import React from "react";
import { Link } from "react-router-dom";

function SourceHero4() {
  return (
    <div>
      <div className="relative h-screen w-full overflow-hidden">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="https://cdn.pixabay.com/video/2024/09/14/231479_tiny.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Content over the video */}
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold tracking-wide drop-shadow-lg transition-opacity duration-1000 opacity-0 animate-fade_in">
            Our Sources
          </h1>
          <p className="mt-4 text-lg lg:text-2xl font-light lg:font-medium drop-shadow-md transition-opacity duration-1000 opacity-0 animate-slide_up">
            We source coffee from small-scale Arabica farmers:
          </p>

          <div className="flex flex-col lg:flex-row justify-center gap-7 text-2xl lg:text-3xl font-medium py-7 transition-opacity duration-1000 opacity-0 animate-fade_in_delayed">
            <div className="hover:text-green-400 transition-colors duration-300">
              Kavre
            </div>
            <div className="hover:text-green-400 transition-colors duration-300">
              Sindupalchok
            </div>
            <div className="hover:text-green-400 transition-colors duration-300">
              Illam
            </div>
          </div>

          <Link to={"/farming"}>
            <button className="mt-6 px-8 py-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-transform duration-300 transform hover:scale-105 shadow-lg">
              Explore More
            </button>
          </Link>
        </div>

        {/* Overlay to darken the video */}
        <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>
      </div>
    </div>
  );
}

export default SourceHero4;
