import React, { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import Button from "../../layouts/Button";

// Use `new URL().toString()` for static file import efficiency in Vite
import JHCBImage from "../../assets/pictures/png/JHCB.jpg";

function ProcessHero() {
  return (
    <section
      className="relative bg-processback bg-cover bg-center bg-no-repeat rounded-3xl overflow-hidden lg:mt-7"
      aria-label="Coffee Processing Section"
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-60 rounded-3xl"></div>

      <div className="flex flex-col-reverse lg:flex-row justify-center items-center lg:items-start lg:justify-between h-auto lg:h-[70vh] rounded-3xl shadow-lg py-10 lg:py-20 px-5 lg:px-16 relative z-10">
        {/* Text Area */}
        <div className="flex flex-col lg:items-start w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4 drop-shadow-md">
            Our Coffee Processing from Scratch
          </h2>
          <p className="text-slate-200 text-base lg:text-lg mb-6 px-4 lg:px-0 font-medium">
            We source our delicious, premium Arabica from our sister company,
            Jewel Himalayan Coffee Beans (JHCB), in Province No. 1, Ilam
            district.
          </p>
          <Link to="/contact" className="block">
            <Button
              title="Contact JHP for premium Arabica from the Himalaya"
              className="transition-transform transform hover:scale-105 text-white"
            />
          </Link>
        </div>

        {/* Optimized Image Section */}
        <div className="relative w-full lg:w-1/3 mt-6 lg:mt-0 lg:ml-4 p-2">
          <img
            src={JHCBImage}
            alt="Jewel Himalayan Coffee Beans"
            loading="lazy"
            width="480"
            height="320"
            className="w-full h-auto rounded-xl shadow-xl border border-white"
          />
        </div>
      </div>
    </section>
  );
}

export default ProcessHero;
