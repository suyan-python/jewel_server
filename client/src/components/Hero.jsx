import Jewel from "../assets/pictures/png/jhp.png";
import JHPback from "../assets/pictures/coffeepics/herobean.jpg";

function Hero() {
  return (
    // <div className="bg-herobean bg-cover bg-center rounded-3xl h-auto md:mt-7">
    //   <div className="flex flex-col md:flex-row-reverse rounded-3xl shadow-xl py-16 md:py-32">
    //     <div className="text-area w-full flex flex-col text-center items-center px-6 bg-white bg-opacity-10 backdrop-blur-md rounded-lg py-24">
    //       <div className="slog text-3xl md:text-4xl  rounded-full flex justify-center w-3/4 md:w-2/6  py-3 px-4 gap-3  mb-4">
    //         <img src={Jewel} alt="" />
    //       </div>

    //       <div className="title text-4xl md:text-5xl lg:text-6xl py-4 font-bold text-white tracking-tight leading-snug animated-gradient-text">
    //         From Seeds to Cup
    //       </div>

    //       <div className="description text-slate-200 w-full md:w-3/4 lg:w-2/3 text-base md:text-lg lg:text-xl leading-relaxed py-2">
    //         <strong className="animated-gradient-text text-xl">
    //           Jewel Himalayan Products (JHP)
    //         </strong>{" "}
    //         delivers premium Nepali Arabica coffee to connoisseurs worldwide,
    //         while celebrating the dedication and expertise of our hardworking
    //         farmers.
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="relative w-full h-[72vh] md:h-screen flex items-center justify-center overflow-hidden rounded-3xl shadow-lg mt-7">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center filter brightness-50 blur-sm scale-110"
        style={{
          backgroundImage: `url(${JHPback})`,
        }}
      ></div>

      {/* Overlay Content */}
      <div className="relative z-10 text-center px-6 flex flex-col items-center gap-6">
        {/* Logo */}
        <div className="bg-white bg-opacity-90 rounded-full p-3 shadow-md w-52 h-52 flex items-center justify-center mb-6">
          <img src={Jewel} alt="Jewel Logo" className="object-contain h-full" />
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-wide leading-snug drop-shadow-lg animate-fadeIn">
          From Seeds to Cup
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl lg:text-2xl text-slate-200 max-w-2xl leading-relaxed animate-fadeIn delay-200">
          <strong className="bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500 text-transparent bg-clip-text">
            Jewel Himalayan Products (JHP)
          </strong>{" "}
          delivers premium Nepali Arabica coffee to connoisseurs worldwide,
          celebrating the expertise of our hardworking farmers.
        </p>
      </div>
    </div>
  );
}

export default Hero;
