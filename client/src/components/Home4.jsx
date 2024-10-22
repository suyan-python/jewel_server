import React from "react";

function Home4() {
  return (
    <div className="flex flex-wrap justify-center gap-8 p-6 mb-12">
      {/* Card 1 */}
      <div className="bg-person bg-cover text-white w-full sm:w-64 md:w-80 h-72 p-4  rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-amber-700 to-transparent opacity-70 z-20"></div>

        {/* Title Section */}
        <div className="relative z-30 p-4">
          <div className="title font-semibold text-xl ">
            Latest Coffee Trends
          </div>
        </div>

        {/* Description Section */}
        <div className="description-wrapper absolute bottom-0 left-0 right-0 h-full flex items-end overflow-hidden transition-all duration-500 transform translate-y-0 hover:-translate-y-28 z-30">
          <div className="description  p-4">
            Discover the latest trends in the coffee world, from brewing methods
            to flavors.
          </div>
        </div>
      </div>

      {/* Repeat for Additional Cards */}
      <div className=" bg-person bg-cover text-white w-full sm:w-64 md:w-80 h-72 p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-amber-700 to-transparent opacity-70 z-20"></div>
        <div className="relative z-30 p-4">
          <div className="title font-semibold text-xl ">Coffee Recipes</div>
        </div>
        <div className="description-wrapper absolute bottom-0 left-0 right-0 h-full flex items-end overflow-hidden transition-all duration-500 transform translate-y-0 hover:-translate-y-28 z-30">
          <div className="description  p-4 ">
            Explore new and exciting coffee recipes from around the world.
          </div>
        </div>
      </div>

      <div className=" bg-person bg-cover text-white w-full sm:w-64 md:w-80 h-72 p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-amber-700 to-transparent opacity-70 z-20"></div>
        <div className="relative z-30 p-4">
          <div className="title font-semibold text-xl ">Coffee Culture</div>
        </div>
        <div className="description-wrapper absolute bottom-0 left-0 right-0 h-full flex items-end overflow-hidden transition-all duration-500 transform translate-y-0 hover:-translate-y-28 z-30">
          <div className="description  p-4 ">
            Learn about the cultural significance of coffee across different
            regions.
          </div>
        </div>
      </div>

      <div className=" bg-person bg-cover text-white w-full sm:w-64 md:w-80 h-72 p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-amber-700 to-transparent opacity-70 z-20"></div>
        <div className="relative z-30 p-4">
          <div className="title font-semibold text-xl ">
            Sustainable Practices
          </div>
        </div>
        <div className="description-wrapper absolute bottom-0 left-0 right-0 h-full flex items-end overflow-hidden transition-all duration-500 transform translate-y-0 hover:-translate-y-28 z-30">
          <div className="description  p-4 ">
            Discover sustainable practices in coffee production.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home4;
