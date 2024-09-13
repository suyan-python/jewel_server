import React from "react";
import img from "../assets/pictures/coffeepics/coffeehand.jpg";
import Button from "../layouts/Button";
import iNaya from "../assets/pictures/png/iNaya.png";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center lg:px-32 px-5 bg-backgroundColor">
      {/* Logo Section */}
      <div className="text">
        <div className="lg:my-20 my-12 flex justify-center">
          <img src={iNaya} alt="iNaya Cafe" className="w-3/4 md:w-2/4" />
        </div>
      </div>

      {/* What Makes Our Coffee Special Section */}
      <div className="flex flex-col lg:flex-row items-center gap-8 w-full lg:gap-5">
        <div className="w-full lg:w-2/4">
          <img className="rounded-lg w-full" src={img} alt="Coffee" />
        </div>
        <div className="w-full lg:w-2/4 p-4 space-y-4 text-center lg:text-left">
          <h2 className="font-semibold text-2xl md:text-3xl">
            What Makes Our Coffee Special?
          </h2>
          <p className="text-sm md:text-base">
            Our organic beans make our coffee stand out from other brands.
          </p>
          <p className="text-sm md:text-base">
            Our coffee is tested and testified by experts from different parts
            of the world.
          </p>

          <div className="flex justify-center lg:justify-start">
            <Button title="Learn More" />
          </div>
        </div>
      </div>

      {/* We Are Located Section */}
      <div className="mt-12 w-full">
        <h1 className="font-semibold text-center text-3xl lg:text-4xl mt-12 mb-8">
          We Are Located!
        </h1>
        <div className="responsive-map w-full flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d465.13995350420055!2d85.33307952000318!3d27.670030689843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19b9079a4adb%3A0xab20f3b73dc8adac!2sINAYA%20CAFE!5e0!3m2!1sen!2snp!4v1724670038571!5m2!1sen!2snp"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-xl"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default About;
