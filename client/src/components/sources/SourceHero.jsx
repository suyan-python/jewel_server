import React from "react";

function SourceHero() {
  return (
    <>
      {/* Heading Section */}
      <div className="text-center pt-16">
        <p className="font-bold text-4xl lg:text-5xl text-seed">Our Sources</p>
        <p className="py-2 text-lg text-gray-700">
          We source coffee from small-scale Arabica farmers:
        </p>
      </div>

      {/* Images Section */}
      <div className="flex flex-col lg:flex-row justify-center gap-8 py-12 px-5 lg:px-16">
        {/* Source Card 1 */}
        <div className=" bg-white rounded-2xl p-5 shadow-lg w-full lg:w-1/4 h-60 flex flex-col justify-between hover:shadow-xl transition-shadow duration-400 ease-in-out">
          <div className="title flex justify-center">
            <div className="text font-semibold text-xl text-seed">Kavre</div>
          </div>
          <div className="images pt-16 text-center">
            <button className="border-2 border-seed py-2 px-5 rounded-md hover:border-none hover:text-white hover:bg-seed transition duration-500">
              Visit
            </button>
          </div>
        </div>

        {/* Source Card 2 */}
        <div className=" bg-white rounded-2xl p-5 shadow-lg w-full lg:w-1/4 h-60 flex flex-col justify-between hover:shadow-xl transition-shadow duration-400 ease-in-out">
          <div className="title flex justify-center">
            <div className="text font-semibold text-xl text-seed">
              Sindhupalchowk
            </div>
          </div>
          <div className="images pt-16 text-center">
            <button className="border-2 border-seed py-2 px-5 rounded-md hover:border-none hover:text-white hover:bg-seed transition duration-500">
              Visit
            </button>
          </div>
        </div>

        {/* Source Card 3 */}
        <div className=" bg-illam bg-cover rounded-2xl p-5 shadow-lg w-full lg:w-1/4 h-60 flex flex-col justify-between hover:shadow-xl transition-shadow duration-400 ease-in-out">
          <div className="title flex justify-center">
            <div className="text font-semibold text-xl text-seed bg-white px-5 rounded-full py-1">
              Ilam
            </div>
          </div>
          <div className="images pt-16 text-center">
            <button className="border-2 border-seed py-2 px-5 text-white rounded-md hover:border-none  hover:bg-seed transition duration-500">
              Visit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SourceHero;
