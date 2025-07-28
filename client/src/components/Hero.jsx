import Jewel from "../assets/pictures/logo/logo.jpg";
import JHPback from "../assets/pictures/coffeepics/herobean.jpg";

function Hero()
{
  return (
    <header
      className="relative w-full h-[72vh] md:h-screen flex items-center justify-center overflow-hidden rounded-3xl shadow-lg mt-7"
      role="banner"
    >
      <div
        className="absolute inset-0 bg-cover bg-center brightness-50"
        style={{ backgroundImage: `url(${JHPback})` }}
        aria-hidden="true"
      ></div>

      <div className="relative z-10 text-center px-6 flex flex-col items-center gap-4">
        <div className="bg-white rounded-full p-3 shadow-md w-32 h-32 flex items-center justify-center mb-4">
          <img
            src={Jewel}
            alt="Jewel Himalayan Products Logo"
            className="object-contain h-full"
            loading="lazy"
          />
        </div>

        <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-wide leading-snug drop-shadow-sm">
          Experience Nepali Coffee Like Never Before
        </h1>
        <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-wide leading-snug drop-shadow-sm">
          From seeds to cup
        </h2>

        <p className="text-base md:text-lg text-slate-200 max-w-xl leading-relaxed">
          <strong className="bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500 text-transparent bg-clip-text">
            Jewel Himalayan Products (JHP)
          </strong>{" "}
          proudly delivers 100% organic, high-altitude grown Arabica coffee beans from the pristine hills of Illam, Nepal. Discover the journey <em>from seed to cup</em> and taste the richness of authentic Himalayan coffee.
        </p>

      </div>
    </header>
  );
}

export default Hero;
