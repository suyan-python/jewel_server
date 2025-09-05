import Pranit from "../assets/pictures/person/pranit.jpg";
import Moonmoon from "../assets/pictures/person/Moonmoon.jpeg";

function KeyPerson()
{
  return (
    <section className="flex flex-col justify-center items-center p-5">
      {/* Title Section */}
      <div className="title flex flex-col justify-center items-center my-8 p-7 w-full lg:w-3/4 shadow-lg rounded-2xl bg-white">
        <h2 className="text-3xl lg:text-5xl font-semibold text-[#6A3E36] text-center">
          Meet the Minds Behind Jewel Himalayan Products
        </h2>
        <p className="text-center py-4 text-base lg:text-lg text-[#6A3E36] max-w-2xl">
          Jewel Himalayan Products is a proud <strong>Private Limited Company</strong> built by dedicated individuals who manage everything from sourcing to global distribution.
        </p>

        {/* Key Persons Header */}
        <div className="mt-10">
          <h3 className="font-semibold text-2xl lg:text-3xl text-center text-[#6A3E36]">
            Our Key Personnel:
          </h3>
        </div>

        {/* Key Person Cards */}
        <div className="flex flex-col lg:flex-row justify-around items-center w-full gap-8 mt-10 lg:mt-12">
          {/* Moonmoon Hada */}
          <article className="w-full h-auto lg:w-1/4 py-7 flex flex-col items-center bg-gray-50 rounded-lg shadow-md p-4 transition-transform transform hover:scale-105">
            <div className="w-48 h-48 lg:w-56 lg:h-56 mb-4">
              <img
                src={Moonmoon}
                alt="Moonmoon Hada - Marketing and Finance Advisor of Jewel Himalayan Products"
                className="rounded-full w-full h-full shadow-lg border-4 border-[#6A3E36] object-cover"
              />
            </div>
            <h4 className="font-semibold text-xl text-[#6A3E36] text-center mt-4">
              Ms. Moonmoon Hada
            </h4>
            <p className="text-center text-sm lg:text-base text-gray-700 ">
              Ms. Hada serves as the <strong className="text-brownn">Co-Founder</strong> for marketing, sales, and financial strategy. She plays a vital role in expanding Jewel Himalayan Products to international markets and shaping strategic growth.
            </p>
          </article>
          {/* Pranit Gurung */}
          <article className="w-full h-auto lg:w-1/4 py-7 flex flex-col items-center bg-gray-50 rounded-lg shadow-md p-4 transition-transform transform hover:scale-105">
            <div className="w-48 h-48 lg:w-56 lg:h-56 mb-4">
              <img
                src={Pranit}
                alt="Pranit Gurung - Operation Head of Jewel Himalayan Products"
                className="rounded-full w-full h-full shadow-lg border-4 border-[#6A3E36] object-cover"
              />
            </div>
            <h4 className="font-semibold text-xl text-[#6A3E36] text-center mt-4">
              Mr. Pranit Gurung
            </h4>
            {/* <span className="font-bold text-brownn">(COO)</span> */}
            <p className="text-center text-sm lg:text-base text-gray-700   max-w-max">
              As the <strong className="text-brownn">Chief Operating Officer (COO)</strong>, Mr. Gurung oversees logistics, accounting, and distribution. He ensures seamless supply chain operations and manages vendor coordination with precision.
            </p>
          </article>


        </div>
      </div>
    </section>
  );
}

export default KeyPerson;
