import React from "react";
import Form from "./Form";

function Contact() {
  return (
    <section className="w-full flex flex-col lg:flex-row justify-between items-center bg-gradient-to-b from-white via-gray-100 to-gray-200 px-6  lg:px-20 shadow-lg rounded-2xl">
      {/* Text Area */}
      <div className="text-area w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start lg:px-12 text-center lg:text-left space-y-4">
        <h1 className="font-bold text-3xl lg:text-5xl text-gray-800">
          Get in Touch
        </h1>
        <p className="text-lg lg:text-xl text-gray-600">
          Reach out to Jewel Himalayan Products for premium Nepali Arabica. We’d
          love to hear from you.
        </p>
        <div>
          <a
            href="mailto:jewel.himalayan.2021@gmail.com"
            className="text-lg text-blue-500 hover:underline"
          >
            jewel.himalayan.2021@gmail.com
          </a>
        </div>
        <div>
          <a
            href="tel:+9779817576110"
            className="text-lg text-blue-500 hover:underline"
          >
            +977 9817576110, 98288293162, 9841208219
          </a>
        </div>
        <p className="text-lg text-gray-500">
          Jewel Himalayan Products, Bagmati, Kathmandu, Balkhu
        </p>
      </div>

      {/* Form Section */}
      <div className="w-full lg:w-1/2  lg:mt-0 flex justify-center items-center bg-white p-6 lg:p-12 rounded-2xl bg-gradient-to-b from-gray-300 via-gray-200 to-white">
        <Form />
      </div>
    </section>
  );
}

export default Contact;
