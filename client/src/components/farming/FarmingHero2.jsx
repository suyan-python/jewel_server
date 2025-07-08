import Binayak from "../../assets/pictures/person/binayak.jpg";
import Shekhar from "../../assets/pictures/person/shekhar.jpg";

function FarmingHero2() {
  return (
    <div className="flex flex-col justify-center items-center p-5">
      {/* Title Section */}
      <div className="title flex flex-col justify-center items-center my-8 p-7 w-full lg:w-3/4 shadow-lg rounded-2xl ">
        <h2 className="text-3xl lg:text-5xl font-medium text-green-600 text-center">
          Behind the Business
        </h2>
        <p className="text-center py-4 text-base lg:text-lg text-gray-700">
          Jewel Himalayan Coffee Beans is officially registered as a{" "}
          <b>Private Limited Company.</b>
        </p>

        {/* Key Persons Section */}
        <div className="key-person mt-10 lg:mt-16">
          <h3 className="font-semibold text-2xl lg:text-3xl text-center text-green-600">
            Key persons associated with JHCB:
          </h3>
        </div>

        {/* Images and Descriptions */}
        <div className="images flex flex-col lg:flex-row justify-around items-center w-full gap-8 mt-8 lg:mt-12">
          {/* Binayak Malla */}
          <div className="person w-full h-auto lg:w-1/4 py-7 flex flex-col items-center bg-gray-50 rounded-lg shadow-md p-4 transition-transform transform hover:scale-105">
            <div className="w-48 h-48 lg:w-56 lg:h-56 mb-4">
              {" "}
              {/* Adjusted for square shape */}
              <img
                src={""}
                alt="Mr. Bijaya Padma Malla"
                className="rounded-full w-full h-full shadow-lg border-4 border-green-600 object-cover" // Full width and height
              />
            </div>
            <h4 className="font-semibold text-center text-green-600 text-xl mt-4">
              Mr. Bijaya Padma Malla
            </h4>
            <p className="text-center text-sm lg:text-base text-gray-600 px-3 font-semibold">
              Chairman
            </p>
          </div>

          {/* Shekhar Singh */}
          <div className="person w-full h-auto lg:w-1/4 py-7 flex flex-col items-center bg-gray-50 rounded-lg shadow-md p-4 transition-transform transform hover:scale-105">
            <div className="w-48 h-48 lg:w-56 lg:h-56 mb-4">
              {" "}
              {/* Adjusted for square shape */}
              <img
                src={Shekhar}
                alt="Mr. Shekhar Singh"
                className="rounded-full w-full h-full shadow-lg border-4 border-green-600 object-cover" // Full width and height
              />
            </div>
            <h4 className="font-semibold text-center text-green-600 text-xl mt-4">
              Mr. Shekhar Singh
            </h4>
            <p className="text-center text-sm lg:text-base text-gray-600 px-3 font-semibold">
              Director
            </p>
          </div>

          {/* Binayak Malla */}
          <div className="person w-full h-auto lg:w-1/4 py-7 flex flex-col items-center bg-gray-50 rounded-lg shadow-md p-4 transition-transform transform hover:scale-105">
            <div className="w-48 h-48 lg:w-56 lg:h-56 mb-4">
              {" "}
              {/* Adjusted for square shape */}
              <img
                src={Binayak} // Assuming you have the image for Pranit
                alt="Mr. Binayak Malla"
                className="rounded-full w-full h-full shadow-lg border-4 border-green-600 object-cover" // Full width and height
              />
            </div>
            <h4 className="font-semibold text-center text-green-600 text-xl mt-4">
              Mr. Binayak Malla
            </h4>
            <p className="text-center text-sm lg:text-base text-gray-600 px-3 font-semibold">
              Director
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FarmingHero2;
