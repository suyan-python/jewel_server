import Button from "../layouts/Button";
import { Link } from "react-router-dom";
import iNaya from "../assets/pictures/png/iNaya.png"; // ✅ use WebP
import JHCB from "../assets/pictures/png/JHCB.jpg";   // ✅ use WebP

function Hero2()
{
  return (
    <section className="py-16 px-4 lg:px-10">
      <h2 className="text-center font-bold text-4xl md:text-5xl text-red-700 mb-16">
        Our Businesses
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 h-[72vh]">
        {/* JHCB Section */}
        <article className="relative flex justify-center items-center rounded-2xl shadow-lg overflow-hidden bg-farm bg-cover transition-transform transform hover:scale-[1.02]">
          <div className="flex flex-col justify-center items-center h-96 gap-6 bg-black bg-opacity-10 hover:bg-opacity-30 text-white text-center p-8 transition-all rounded-2xl">
            <img
              className="w-32 md:w-64 rounded-xl shadow-lg"
              src={JHCB}
              alt="Jewel Himalayan Coffee Beans - JHCB"
              loading="lazy"
            />

            <Link to="/farming">
              <Button
                className="font-semibold text-lg md:text-xl text-white bg-green-700 bg-opacity-40 px-6 py-3 rounded-full hover:bg-green-600 transition-transform transform hover:scale-105 shadow-md"
                title="Visit Our Farm"
              />
            </Link>
          </div>
        </article>

        {/* Mystical Section - Placeholder for future use */}
        <article className="rounded-2xl  shadow-xl bg-mystical bg-cover flex items-center justify-center text-center text-white p-6 transition-all hover:scale-[1.02]">
          {/* Optional Future Content */}
        </article>

        {/* iNaya Cafe Section */}
        <article className="rounded-2xl shadow-lg bg-cafe bg-cover p-6 md:p-8 lg:p-10 flex flex-col justify-center items-center transition-transform transform hover:scale-[1.02]">
          <div className="bg-black bg-opacity-20 hover:bg-opacity-30 p-6 md:p-8 rounded-2xl h-96 w-full flex flex-col items-center justify-center gap-6 text-white shadow-md transition-all">
            <img
              className="w-32 md:w-72 rounded-2xl bg-white shadow-md transition-transform transform hover:scale-105"
              src={iNaya}
              alt="iNaya Cafe Logo - Coffee & Food"
              loading="lazy"
            />

            <Link to="/inaya">
              <Button
                className="font-semibold text-lg md:text-xl text-white bg-green-700 bg-opacity-40 px-6 py-3 rounded-full hover:bg-green-600 transition-transform transform hover:scale-105 shadow-md"
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
