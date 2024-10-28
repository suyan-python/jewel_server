import React from "react";
import { FaLeaf, FaRecycle, FaBlender, FaPeopleGroup } from "react-icons/fa6";
import { FaFireAlt } from "react-icons/fa";

function Home3() {
  return (
    <div className="px-4 lg:px-56 py-24 shadow-lg mx-40 my-7">
      {/* Section Header */}
      <div className="font-medium text-center lg:text-left mb-10">
        <div className="super-title text-brightColor my-2 text-xl lg:text-xl">
          Our Unique Offerings
        </div>
        <div className="title text-3xl lg:text-4xl font-bold">
          Crafted with Passion
        </div>
        <div className="description my-7 text-gray-500 lg:text-lg">
          At iNaya Cafe, we pride ourselves on offering a unique coffee
          experience, from bean to cup.
        </div>
      </div>

      {/* Offerings Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 my-14">
        {/* Offering 1 */}
        <div className="flex gap-4 items-start">
          <div className="logo text-brightColor text-2xl hover:scale-110 transition-transform duration-300">
            <FaLeaf />
          </div>
          <div>
            <div className="title font-medium text-lg lg:text-xl">
              Sustainable Sourcing
            </div>
            <div className="description text-gray-500">
              We partner with local farmers to bring you the finest, ethically
              sourced coffee.
            </div>
          </div>
        </div>

        {/* Offering 2 */}
        <div className="flex gap-4 items-start">
          <div className="logo text-brightColor text-2xl hover:scale-110 transition-transform duration-300">
            <FaBlender />
          </div>
          <div>
            <div className="title font-medium text-lg lg:text-xl">
              Custom Blends
            </div>
            <div className="description text-gray-500">
              Explore unique blends crafted to suit every palate.
            </div>
          </div>
        </div>

        {/* Offering 3 */}
        <div className="flex gap-4 items-start">
          <div className="logo text-brightColor text-2xl hover:scale-110 transition-transform duration-300">
            <FaRecycle />
          </div>
          <div>
            <div className="title font-medium text-lg lg:text-xl">
              Eco-Friendly Packaging
            </div>
            <div className="description text-gray-500">
              Our packaging is designed to minimize environmental impact.
            </div>
          </div>
        </div>

        {/* Offering 4 */}
        <div className="flex gap-4 items-start">
          <div className="logo text-brightColor text-2xl hover:scale-110 transition-transform duration-300">
            <FaFireAlt />
          </div>
          <div>
            <div className="title font-medium text-lg lg:text-xl">
              Artisan Roasting
            </div>
            <div className="description text-gray-500">
              Our small-batch roasting process ensures each cup is perfect.
            </div>
          </div>
        </div>

        {/* Offering 5 */}
        <div className="flex gap-4 items-start">
          <div className="logo text-brightColor text-2xl hover:scale-110 transition-transform duration-300">
            <FaPeopleGroup />
          </div>
          <div>
            <div className="title font-medium text-lg lg:text-xl">
              Community Engagement
            </div>
            <div className="description text-gray-500">
              Join our community events and coffee workshops.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home3;
