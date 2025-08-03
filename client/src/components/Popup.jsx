import React, { useState, useEffect } from "react";

const Popup = () =>
{
    const [isVisible, setIsVisible] = useState(true);

    // useEffect(() =>
    // {
    //     const alreadySubmitted = localStorage.getItem("popupSubmitted");
    //     if (!alreadySubmitted)
    //     {
    //         setIsVisible(true);
    //     }
    // }, []);

    const closePopup = () =>
    {
        setIsVisible(false);
        localStorage.setItem("popupSubmitted", "true");
    };

    const redirectToStore = () =>
    {
        window.open("https://store.jewelhimalayanproducts.com", "_blank");
    };


    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
            <div className="bg-white text-center rounded-3xl shadow-2xl overflow-hidden max-w-md w-full p-6 relative">
                {/* Close button */}
                <button
                    onClick={closePopup}
                    className="absolute top-3 right-3 text-gray-500 hover:text-black"
                    aria-label="Close"
                >
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M6 18L18 6M6 6l12 12"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>

                {/* Main Content */}
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                    Ready to Experience Pure Illam Coffee?
                </h2>
                <p className="text-gray-600 text-sm md:text-base mb-5 px-2">
                    Visit our official store to explore and buy our exclusive collection of premium coffee products directly from the heart of Illam.
                </p>

                {/* CTA Button */}
                <button
                    onClick={redirectToStore}
                    className="bg-[#795548] hover:bg-[#3c2a24] text-white px-6 py-3 rounded-full font-semibold transition duration-300"
                >
                    Go to Store
                </button>

                <p
                    onClick={closePopup}
                    className="mt-4 text-xs text-gray-500 hover:underline cursor-pointer"
                >
                    No thanks, maybe later.
                </p>
            </div>
        </div>
    );
};

export default Popup;
