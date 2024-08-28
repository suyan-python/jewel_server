import React from "react";
import img from "../assets/pictures/coffeepics/coffeehand.jpg";
import Button from "../layouts/Button";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center lg:px-32 px-5 bg-backgroundColor">
      <h1 className="font-semibold text-center text-4xl lg:mt-14 mt-24 mb-8">
        About Us
      </h1>

      <div className="flex flex-col lg:flex-row items-center gap-5">
        <div className="w-full lg:w-2/4">
          <img className="rounded-lg" src={img} alt="about" />
        </div>
        <div className="w-full lg:w-2/4 p-4 space-y-3">
          <h2 className="font-semibold text-3xl">
            What Makes Our Coffee Special?
          </h2>
          <p>Our organic beans makes our coffee stand-out from other brands</p>
          <p>
            Our coffee area testified by experts from different parts of the
            world
          </p>

          <Button title="Learning More" />
        </div>
      </div>
      <div className="mt-12">We Are located at:</div>
    </div>
  );
};

export default About;
