import React from "react";
import { Link } from "react-router-dom";

const SeoBlogPage = () =>
{
    return (
        <div className="max-w-4xl mx-auto px-6 py-12">
            <h1 className="text-3xl md:text-5xl font-bold text-blue-700 mb-6">
                Discover the Pure Taste of Himalayan Coffee & Natural Products
            </h1>
            <p className="text-lg text-gray-700 mb-6">
                Welcome to Jewel Himalayan Products – your trusted source for
                high-quality, sustainably grown coffee beans and handcrafted goods
                directly from the pristine hills of Ilam, Nepal. Our mission is to
                deliver the most authentic and organic Himalayan flavors straight to
                your cup and home, while supporting local farmers and preserving
                traditional methods.
            </p>

            <h2 className="text-2xl font-semibold text-blue-700 mt-10 mb-4">
                Why Choose Himalayan Coffee?
            </h2>
            <p className="text-gray-800 mb-4">
                Our <strong>Himalayan coffee beans</strong> are grown at high altitudes
                in rich, volcanic soil, nourished by pure mountain rainwater. The slow
                growth process allows our coffee to develop deeper flavors and richer
                aromas. Every sip embodies the heritage of Nepalese agriculture—pure,
                bold, and natural.
            </p>
            <ul className="list-disc list-inside mb-6 text-gray-700">
                <li>Grown above 4,500 ft in Ilam, Nepal</li>
                <li>100% organic and pesticide-free</li>
                <li>Hand-harvested and sun-dried</li>
                <li>Supports women-led farming cooperatives</li>
            </ul>

            <h2 className="text-2xl font-semibold text-blue-700 mt-10 mb-4">
                Our Sustainable Promise
            </h2>
            <p className="text-gray-800 mb-4">
                At Jewel Himalayan Products, we believe in business that supports
                nature. Our operations are rooted in sustainability—from ethical sourcing
                and fair wages to eco-friendly packaging. When you shop with us, you're
                empowering Nepali communities and choosing a greener planet.
            </p>

            <h2 className="text-2xl font-semibold text-blue-700 mt-10 mb-4">
                Our Product Line
            </h2>
            <p className="text-gray-800 mb-2">
                We specialize in exclusive Himalayan goods that are rare, pure, and
                rooted in tradition. Explore our top categories:
            </p>
            <ul className="list-disc list-inside mb-6 text-gray-700">
                <li>Premium Single-Origin Coffee Beans (Washed, Drip, and Special Editions)</li>
                <li>Artisanal Spices and Herbs</li>
                <li>Eco-friendly Handmade Goods from Local Artisans</li>
            </ul>

            <h2 className="text-2xl font-semibold text-blue-700 mt-10 mb-4">
                Direct from Farmers to Your Doorstep
            </h2>
            <p className="text-gray-800 mb-6">
                We eliminate the middleman to ensure you get fresh, fairly priced
                products while helping Nepali farmers earn what they deserve. Our
                supply chain is direct, transparent, and traceable—from farm to cup.
            </p>

            <h2 className="text-2xl font-semibold text-blue-700 mt-10 mb-4">
                Join the Himalayan Revolution
            </h2>
            <p className="text-gray-800 mb-6">
                Whether you are a coffee connoisseur, a sustainability enthusiast, or
                just someone looking to try something new and authentic—Jewel Himalayan
                Products welcomes you. Experience the taste of the Himalayas and support
                a movement rooted in purpose and purity.
            </p>

            <div className="text-center mt-12">
                <Link to={'/seoblog'}
                    className="bg-green-700 text-white px-6 py-3 rounded-full text-lg hover:bg-green-900 transition"
                >
                    SEO blog
                </Link>
            </div>
            <div className="text-center mt-12">
                <Link to={'/store'}
                    href="/store"
                    className="bg-blue-700 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-900 transition"
                >
                    Shop Now – Taste the Himalayas
                </Link>
            </div>
        </div>
    );
};

export default SeoBlogPage;
