import React, { useRef } from "react";
import { IoCloseCircle, IoDownloadOutline } from "react-icons/io5";

import menu from "../assets/menu/iNaya-Menu.pdf";

function Login({ onClose }) {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className=" fixed flex flex-col justify-center items-center inset-0 z-10 bg-black bg-opacity-30 backdrop-blur-sm text-white font-medium"
    >
      <div className="mt-10 flex flex-col gap-5">
        <button onClick={onClose} className="place-self-end">
          <IoCloseCircle size={30} />
        </button>
        <div className="bg-brightColor rounded-xl px-20 py-10 flex flex-col gap-5 items-center mx-4 shadow-md">
          <h1 className="text-3xl font-extrabold">Download our Menu</h1>
          <p className="text-2 xl max-w-md text-center">
            Watch our menu in your hand
          </p>
          <form action="">
            <input
              type="email"
              placeholder="Enter your Email"
              required
              className="w-full px-4 py-3 text-black border-gray-300 rounded-md"
            />
            <button className="mt-4 w-full flex items-center justify-center gap-2 px-5 py-3 font-medium rounded-md bg-black">
              <IoDownloadOutline />{" "}
              <a href={menu} download="iNaya-Menu">
                Download Menu
              </a>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
