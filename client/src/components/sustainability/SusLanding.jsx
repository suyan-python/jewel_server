import React from "react";

// You can replace these with the actual image paths
import ProjectImage1 from "../../assets/pictures/person/women1.jpg";
import ProjectImage2 from "../../assets/pictures/person/women3.jpg";
import ProjectImage3 from "../../assets/pictures/person/women2.jpg";
const Sustainability = () => {
  return (
    <section className="bg-white py-12 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-bold text-center text-orange-500 mb-6">
          Women in Coffee Project
        </h2>

        {/* Description */}
        <p className="text-lg font-medium text-gray-700 text-center mb-12">
          We have envisioned a Women in Coffee project at our farm and with our
          smallholder farmers. We are planning women-led groups in planting and
          harvesting to encourage long-term participation in the coffee
          industry.
        </p>

        {/* Photo Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <img
            src={ProjectImage1}
            alt="Women Farmers 1"
            className="w-full h-64 object-cover rounded-lg shadow-md"
            loading="lazy"
          />
          <img
            src={ProjectImage2}
            alt="Women Farmers 2"
            className="w-full h-64 object-cover rounded-lg shadow-md"
            loading="lazy"
          />
          <img
            src={ProjectImage3}
            alt="Women Farmers 3"
            className="w-full h-64 object-cover rounded-lg shadow-md"
            loading="lazy"
          />
        </div>

        {/* Details in Divs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First Div */}
          <div className="bg-orange-300 p-6 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold mb-4 text-yellow-700">
              Field Interviews & Project Impact
            </h3>
            <p className="text-white font-medium">
              At Deumai, we conducted field interviews, visited 54 houses, and
              spoke to women farmers. They are extremely thrilled about the
              project and keen to join. We have already started this sustainable
              project. In 2021, JHP farm helped 50 women farmers with free
              coffee seedlings.
            </p>
          </div>

          {/* Second Div */}
          <div className="bg-orange-300 p-6 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold mb-4 text-yellow-700">
              Future Goals
            </h3>
            <p className=" text-white font-medium">
              We aim to work more with this community and boost their incomes
              from coffee. We will teach them about plant nutrition, water
              resources, pest and disease management, and GAP. After 3-4 years,
              we will offer a buyback guarantee for their coffee cherries and
              parchment.
            </p>
          </div>

          {/* Third Div */}
          <div className="bg-orange-300 p-6 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold mb-4 text-yellow-700">
              Improving Coffee Quality
            </h3>
            <p className="text-white font-medium">
              We want to improve the quality of the coffee as well as the
              processing and roasting. We would like to see more ethical
              business practices and scientific farming.
            </p>
          </div>

          {/* Fourth Div */}
          <div className="bg-orange-300 p-6 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold mb-4 text-yellow-700">
              Social Investment
            </h3>
            <p className="text-white font-medium">
              Coffee is an important source of income to many small-scale women
              farmers to cover daily expenses. As a company, we look to invest
              in schools, education, transportation, and the welfare of farmers.
              We want to have these sorts of social dimensions attached to our
              business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
