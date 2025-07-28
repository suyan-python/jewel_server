import React from "react";

function FarmingHero5()
{
  return (
    <div className="flex justify-center items-center py-16 ">
      <div className="w-3/4 bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-4xl lg:text-5xl font-semibold text-center  mb-8 text-green-700">
          Our Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Sub-point: Ethical */}
          <div className="p-6 rounded-lg  hover:shadow-xl transition duration-300 ease-in-out">
            <h3 className="text-xl font-semibold  mb-3 text-green-600">
              Ethical
            </h3>
            <p className="text-gray-700">
              We prioritize ethical practices in all aspects of our business,
              ensuring fairness, honesty, and respect for all stakeholders.
            </p>
          </div>
          {/* Sub-point: Transparency and Traceability */}
          <div className="p-6 rounded-lg  hover:shadow-xl transition duration-300 ease-in-out">
            <h3 className="text-xl font-semibold  mb-3 text-green-600">
              Transparency & Traceability
            </h3>
            <p className="text-gray-700">
              We maintain open communication and trace our products from farm to
              cup, ensuring clarity and accountability.
            </p>
          </div>
          {/* Sub-point: Responsibility */}
          <div className="p-6  rounded-lg  hover:shadow-xl  transition duration-300 ease-in-out">
            <h3 className="text-xl font-semibold  mb-3 text-green-600">
              Responsibility
            </h3>
            <p className="text-gray-700">
              Our commitment is to be responsible stewards of the environment
              and our communities.
            </p>
          </div>
          {/* Sub-point: Collaboration */}
          <div className="p-6  rounded-lg  hover:shadow-xl transition duration-300 ease-in-out">
            <h3 className="text-xl font-semibold  mb-3 text-green-600">
              Collaboration
            </h3>
            <p className="text-gray-700">
              We believe in working together with farmers, employees, and
              partners to create a positive impact.
            </p>
          </div>
          {/* Sub-point: Perseverance */}
          <div className="p-6  rounded-lg  hover:shadow-xl transition duration-300 ease-in-out">
            <h3 className="text-xl font-semibold  mb-3 text-green-600">
              Perseverance
            </h3>
            <p className="text-gray-700">
              Facing challenges with resilience, we are dedicated to continual
              improvement and progress.
            </p>
          </div>
          {/* Sub-point: Relationship */}
          <div className="p-6  rounded-lg  hover:shadow-xl transition duration-300 ease-in-out">
            <h3 className="text-xl font-semibold  mb-3 text-green-600">
              Relationship
            </h3>
            <p className="text-gray-700">
              Building strong, lasting relationships is at the heart of
              everything we do.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FarmingHero5;
