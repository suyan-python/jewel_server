import React from "react";

function FarmingHero2() {
  return (
    <div className=" rounded-xl flex flex-col justify-center items-center ">
      <div className="title flex flex-col justify-center my-8 items-center p-7  w-3/4 shadow-inner rounded-2xl">
        <div className="text text-5xl font-medium text-green-600">
          Behind the Business
        </div>
        <div className="description w-3/4">
          <p className="text-center py-4">
            Jewel Himalayan Products is officially registered as a Private
            Limited Company owned by <br />
            <b className="text-green-600 text-xl">Mrs. MoonMoon Hada.</b>
          </p>
        </div>

        <div className="Moon-image">
          <img src="img" alt="" />
        </div>

        <div className="key-person mt-16">
          <p className="font-medium text-2xl">
            Key persons associated with JHP are:
          </p>
        </div>

        <div className="images flex flex-row justify-around  w-full  gap-5">
          <div className="img1 w-1/4  py-7">
            <div className="img flex justify-center">
              <img src="Img" alt="Image" />
            </div>
            <div className="Name-title font-medium text-center text-green-600 text-xl">
              Mr. Binayak Malla
            </div>
            <div className="description  text-center">
              Advisor on marketing, sales, and finance. He looks at the
              international market and develops business strategies
            </div>
          </div>
          <div className="img2 w-1/4  py-7">
            <div className="img flex justify-center">
              <img src="Img" alt="Image" />
            </div>
            <div className="Name-title font-medium text-center text-green-600 text-xl">
              Mr. Pranit Gurung
            </div>
            <div className="description  text-center">
              Processing, packaging, and distribution. He looks at technical
              aspects e.g., coffee quality and profiles, working with roasters,
              and supporting domestic buyers
            </div>
          </div>
          <div className="img3 w-1/4  py-7">
            <div className="img flex justify-center">
              <img src="Img" alt="Image" />
            </div>
            <div className="Name-title font-medium text-center text-green-600 text-xl">
              Ms. Dilasha Shakya
            </div>
            <div className="description  text-center">
              Operation Head. She manages daily logistics, accounting, and
              distribution of coffee to vendors
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FarmingHero2;
