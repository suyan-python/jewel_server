// pages/sources/SourcesOverview.jsx
import React from "react";
import { Link } from "react-router-dom";

// Import your images
import kavreImage from "../../assets/pictures/source/kavre.jpg";
import sindhupalchokImage from "../../assets/pictures/source/sindupalchok.jpg";
import illamImage from "../../assets/pictures/source/illam.jpg";
import nuwakotImage from "../../assets/pictures/source/nuwakot.jpg";
import phidimImage from "../../assets/pictures/source/phidim.jpeg";
import syanjaImage from "../../assets/pictures/source/syanja.jpg";
import rasuwaImage from "../../assets/pictures/source/rasuwa.jpeg";

function SourcesOverview()
{
    const sources = [
        {
            name: "Kavre",
            image: kavreImage,
            description:
                "Fertile mid-hills producing smooth and balanced coffee with chocolatey sweetness.",
            link: "/source/kavre",
        },
        {
            name: "Sindhupalchok",
            image: sindhupalchokImage,
            description:
                "High-altitude district offering bright, fruity flavors and clean cups.",
            link: "/source/sindhupalchok",
        },
        {
            name: "Illam",
            image: illamImage,
            description:
                "Nepal’s eastern hills known for rich, aromatic coffee with floral hints.",
            link: "/source/illam",
        },
        {
            name: "Nuwakot",
            image: nuwakotImage,
            description:
                "A region blending history and coffee farming, producing earthy, bold brews.",
            link: "/source/nuwakot",
        },
        {
            name: "Phidim",
            image: phidimImage,
            description:
                "Eastern Nepal’s hidden gem, yielding bright coffee with citrus undertones.",
            link: "/source/phidim",
        },
        {
            name: "Syanja",
            image: syanjaImage,
            description:
                "Rolling hills with fertile soil, producing sweet, nutty coffee with balance.",
            link: "/source/syanja",
        },
        {
            name: "Rasuwa",
            image: rasuwaImage,
            description:
                "Mountain region cultivating coffee with unique depth and a rustic profile.",
            link: "/source/rasuwa",
        },
    ];

    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-brownn">
                Our Coffee Sources
            </h1>
            <p className="subheader text-lg text-gray-700 font-medium text-center max-w-3xl mx-auto mb-12">
                From the eastern hills of Illam to the mid-hills of Kavre and the
                mountains of Rasuwa, our coffee journey spans Nepal’s diverse regions.
                Each source tells a story of unique flavors, hardworking farmers, and
                sustainable cultivation.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {sources.map((source) => (
                    <div
                        key={source.name}
                        className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
                    >
                        <img
                            src={source.image}
                            alt={source.name}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6 flex flex-col flex-grow">
                            <h2 className="text-2xl font-semibold text-brownn mb-3">
                                {source.name}
                            </h2>
                            <p className="subheader font-medium text-gray-700 text-lg mb-4 flex-grow">
                                {source.description}
                            </p>
                            <div className="mt-auto">
                                <Link
                                    to={source.link}
                                    className="text-brownn font-semibold hover:underline"
                                >
                                    Explore {source.name} →
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SourcesOverview;
