import React from "react";
import img from "../assets/pictures/coffeepics/coffeehand.jpg";
import Button from "../layouts/Button";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center lg:px-32 px-5 bg-backgroundColor">
      <div className="text">
        <h1 className=" lg:my-20 font-semibold text-center text-4xl mb-8">
          About Us
        </h1>
      </div>

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

      <div className="mt-12 my-32">
        <div className="text-center">
          <h1 className="font-semibold text-center text-4xl lg:mt-14 mt-24 mb-8">
            We Are Located!
          </h1>
        </div>
        <div className="responsive-map ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d465.13995350420055!2d85.33307952000318!3d27.670030689843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19b9079a4adb%3A0xab20f3b73dc8adac!2sINAYA%20CAFE!5e0!3m2!1sen!2snp!4v1724670038571!5m2!1sen!2snp"
            width="900"
            height="650"
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
