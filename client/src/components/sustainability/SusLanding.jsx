import React from "react";
import ProjectImage1 from "../../assets/pictures/person/women1.jpg";
import ProjectImage2 from "../../assets/pictures/person/women3.jpg";
import ProjectImage3 from "../../assets/pictures/person/women2.jpg";

const Sustainability = () =>
{
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 ">
      <div className="container mx-auto max-w-7xl">
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-center text-green-800 mb-6 tracking-tight">
          Women in Coffee Project
        </h2>

        {/* Subtitle */}
        <p className="subheader text-lg md:text-xl text-gray-700 text-center max-w-3xl mx-auto mb-14 leading-relaxed">
          Empowering women farmers through sustainable coffee farming, training,
          and community investment — building a future where women lead the way
          in the coffee industry.
        </p>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[ProjectImage1, ProjectImage2, ProjectImage3].map((src, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-2xl shadow-lg group"
            >
              <img
                src={src}
                alt={`Women Farmers ${i + 1}`}
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition duration-300 rounded-2xl"></div>
            </div>
          ))}
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Card */}
          <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition duration-300 border-t-4 border-green-600">
            <h3 className="text-2xl font-semibold text-green-800 mb-4">
              Field Interviews & Project Impact
            </h3>
            <p className="subheader text-gray-600 leading-relaxed">
              At Deumai, we visited 54 houses and spoke to women farmers. They
              are thrilled about the project. In 2021, JHP farm supported 50
              women farmers with free coffee seedlings — a small step towards a
              sustainable future.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition duration-300 border-t-4 border-green-600">
            <h3 className="text-2xl font-semibold text-green-800 mb-4">
              Future Goals
            </h3>
            <p className="subheader text-gray-600 leading-relaxed">
              We aim to boost women’s incomes through coffee, offering training
              on nutrition, water, pest control, and GAP. Within 3–4 years, we
              plan to provide a buyback guarantee for their coffee harvests.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition duration-300 border-t-4 border-green-600">
            <h3 className="text-2xl font-semibold text-green-800 mb-4">
              Improving Coffee Quality
            </h3>
            <p className="subheader text-gray-600 leading-relaxed">
              Our goal is to enhance coffee quality with better processing and
              roasting while promoting ethical, scientific, and sustainable
              farming practices in the region.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition duration-300 border-t-4 border-green-600">
            <h3 className="text-2xl font-semibold text-green-800 mb-4">
              Social Investment
            </h3>
            <p className="subheader text-gray-600 leading-relaxed">
              Coffee sustains many women farmers’ households. As JHP, we also
              invest in schools, education, transport, and welfare programs to
              build stronger communities around coffee.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
