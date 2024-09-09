import React from "react";
import Form from "./Form";

function Contact() {
  return (
    <>
      <section className="flex justify-around  items-center rounded-2xl shadow-xl">
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
                <a href="tel:+977 9817576110">
                  +977 9817576110, 98288293162, 9841208219
                </a>
              </div>
              <div className="">
                Jewel Himalayan Products, Bagmati, Kathmandu, Balkhu
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/4 flex flex-col justify-center items-center py-10 rounded-2xl  mx-10 ">
          <Form />
        </div>
      </section>
    </>
  );
}

export default Contact;
