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
    <div className="flex flex-col lg:flex-row gap-8 p-4 lg:p-10 mx-auto max-w-6xl my-10">
      {/* First Div */}
      <div className="relative border p-4 rounded-2xl shadow-lg flex flex-col justify-between bg-processing bg-cover bg-center text-white w-full lg:w-1/2 h-auto max-w-md mx-auto overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 p-4 flex flex-col justify-between h-full">
          <h2 className="text-2xl font-bold text-center mb-4">Processing</h2>
          <div
            className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
              isExpandedDiv1 ? "max-h-[500px] py-4" : "max-h-0 py-0"
            }`}
          >
            <p className="text-justify">
              We have a newly set up coffee processing facility at our farm at
              Deumai, Ilam. It will do both natural and fully washed processing
              starting from 2023. We have a wet and dry mill and are planning
              experimental lots.
              {isExpandedDiv1 && (
                <span>
                  <br />
                  <br />
                  We also support two coffee washing stations (CWS) in Kavre and
                  Sindhupalchowk. We provide training in maintaining quality and
                  following standard operating protocols.
                </span>
              )}
            </p>
          </div>
          <div className="mt-4 text-center">
            <button
              className="px-6 py-2 border-2 border-white text-white hover:bg-gray-800 transition-all rounded-full"
              onClick={toggleExpandDiv1}
            >
              {isExpandedDiv1 ? "Show Less" : "Learn More"}
            </button>
          </div>
        </div>
      </div>

      {/* Second Div */}
      <div className="relative border p-4 rounded-2xl shadow-lg flex flex-col justify-between bg-roasting bg-cover bg-center text-white w-full lg:w-1/2 h-auto max-w-md mx-auto overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 p-4 flex flex-col justify-between h-full">
          <h2 className="text-2xl font-bold text-center mb-4">Roasting</h2>
          <div
            className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
              isExpandedDiv2 ? "max-h-[500px] py-4" : "max-h-0 py-0"
            }`}
          >
            <p className="text-justify">
              In Kathmandu, we plan to have our own roastery by 2023.
              {isExpandedDiv2 && (
                <span>
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
          <div className="mt-4 text-center">
            <button
              className="px-6 py-2 border-2 border-white text-white hover:bg-gray-800 transition-all rounded-full"
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
