import React from "react";
import Form from "./Form";

function Contact() {
  return (
    <section className="flex flex-col lg:flex-row justify-center items-center px-4 py-10 lg:py-20 lg:px-16 gap-8 rounded-2xl shadow-xl bg-white">
      {/* Text Area */}
      <div className="text-area w-full lg:w-2/4 flex flex-col px-4 lg:px-8">
        <h1 className="font-semibold text-4xl lg:text-5xl text-center lg:text-left mb-4">
          Contact Us
        </h1>
        <p className="text-lg lg:text-xl text-center lg:text-left mb-4">
          Contact Jewel Himalayan Products for premium Nepali Arabica. We’d love
          to work with you. Get in touch today.
        </p>
        <div className="mb-4">
          <a
            href="mailto:jewel.himalayan.2021@gmail.com"
            className="text-blue-500 hover:underline"
          >
            jewel.himalayan.2021@gmail.com
          </a>
        </div>
        <div className="mb-4">
          <a
            href="tel:+9779817576110"
            className="text-blue-500 hover:underline"
          >
            +977 9817576110, 98288293162, 9841208219
          </a>
        </div>
        <p className="text-center lg:text-left">
          Jewel Himalayan Products, Bagmati, Kathmandu, Balkhu
        </p>
      </div>

      {/* Form */}
      <div className="w-full lg:w-2/4 flex flex-col justify-center items-center py-8 lg:py-10 rounded-2xl bg-gray-50 shadow-md">
        <Form />
      </div>
    </section>
  );
}

export default Contact;
