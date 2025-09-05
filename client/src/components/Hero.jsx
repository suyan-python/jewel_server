import Jewel from "../assets/pictures/logo/logo2.png";
import JHPback from "../assets/pictures/coffeepics/herobean.jpg";

function Hero()
{
  return (
    <header
      className="relative w-full h-[72vh] md:h-screen flex items-center justify-center overflow-hidden rounded-3xl shadow-lg mt-7"
      role="banner"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-50"
        style={{ backgroundImage: `url(${JHPback})` }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 flex flex-col items-center gap-4">
        {/* Logo */}
        {/* <div className="bg-white rounded-full p-3 shadow-md w-32 h-32 flex items-center justify-center mb-4">
          <img
            src={Jewel}
            alt="Jewel Himalayan Products logo – specialty coffee Nepal"
            className="object-contain h-full"
            loading="lazy"
          />
        </div> */}

        {/* Headline */}
        <h1 className="text-3xl md:text-7xl font-bold text-white tracking-tight drop-shadow-sm">
          Organic Arabica Coffee from Ilam, Nepal
        </h1>

        {/* Sub-tagline */}

        <div className="subheader">

          <h1 className="text-2xl md:text-4xl font-medium text-white tracking-wide">
            From seeds to cup
          </h1>
          <h2 className="text-base md:text-2xl font-medium text-white tracking-wide my-4">
            High-Altitude • Single Origin • Direct Trade
          </h2>

          {/* Minimal SEO line */}
          <p className="text-sm md:text-base text-slate-200 max-w-lg leading-relaxed">
            Freshly roasted beans—{' '}
            <a
              href="https://store.jewelhimalayanproducts.com"
              className="font-bold underline text-green-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy Coffee
            </a>.
          </p>
        </div>

      </div>
    </header>
  );
}

export default Hero;
