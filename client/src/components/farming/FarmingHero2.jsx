import Binayak from "../../assets/pictures/person/binayak.jpg";
import Shekhar from "../../assets/pictures/person/shekhar.jpg";
import Bijaya from "../../assets/pictures/person/bijaya.jpeg";

function FarmingHero2()
{
  return (
    <section className="flex flex-col justify-center items-center p-5 bg-[#F9FAF9]">
      {/* Title Section */}
      <div className="title flex flex-col justify-center items-center my-8 p-7 w-full lg:w-3/4 shadow-lg rounded-2xl bg-white">
        <h2 className="text-3xl lg:text-5xl font-semibold text-green-700 text-center">
          Meet the Leadership Behind Jewel Himalayan Coffee Beans
        </h2>
        <p className="subheader text-center py-4 text-base lg:text-lg text-gray-700 max-w-2xl">
          <strong>Jewel Himalayan Coffee Beans (JHCB)</strong> is a Nepal-based, officially registered <strong>Private Limited Company</strong> committed to quality and sustainability in the Himalayan coffee market.
        </p>

        {/* Subheading */}
        <div className="mt-10">
          <h3 className="font-semibold text-2xl lg:text-3xl text-center text-green-700">
            Key Leaders Guiding JHCB’s Vision:
          </h3>
        </div>

        {/* Team Members */}
        <div className="flex flex-col lg:flex-row justify-around items-center w-full gap-8 mt-10 lg:mt-12">
          {/* Bijaya Padma Malla */}
          <article className="w-full h-auto lg:w-1/4 py-7 flex flex-col items-center bg-gray-50 rounded-lg shadow-md p-4 transition-transform transform hover:scale-105">
            <div className="w-48 h-48 lg:w-56 lg:h-56 mb-4">
              <img
                src={Bijaya}
                alt="Chairman Mr. Bijaya Padma Malla of Jewel Himalayan Coffee Beans"
                className="rounded-full w-full h-full shadow-lg border-4 border-green-600 object-cover"
              />
            </div>
            <h4 className="font-semibold text-xl text-green-700 text-center mt-4">
              Mr. Bijaya Padma Malla
            </h4>
            <p className="text-sm lg:text-base text-gray-600 font-semibold text-center">
              Co-Founder
            </p>
            <p className="text-center text-sm text-gray-600 mt-2 px-2">
              Mr. Malla brings strategic leadership and decades of business insight to the forefront of JHCB’s mission in the Nepali specialty coffee sector.
            </p>
          </article>

          {/* Shekhar Singh */}
          <article className="w-full h-auto lg:w-1/4 py-7 flex flex-col items-center bg-gray-50 rounded-lg shadow-md p-4 transition-transform transform hover:scale-105">
            <div className="w-48 h-48 lg:w-56 lg:h-56 mb-4">
              <img
                src={Shekhar}
                alt="Director Mr. Shekhar Singh - Jewel Himalayan Coffee"
                className="rounded-full w-full h-full shadow-lg border-4 border-green-600 object-cover"
              />
            </div>
            <h4 className="font-semibold text-xl text-green-700 text-center mt-4">
              Mr. Shekhar Singh
            </h4>
            <p className="text-sm lg:text-base text-gray-600 font-semibold text-center">
              Co-Founder
            </p>
            <p className="text-center text-sm text-gray-600 mt-2 px-2">
              Mr. Singh focuses on business operations and stakeholder development, guiding JHCB’s expansion and ethical sourcing practices across Nepal.
            </p>
          </article>

          {/* Binayak Malla */}
          <article className="w-full h-auto lg:w-1/4 py-7 flex flex-col items-center bg-gray-50 rounded-lg shadow-md p-4 transition-transform transform hover:scale-105">
            <div className="w-48 h-48 lg:w-56 lg:h-56 mb-4">
              <img
                src={Binayak}
                alt="Mr. Binayak Malla - Director of Jewel Himalayan Coffee Beans"
                className="rounded-full w-full h-full shadow-lg border-4 border-green-600 object-cover"
              />
            </div>
            <h4 className="font-semibold text-xl text-green-700 text-center mt-4">
              Mr. Binayak Malla
            </h4>
            <p className="text-sm lg:text-base text-gray-600 font-semibold text-center">
              Co-Founder
            </p>
            <p className="text-center text-sm text-gray-600 mt-2 px-2">
              A driving force in operations and logistics, Mr. Malla ensures high-quality standards from coffee farm to final export, strengthening JHCB’s global reputation.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default FarmingHero2;
