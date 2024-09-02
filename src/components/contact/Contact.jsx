import React from "react";
import Form from "./Form";

function Contact() {
  return (
    <>
      <section className="flex justify-around h-screen items-center rounded-2xl shadow-xl">
        <div className="text-area w-3/4 flex flex-col px-24 ">
          <div className="title font-semibold text-5xl">Contact Us</div>
          <div className="description w-3/4">
            <div className="py-5">
              <p>Contact Jewel Himalayan Products for premium Nepali Arabica</p>
              <p>We’d love to work with you. Get in touch today.</p>
            </div>

            <div>
              <div>
                <a href="mailto:jewel.himalayan.2021@gmail.com">
                  jewel.himalayan.2021@gmail.com
                </a>
              </div>
              <div className="py-2">
                <a href="tel:+977 9817576110">+977 9817576110</a>
              </div>
              <div className="">
                Jewel Himalayan Products, Bagmati, Kathmandu, Balkhu
              </div>
            </div>
          </div>
          <div className="values my-10 font-medium">
            <div className="title text-4xl font-medium">Our Values</div>
            <div className="points mt-3">
              <ul className="font-thin">
                <li>Ethical</li>
                <li>Transparency and traceability</li>
                <li>Responsibility</li>
                <li>Collaboration</li>
                <li>Perseverance</li>
                <li>Relationship</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="form-area w-2/4 flex flex-col justify-center items-center py-10 rounded-2xl shadow-lg mx-10">
          <Form />
        </div>
      </section>
    </>
  );
}

export default Contact;
