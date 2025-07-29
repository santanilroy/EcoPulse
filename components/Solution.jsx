"use client";
import React from "react";
import { HiOutlineLightBulb } from "react-icons/hi2";
import { MdRecycling } from "react-icons/md";
import { LuHeartHandshake } from "react-icons/lu";

const solutions = [
  {
    title: "Renewable Energy",
    icon: <HiOutlineLightBulb className="w-12 h-12 text-yellow-500 mb-4" />,
    description:
      "Transitioning to solar, wind, and hydro power reduces reliance on fossil fuels.",
  },
  {
    title: "Sustainable Practices",
    icon: <MdRecycling className="w-12 h-12 text-purple-500 mb-4" />,
    description:
      "Adopting eco-friendly habits in consumption, agriculture, and waste management.",
  },
  {
    title: "Global Cooperation",
    icon: <LuHeartHandshake className="w-12 h-12 text-indigo-500 mb-4" />,
    description:
      "International agreements and collective action are crucial to address this global challenge.",
  },
];

const Solution = () => {
  return (
    <>
      <section id="solutionSec" className="bg-emerald-50 px-2 sm:px-6">
        <h1 className="text-2xl sm:text-4xl font-bold text-center text-gray-800 py-10 sm:py-20">
          Pathways to a Sustainable Future
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto py-6 sm:py-10">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center transform hover:scale-105 transition-transform duration-300 hover:shadow-xl"
            >
              {solution.icon}
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                {solution.title}
              </h3>
              <p className="text-gray-600 mb-4">{solution.description}</p>
              <button
                onClick={() => explainSolution(solution.title)}
                className="bg-indigo-500 text-white hover:bg-indigo-600 px-6 py-2 rounded-full text-sm font-semibold shadow-md transition-all duration-300 flex items-center justify-center mt-auto"
              >
                ✨ Explain More
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Solution;
