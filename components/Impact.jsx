"use client";
import React from "react";
import { IoRainyOutline } from "react-icons/io5";
import { BsThermometerHigh } from "react-icons/bs";
import { FaGlobeEurope } from "react-icons/fa";

// Dummy data for impacts and solutions
const impacts = [
  {
    title: "Rising Sea Levels",
    icon: <IoRainyOutline className="w-12 h-12 text-blue-500 mb-4" />,
    description:
      "Coastal areas face increased flooding and erosion, displacing communities and damaging infrastructure.",
  },
  {
    title: "Extreme Weather",
    icon: <BsThermometerHigh className="w-12 h-12 text-red-500 mb-4" />,
    description:
      "More frequent and intense heatwaves, droughts, floods, and storms threaten lives and livelihoods.",
  },
  {
    title: "Biodiversity Loss",
    icon: <FaGlobeEurope className="w-12 h-12 text-green-500 mb-4" />,
    description:
      "Ecosystems are disrupted, leading to species extinction and loss of vital natural resources.",
  },
];

const Impact = () => {
  return (
    <>
      <section
        id="impactSec"
        className="bg-rose-50 w-full backdrop-blur-md px-2 sm:px-6"
      >
        <h1 className="text-2xl sm:text-4xl font-bold text-gray-800 text-center py-10 sm:py-20">
          Impacts of Climate Change
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto py-6 sm:py-10">
          {impacts.map((impact, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300 hover:shadow-xl"
            >
              {impact.icon}
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                {impact.title}
              </h3>
              <p className="text-gray-600">{impact.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Impact;
