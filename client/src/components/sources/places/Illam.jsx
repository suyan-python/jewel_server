// pages/sources/Illam.jsx
import React from "react";
import illamImage from "../../../assets/pictures/source/illam.jpg";

function Illam()
{
    return (
        <div className="max-w-6xl mx-auto px-6 py-12">
            {/* Hero Section */}
            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-brownn">
                        Coffee Journey from Illam
                    </h1>
                    <p className="text-lg leading-relaxed mb-4 text-gray-700">
                        Illam is already famous for its tea, but its volcanic-rich soil and
                        cool climate make it equally exceptional for coffee cultivation.
                        Beans here are grown at <strong className="text-brownn">1,400–2,000 meters</strong>,
                        producing complex flavors with wine-like qualities.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-700">
                        Our story in Illam is one of tradition meeting innovation—farmers
                        have embraced specialty coffee processing, allowing their beans to
                        shine in global markets while preserving their cultural heritage.
                    </p>
                </div>
                <div className="overflow-hidden rounded-2xl shadow-lg">
                    <img
                        src={illamImage}
                        alt="Coffee farms in Illam"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                </div>
            </div>

            {/* Flavor Profile */}
            <div className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 text-brownn">Flavor Profile</h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-2">
                    Illam coffee is celebrated for its <em>fruity, wine-like flavors</em>
                    with hints of berries and floral undertones, delivering a vibrant and
                    layered cup.
                </p>
                <ul className="list-disc list-inside text-gray-700 text-lg space-y-1">
                    <li>Altitude: 1,400 – 2,000 meters</li>
                    <li>Flavor Notes: Berry, Floral, Wine-like</li>
                    <li>Body: Rich and Complex</li>
                    <li>Best For: Pour-over & French Press</li>
                </ul>
            </div>

            {/* Impact Section */}
            <div className="bg-gray-50 rounded-2xl p-6 md:p-10 shadow-md">
                <h2 className="text-2xl font-semibold mb-4 text-brownn">Our Impact in Illam</h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                    By partnering with Illam’s farmers, we provide access to better
                    processing facilities and international markets, ensuring that their
                    craft is recognized globally.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                    Illam coffee is more than a product—it’s a cultural bridge between
                    tradition and modern specialty coffee.
                </p>
            </div>
        </div>
    );
}

export default Illam;
