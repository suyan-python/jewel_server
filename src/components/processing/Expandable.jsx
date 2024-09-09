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
    <div className="flex gap-8 p-4 justify-around my-10 mx-14">
      {/* First Div */}
      <div className="border p-4 rounded-2xl shadow-lg w-full max-w-md flex flex-col justify-end text-white bg-processing w-2/4 bg-contain h-96">
        <div className="backdrop-blur-sm ">
          <div className="flex-1 pb-5">
            <h2 className="text-lg font-semibold text-center">Processing</h2>
            <div
              className={`transition-max-height duration-300 ease-in-out overflow-hidden py-6 ${
                isExpandedDiv1 ? "max-h-[500px]" : "max-h-0"
              }`}
            >
              <p className="text-justify px-2">
                We have a newly set up coffee processing facility at our farm at
                Deumai, Ilam. It will do both natural and fully washed
                processing starting from 2023. We have a wet and dry mill and
                are planning experimental lots.
                {isExpandedDiv1 && (
                  <span className="text-justify">
                    <br />
                    <br />
                    We also support two coffee washing stations (CWS) in Kavre
                    and Sindhupalchowk. We provide training in maintaining
                    quality and following standard operating protocols.
                  </span>
                )}
              </p>
            </div>
          </div>
          <div className="mt-auto mb-4 text-center">
            <button
              className="px-6 py-1 border-2 border-white hover:text-seed transition-all rounded-full"
              onClick={toggleExpandDiv1}
            >
              {isExpandedDiv1 ? "Show Less" : "Learn More"}
            </button>
          </div>
        </div>
      </div>

      {/* second div  */}
      <div className="border p-4 rounded-2xl shadow-lg w-full max-w-md flex flex-col justify-end text-white bg-roasting w-2/4 bg-contain h-96">
        <div className="backdrop-blur-sm ">
          <div className="flex-1 pb-5">
            <h2 className="text-lg font-semibold text-center">Roasting</h2>
            <div
              className={`transition-max-height duration-300 ease-in-out overflow-hidden py-6 ${
                isExpandedDiv2 ? "max-h-[500px]" : "max-h-0"
              }`}
            >
              <p className="text-justify px-2">
                In Kathmandu, we plan to have our own roastery by 2023.
                {isExpandedDiv2 && (
                  <span className="text-justify ">
                    <br />
                    <br />
                    For now, Nepali coffee expert, Mr. Nima Tenzing Sherpa,
                    roasts our beans in a light medium roast in 6kg batches. We
                    produced 500kg of single origin, mild roasted coffee beans
                    in 2021. What we like about roasting is the craft, sharing
                    beans with customers, value adding, sales and meeting
                    customers.
                  </span>
                )}
              </p>
            </div>
          </div>
          <div className="mt-auto mb-4 text-center">
            <button
              className="px-6 py-1 border-2 border-white hover:text-seed transition-all rounded-full"
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
