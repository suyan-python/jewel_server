// pages/sources/Syanja.jsx
import React from "react";
import syanjaImage from "../../../assets/pictures/source/syanja.jpg";

function Syanja()
{
    return (
        <div className="max-w-6xl mx-auto px-6 py-12">
            {/* Hero Section */}
            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-brownn">
                        Coffee Journey from Syanja
                    </h1>
                    <p className="text-lg leading-relaxed mb-4 text-gray-700">
                        Syanja, located in western Nepal, is one of the country’s oldest
                        coffee-growing regions. With altitudes ranging from{" "}
                        <strong className="text-brownn">1,000–1,600 meters</strong>, farmers
                        here have passed down coffee-growing traditions through generations.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-700">
                        Our relationship with Syanja farmers highlights the importance of
                        heritage and craftsmanship. The beans here are bold, flavorful, and
                        full of character.
                    </p>
                </div>
                <div className="overflow-hidden rounded-2xl shadow-lg">
                    <img
                        src={syanjaImage}
                        alt="Coffee farms in Syanja"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                </div>
            </div>

            {/* Flavor Profile */}
            <div className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 text-brownn">Flavor Profile</h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-2">
                    Syanja coffee features <em>bold, full-bodied flavors</em> with notes
                    of spice and cocoa, making it a favorite for those who love strong cups.
                </p>
                <ul className="list-disc list-inside text-gray-700 text-lg space-y-1">
                    <li>Altitude: 1,000 – 1,600 meters</li>
                    <li>Flavor Notes: Cocoa, Spicy, Bold</li>
                    <li>Body: Full-bodied</li>
                    <li>Best For: Espresso & Traditional Brewing</li>
                </ul>
            </div>

            {/* Impact Section */}
            <div className="bg-gray-50 rounded-2xl p-6 md:p-10 shadow-md">
                <h2 className="text-2xl font-semibold mb-4 text-brownn">Our Impact in Syanja</h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                    By supporting farmers in Syanja, we help preserve their generational
                    knowledge while introducing modern practices for higher-quality beans.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                    Each cup of Syanja coffee reflects Nepal’s deep-rooted tradition and
                    timeless flavor.
                </p>
            </div>
        </div>
    );
}

export default Syanja;
