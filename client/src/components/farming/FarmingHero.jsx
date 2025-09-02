import React from "react";
import Button from "../../layouts/Button";
import { Link } from "react-router-dom";
import background from "../../assets/pictures/background/aboutus.JPG";

function FarmingHero()
{
  return (
    <section
      className="relative rounded-3xl overflow-hidden mt-7 h-[90vh]"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      aria-label="Premium Arabica Coffee Farming Section"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30 z-0" />

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 lg:px-16 py-20 lg:py-44 text-white">
        {/* Text Section */}
        <div className="w-full lg:w-3/4 max-w-5xl text-center lg:text-left">
          <h2 className="text-xl lg:text-2xl font-medium tracking-wider text-green-300 uppercase mb-3">
            Jewel Himalayan Coffee Beans (JHCB)
          </h2>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
            Premium Himalayan Arabica Coffee <br className="hidden md:inline" />
            Grown in the Heart of Ilam
          </h1>

          <p className="subheader text-slate-200 text-base sm:text-lg lg:text-xl font-normal max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
            Discover the rich flavors of <strong>Jewel Himalayan Arabica Coffee</strong>, cultivated at high altitudes in the lush hills of
            <strong> Ilam, Province No. 1</strong>. Handpicked, carefully processed, and ethically sourced, our beans offer a smooth and aromatic taste experience cherished by coffee lovers globally.
          </p>

          <Link to="/contact">
            <Button
              className="bg-green-500 text-white hover:bg-green-600 px-6 py-3 rounded-full font-semibold transition duration-300 shadow-md"
              title="Get in Touch to Order Premium Nepalese Coffee"
            />

          </Link>
        </div>
      </div>

    </section>
  );
}

export default FarmingHero;
