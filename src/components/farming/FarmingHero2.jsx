import React from "react";

function FarmingHero2() {
  return (
    <div className="rounded-xl flex flex-col justify-center items-center p-5">
      {/* Title Section */}
      <div className="title flex flex-col justify-center items-center my-8 p-7 w-full lg:w-3/4 shadow-inner rounded-2xl">
        <div className="text text-3xl lg:text-5xl font-medium text-green-600 text-center">
          Behind the Business
        </div>

        <div className="description w-full lg:w-3/4">
          <p className="text-center py-4 text-base lg:text-lg">
            Jewel Himalayan Products is officially registered as a Private
            Limited Company owned by <br />
            <b className="text-green-600 text-lg lg:text-xl">
              Mrs. MoonMoon Hada.
            </b>
          </p>
        </div>

        {/* MoonMoon Image */}
        <div className="Moon-image my-6 lg:my-8">
          <img
            src="img"
            alt=""
            className="rounded-full w-40 h-40 lg:w-60 lg:h-60"
          />
        </div>

        {/* Key Persons Section */}
        <div className="key-person mt-10 lg:mt-16">
          <p className="font-medium text-2xl lg:text-3xl text-center">
            Key persons associated with JHP are:
          </p>
        </div>

        {/* Images and Descriptions */}
        <div className="images flex flex-col lg:flex-row justify-around items-center w-full gap-8 lg:gap-5 mt-8 lg:mt-12">
          {/* Binayak Malla */}
          <div className="img1 w-full lg:w-1/4 py-7 flex flex-col items-center">
            <div className="img flex justify-center">
              <img
                src="Img"
                alt="Image"
                className="rounded-full w-32 h-32 lg:w-40 lg:h-40"
              />
            </div>
            <div className="Name-title font-medium text-center text-green-600 text-xl mt-4">
              Mr. Binayak Malla
            </div>
            <div className="description text-center text-sm lg:text-base px-3 lg:px-0">
              Advisor on marketing, sales, and finance. He looks at the
              international market and develops business strategies.
            </div>
          </div>

          {/* Pranit Gurung */}
          <div className="img2 w-full lg:w-1/4 py-7 flex flex-col items-center">
            <div className="img flex justify-center">
              <img
                src="Img"
                alt="Image"
                className="rounded-full w-32 h-32 lg:w-40 lg:h-40"
              />
            </div>
            <div className="Name-title font-medium text-center text-green-600 text-xl mt-4">
              Mr. Pranit Gurung
            </div>
            <div className="description text-center text-sm lg:text-base px-3 lg:px-0">
              Processing, packaging, and distribution. He oversees technical
              aspects like coffee quality, working with roasters, and supporting
              domestic buyers.
            </div>
          </div>

          {/* Dilasha Shakya */}
          <div className="img3 w-full lg:w-1/4 py-7 flex flex-col items-center">
            <div className="img flex justify-center">
              <img
                src="Img"
                alt="Image"
                className="rounded-full w-32 h-32 lg:w-40 lg:h-40"
              />
            </div>
            <div className="Name-title font-medium text-center text-green-600 text-xl mt-4">
              Ms. Dilasha Shakya
            </div>
            <div className="description text-center text-sm lg:text-base px-3 lg:px-0">
              Operation Head. She manages daily logistics, accounting, and
              distribution of coffee to vendors.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FarmingHero2;
