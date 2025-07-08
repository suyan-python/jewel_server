import React from "react";
import Button from "../../layouts/Button";
import { Link } from "react-router-dom";
import background from "../../assets/pictures/background/aboutus.JPG";

function FarmingHero() {
  return (
    <section
      className="relative rounded-3xl overflow-hidden mt-7"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      aria-label="Premium Arabica Coffee Farming Section"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0" />

      <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between px-6 lg:px-16 py-20 lg:py-44 text-white">
        {/* Text Section */}
        <div className="w-full lg:w-3/4 max-w-5xl text-center lg:text-left">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-3">
            Jewel Himalayan Coffee Beans
          </h2>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Premium Arabica Coffee from the Himalayas
          </h1>

          <p className="text-slate-200 text-sm sm:text-base lg:text-lg font-medium max-w-2xl mx-auto lg:mx-0 mb-6">
            We source our delicious, premium Arabica from our sister company,
            Jewel Himalayan Coffee Beans (JHCB), in Province No. 1, Ilam
            district.
          </p>

          <Link to="/contact">
            <Button
              className="text-green-400 hover:text-green-500 font-medium transition duration-300"
              title="Contact JHP for Premium Arabica from the Himalaya"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FarmingHero;
