// pages/sources/Sindupalchok.jsx
import React from "react";
import sindupalchokImage from "../../../assets/pictures/source/sindupalchok.jpg";

function Sindupalchok()
{
    return (
        <div className="max-w-6xl mx-auto px-6 py-12">
            {/* Hero Section */}
            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-brownn">
                        Coffee Journey from Sindupalchok
                    </h1>
                    <p className="text-lg leading-relaxed mb-4 text-gray-700">
                        Sindupalchok, with its dramatic hillsides and fresh mountain air,
                        offers an ideal microclimate for coffee cultivation. Farmers grow
                        beans between <strong className="text-brownn">1,300–1,800 meters</strong>,
                        resulting in coffee with bright acidity and citrus-forward notes.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-700">
                        Our journey here is about resilience—helping farmers rebuild their
                        livelihoods after natural disasters while creating sustainable
                        coffee-growing communities. Every cup carries a story of hope and
                        renewal.
                    </p>
                </div>
                <div className="overflow-hidden rounded-2xl shadow-lg">
                    <img
                        src={sindupalchokImage}
                        alt="Coffee farms in Sindupalchok"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                </div>
            </div>

            {/* Flavor Profile */}
            <div className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 text-brownn">Flavor Profile</h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-2">
                    Sindupalchok coffee is known for its <em>bright, citrusy flavors</em>
                    paired with delicate floral aromas, creating a lively cup with a clean finish.
                </p>
                <ul className="list-disc list-inside text-gray-700 text-lg space-y-1">
                    <li>Altitude: 1,300 – 1,800 meters</li>
                    <li>Flavor Notes: Citrus, Floral, Light Sweetness</li>
                    <li>Body: Bright and Refreshing</li>
                    <li>Best For: Filter Coffee & Cold Brew</li>
                </ul>
            </div>

            {/* Impact Section */}
            <div className="bg-gray-50 rounded-2xl p-6 md:p-10 shadow-md">
                <h2 className="text-2xl font-semibold mb-4 text-brownn">Our Impact in Sindupalchok</h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                    We work with farmers to improve post-harvest processing and drying
                    techniques, ensuring consistent quality while boosting income for
                    families in the region.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                    Coffee from Sindupalchok represents not just a drink, but a
                    sustainable future for mountain farming communities.
                </p>
            </div>
        </div>
    );
}

export default Sindupalchok;
