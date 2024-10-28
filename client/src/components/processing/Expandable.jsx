import React, { useState } from "react";

const ExpandableDivs = () => {
  const [isExpandedDiv1, setIsExpandedDiv1] = useState(false);
  const [isExpandedDiv2, setIsExpandedDiv2] = useState(false);

  const toggleExpandDiv1 = () => {
    setIsExpandedDiv1((prev) => !prev);
  };

  const toggleExpandDiv2 = () => {
    setIsExpandedDiv2((prev) => !prev);
  };

  return (
    <div className="flex flex-col gap-8 p-6 lg:p-12 mx-auto max-w-7xl my-10">
      {/* First Div */}
      <div className="relative border rounded-2xl shadow-xl transform transition-transform duration-300 hover:scale-105 bg-cover bg-center text-white w-full h-auto max-w-md mx-auto overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
        <div className="relative z-10 p-6 flex flex-col h-full">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-center mb-6">
            Processing
          </h2>
          <div
            className={`text-white transition-max-height duration-500 ease-in-out overflow-hidden ${
              isExpandedDiv1 ? "max-h-[500px] py-4" : "max-h-0 py-0"
            }`}
          >
            <p className="text-lg lg:text-xl text-justify">
              We have a newly set up coffee processing facility at our farm at
              Deumai, Ilam. It will do both natural and fully washed processing
              starting from 2023. We have a wet and dry mill and are planning
              experimental lots.
              {isExpandedDiv1 && (
                <span className="text-white">
                  <br />
                  <br />
                  We also support two coffee washing stations (CWS) in Kavre and
                  Sindhupalchowk. We provide training in maintaining quality and
                  following standard operating protocols.
                </span>
              )}
            </p>
          </div>
          <div className="mt-6 text-center">
            <button
              className="px-8 py-2 border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-all rounded-full font-medium shadow-md"
              onClick={toggleExpandDiv1}
            >
              {isExpandedDiv1 ? "Show Less" : "Learn More"}
            </button>
          </div>
        </div>
      </div>

      {/* Second Div */}
      <div className="relative border rounded-2xl shadow-xl transform transition-transform duration-300 hover:scale-105 bg-cover bg-center text-white w-full h-auto max-w-md mx-auto overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
        <div className="relative z-10 p-6 flex flex-col h-full">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-center mb-6">
            Roasting
          </h2>
          <div
            className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
              isExpandedDiv2 ? "max-h-[500px] py-4" : "max-h-0 py-0"
            }`}
          >
            <p className="text-lg lg:text-xl text-justify">
              In Kathmandu, we plan to have our own roastery by 2023.
              {isExpandedDiv2 && (
                <span className="text-white">
                  <br />
                  <br />
                  For now, Nepali coffee expert, Mr. Nima Tenzing Sherpa, roasts
                  our beans in a light medium roast in 6kg batches. We produced
                  500kg of single origin, mild roasted coffee beans in 2021.
                  What we like about roasting is the craft, sharing beans with
                  customers, value adding, sales, and meeting customers.
                </span>
              )}
            </p>
          </div>
          <div className="mt-6 text-center">
            <button
              className="px-8 py-2 border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-all rounded-full font-medium shadow-md"
              onClick={toggleExpandDiv2}
            >
              {isExpandedDiv2 ? "Show Less" : "Learn More"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpandableDivs;
