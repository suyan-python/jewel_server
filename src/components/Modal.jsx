import React, { useRef } from "react";
import { IoCloseCircle, IoDownloadOutline } from "react-icons/io5";
import menu from "../assets/menu/iNaya-Menu.pdf";

function Modal({ onClose }) {
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
      className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-60 text-white font-medium p-4"
    >
      <div className="relative max-w-lg w-full mx-4 bg-white text-gray-900 rounded-lg shadow-lg p-6 sm:p-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
        >
          <IoCloseCircle size={28} />
        </button>
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl font-extrabold mb-4">
            Download Our Menu
          </h1>
          <p className="text-lg sm:text-xl mb-6">Watch our menu in your hand</p>
          <a
            href={menu}
            download="iNaya-Menu"
            target="blank"
            className="flex items-center justify-center gap-2 px-6 py-3 font-medium text-white bg-black rounded-md shadow-md hover:bg-gray-800 transition duration-300 ease-in-out"
          >
            <IoDownloadOutline size={20} />
            Download Menu
          </a>
        </div>
      </div>
    </div>
  );
}

export default Modal;
