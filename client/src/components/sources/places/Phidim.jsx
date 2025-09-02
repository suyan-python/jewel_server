// pages/sources/Phidim.jsx
import React from "react";
import phidimImage from "../../../assets/pictures/source/phidim.jpeg";

function Phidim()
{
    return (
        <div className="max-w-6xl mx-auto px-6 py-12">
            {/* Hero Section */}
            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-brownn">
                        Coffee Journey from Phidim
                    </h1>
                    <p className="text-lg leading-relaxed mb-4 text-gray-700">
                        Phidim, located in Nepal’s eastern hills, is a rising star in
                        specialty coffee. With elevations from{" "}
                        <strong className="text-brownn">1,300–1,900 meters</strong>, its
                        farms produce beans with vibrant floral aromas and bright acidity.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-700">
                        Coffee cultivation here is deeply community-driven, with farmers
                        committed to quality and sustainability. Our work in Phidim supports
                        smallholder farmers in showcasing their unique coffee to the world.
                    </p>
                </div>
                <div className="overflow-hidden rounded-2xl shadow-lg">
                    <img
                        src={phidimImage}
                        alt="Coffee farms in Phidim"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                </div>
            </div>

            {/* Flavor Profile */}
            <div className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 text-brownn">Flavor Profile</h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-2">
                    Phidim coffee is known for its <em>floral notes, citrus brightness</em>,
                    and a tea-like body—perfect for those who enjoy light and delicate cups.
                </p>
                <ul className="list-disc list-inside text-gray-700 text-lg space-y-1">
                    <li>Altitude: 1,300 – 1,900 meters</li>
                    <li>Flavor Notes: Floral, Citrus, Tea-like</li>
                    <li>Body: Light and Vibrant</li>
                    <li>Best For: Pour-over & Aeropress</li>
                </ul>
            </div>

            {/* Impact Section */}
            <div className="bg-gray-50 rounded-2xl p-6 md:p-10 shadow-md">
                <h2 className="text-2xl font-semibold mb-4 text-brownn">Our Impact in Phidim</h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                    We partner with cooperatives in Phidim to provide training on organic
                    farming and quality processing, helping farmers command premium prices.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                    Supporting Phidim coffee means supporting families who are dedicated
                    to building a brighter future through coffee.
                </p>
            </div>
        </div>
    );
}

export default Phidim;
