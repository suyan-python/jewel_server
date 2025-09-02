// pages/sources/Rasuwa.jsx
import React from "react";
import rasuwaImage from "../../../assets/pictures/source/rasuwa.jpeg";

function Rasuwa()
{
    return (
        <div className="max-w-6xl mx-auto px-6 py-12">
            {/* Hero Section */}
            <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-brownn">
                        Coffee Journey from Rasuwa
                    </h1>
                    <p className="text-lg leading-relaxed mb-4 text-gray-700">
                        Rasuwa, nestled near the Langtang Himalayan range, offers some of
                        Nepal’s highest-altitude coffee farms at{" "}
                        <strong className="text-brownn">1,400–2,000 meters</strong>. The
                        cool mountain climate and clean water sources make Rasuwa coffee
                        truly unique.
                    </p>
                    <p className="text-lg leading-relaxed text-gray-700">
                        Coffee farming here is not just agriculture—it’s a lifeline for
                        mountain communities. Our collaboration ensures that these remote
                        farmers can bring their exceptional beans to wider markets.
                    </p>
                </div>
                <div className="overflow-hidden rounded-2xl shadow-lg">
                    <img
                        src={rasuwaImage}
                        alt="Coffee farms in Rasuwa"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                </div>
            </div>

            {/* Flavor Profile */}
            <div className="mb-12">
                <h2 className="text-2xl font-semibold mb-4 text-brownn">Flavor Profile</h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-2">
                    Rasuwa coffee is distinct for its <em>clean, crisp taste</em> with
                    fruity and floral undertones, making it an elegant cup with refreshing
                    balance.
                </p>
                <ul className="list-disc list-inside text-gray-700 text-lg space-y-1">
                    <li>Altitude: 1,400 – 2,000 meters</li>
                    <li>Flavor Notes: Fruity, Floral, Crisp</li>
                    <li>Body: Light to Medium</li>
                    <li>Best For: Pour-over & Cold Brew</li>
                </ul>
            </div>

            {/* Impact Section */}
            <div className="bg-gray-50 rounded-2xl p-6 md:p-10 shadow-md">
                <h2 className="text-2xl font-semibold mb-4 text-brownn">Our Impact in Rasuwa</h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-4">
                    We assist Rasuwa farmers by improving transportation links and
                    post-harvest handling, helping them overcome the challenges of their
                    remote mountain environment.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                    Supporting Rasuwa coffee means uplifting Himalayan communities while
                    enjoying some of Nepal’s finest high-altitude beans.
                </p>
            </div>
        </div>
    );
}

export default Rasuwa;
