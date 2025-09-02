// pages/sources/Kavre.jsx
import React from "react";
import kavreImage from "../../../assets/pictures/source/kavre.jpg"; // <-- add your Kavre image here


function Kavre()
{
    return (
        <div className="max-w-6xl mx-auto px-6 py-12">
            {/* Hero Section */}
            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-brownn">
                        Coffee Journey from Kavre
                    </h1>
                    <p className="text-lg leading-relaxed mb-4 text-gray-700">
                        Kavre, nestled in Nepal’s mid-hills, is one of the most fertile and
                        scenic districts for coffee cultivation. Farmers here grow beans
                        between <strong className="text-brownn">1,200–1,600 meters</strong>, where the cool climate
                        and rich soil produce smooth and balanced coffee with a pleasant acidity.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-700">
                        Our journey in Kavre began with a vision to empower smallholder farmers.
                        By practicing sustainable methods and fair trade, we ensure that every cup
                        of coffee carries not only rich flavors but also the story of the hardworking
                        families behind it.
                    </p>
                </div>

                <div className="overflow-hidden rounded-2xl shadow-lg">
                    <img
                        src={kavreImage}
                        alt="Coffee farms in Kavre"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                </div>
            </div>

            {/* Flavor Profile */}
            <div className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 text-brownn">
                    Flavor Profile
                </h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-2">
                    Kavre coffee is renowned for its <em>sweet, chocolatey notes</em>
                    balanced with light fruity undertones. Its medium body makes it a
                    versatile choice for both espresso and pour-over brewing.
                </p>
                <ul className="list-disc list-inside text-gray-700 text-lg space-y-1">
                    <li>Altitude: 1,200 – 1,600 meters</li>
                    <li>Flavor Notes: Chocolate, Fruity, Sweet</li>
                    <li>Body: Smooth and Balanced</li>
                    <li>Best For: Espresso & Pour-over</li>
                </ul>
            </div>

            {/* Impact Section */}
            <div className="bg-gray-50 rounded-2xl p-6 md:p-10 shadow-md">
                <h2 className="text-2xl font-semibold mb-4 text-brownn">
                    Our Impact in Kavre
                </h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                    Beyond coffee, our mission in Kavre is to strengthen the local
                    farming community. Through training programs, we’ve introduced
                    sustainable farming techniques, helping farmers increase both yield
                    and quality while preserving the environment.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                    By working directly with farmers, we ensure fair wages and create
                    opportunities for the next generation to continue Nepal’s proud
                    tradition of coffee farming.
                </p>
            </div>
        </div>
    );
}

export default Kavre;
