// pages/sources/Nuwakot.jsx
import React from "react";
import nuwakotImage from "../../../assets/pictures/source/nuwakot.jpg";

function Nuwakot()
{
    return (
        <div className="max-w-6xl mx-auto px-6 py-12">
            {/* Hero Section */}
            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-brownn">
                        Coffee Journey from Nuwakot
                    </h1>
                    <p className="text-lg leading-relaxed mb-4 text-gray-700">
                        Nuwakot, a district rich in history and heritage, is also home to
                        fertile valleys perfect for coffee farming. Coffee here thrives
                        between <strong className="text-brownn">1,100–1,600 meters</strong>,
                        producing beans with earthy tones and nutty flavors.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-700">
                        Our connection with Nuwakot is about preserving both culture and
                        agriculture. Farmers combine traditional methods with modern
                        practices, creating coffee that is as soulful as the land itself.
                    </p>
                </div>
                <div className="overflow-hidden rounded-2xl shadow-lg">
                    <img
                        src={nuwakotImage}
                        alt="Coffee farms in Nuwakot"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                </div>
            </div>

            {/* Flavor Profile */}
            <div className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 text-brownn">Flavor Profile</h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-2">
                    Nuwakot coffee offers <em>earthy, nutty notes</em> with a mild
                    sweetness and a smooth finish—perfect for those who enjoy a grounded,
                    traditional cup.
                </p>
                <ul className="list-disc list-inside text-gray-700 text-lg space-y-1">
                    <li>Altitude: 1,100 – 1,600 meters</li>
                    <li>Flavor Notes: Nutty, Earthy, Mild Sweetness</li>
                    <li>Body: Medium and Smooth</li>
                    <li>Best For: Drip Coffee & Espresso</li>
                </ul>
            </div>

            {/* Impact Section */}
            <div className="bg-gray-50 rounded-2xl p-6 md:p-10 shadow-md">
                <h2 className="text-2xl font-semibold mb-4 text-brownn">Our Impact in Nuwakot</h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                    We’ve supported Nuwakot farmers by introducing quality control
                    processes and improving access to markets, ensuring they receive fair
                    value for their work.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                    Every sip of Nuwakot coffee is a tribute to the region’s resilience
                    and heritage.
                </p>
            </div>
        </div>
    );
}

export default Nuwakot;
