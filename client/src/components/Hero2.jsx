import Button from "../layouts/Button";
import { Link } from "react-router-dom";
import iNaya from "../assets/pictures/png/iNaya.png";
import JHCB from "../assets/pictures/png/JHCB.jpg";

function Hero2()
{
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-12">
      {/* Title */}
      <h2 className="text-center font-bold text-3xl sm:text-4xl md:text-5xl text-red-700 mb-10 sm:mb-14">
        Our Businesses
      </h2>

      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* JHCB Section */}
        <article className="relative flex justify-center items-center rounded-2xl shadow-lg overflow-hidden bg-farm bg-cover transition-transform duration-300 hover:scale-[1.02]">
          <div className="flex flex-col justify-center items-center w-full 
            h-72 sm:h-80 md:h-96 lg:h-[72vh] 
            gap-6 bg-black bg-opacity-20 hover:bg-opacity-30 text-white text-center p-6 sm:p-8 transition-all rounded-2xl">
            <img
              className="w-28 sm:w-40 md:w-56 rounded-xl shadow-lg object-contain"
              src={JHCB}
              alt="Jewel Himalayan Coffee Beans - JHCB"
              loading="lazy"
            />

            <Link to="/farming">
              <Button
                className="font-semibold text-base sm:text-lg md:text-xl text-white bg-green-700 bg-opacity-40 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full hover:bg-green-600 transition-transform duration-300 hover:scale-105 shadow-md"
                title="Visit Our Farm"
              />
            </Link>
          </div>
        </article>

        {/* Mystical Section - Placeholder */}
        <article className="rounded-2xl shadow-xl bg-mystical bg-cover flex items-center justify-center text-center text-white p-6 transition-all duration-300 hover:scale-[1.02] 
          h-72 sm:h-80 md:h-96 lg:h-[72vh]">
          {/* Reserved for future business */}
        </article>

        {/* iNaya Cafe Section */}
        <article className="rounded-2xl shadow-lg bg-cafe bg-cover flex flex-col justify-center items-center transition-transform duration-300 hover:scale-[1.02]">
          <div className="bg-black bg-opacity-20 hover:bg-opacity-30 p-6 sm:p-8 rounded-2xl 
            h-72 sm:h-80 md:h-96 lg:h-[72vh] 
            w-full flex flex-col items-center justify-center gap-6 text-white shadow-md transition-all">
            <img
              className="w-28 sm:w-40 md:w-60 rounded-2xl bg-white shadow-md transition-transform duration-300 hover:scale-105 object-contain"
              src={iNaya}
              alt="iNaya Cafe Logo - Coffee & Food"
              loading="lazy"
            />

            <Link to="/inaya">
              <Button
                className="font-semibold text-base sm:text-lg md:text-xl text-white bg-green-700 bg-opacity-40 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full hover:bg-green-600 transition-transform duration-300 hover:scale-105 shadow-md"
                title="Visit Us"
              />
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Hero2;
