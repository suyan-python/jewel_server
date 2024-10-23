import React from "react";

function SourceHero3() {
  return (
    <>
      {/* Images Section */}
      <div className="flex flex-col lg:flex-row justify-center gap-8 py-12 px-5 lg:px-16">
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

export default SourceHero3;
