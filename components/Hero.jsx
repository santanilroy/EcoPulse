"use client";
import React, { useState } from "react";

const Hero = () => {
  const [climateFact, setClimateFact] = useState("");
  const [showFloatingBox, setShowFloatingBox] = useState(false);

  const randomizePrompt = () => {
    const suffixes = [
      "Make it fun.",
      "Keep it concise.",
      "Use a historical fact.",
      "Make it shocking.",
      "Add a number.",
    ];
    const randomSuffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    return `Tell me a climate fact. ${randomSuffix}`;
  };

  const generateClimateFact = async () => {
    setClimateFact("Loading...");
    setShowFloatingBox(true);

    const promptText = randomizePrompt();

    const payload = {
      contents: [{ role: "user", parts: [{ text: promptText }] }],
      generationConfig: { temperature: 0.9 },
    };

    try {
      const response = await fetch("/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result?.candidates?.[0]?.content?.parts?.[0]?.text) {
        setClimateFact(result.candidates[0].content.parts[0].text);
      } else {
        setClimateFact("Error: Couldn't fetch a fact. Try again.");
      }
    } catch (err) {
      console.error("Gemini API error:", err);
      setClimateFact("Error: Failed to fetch climate fact.");
    }
  };

  return (
    <>
      <section
        id="heroSec"
        className="bg-gradient-to-r from-blue-600 to-green-600 backdrop-blur-md w-full"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-auto min-h-[700px] flex flex-col justify-center items-center py-10">
          <h1 className="text-white text-3xl sm:text-5xl md:text-8xl font-bold tracking-tight text-center my-7 mb-6 animate-fade-in-up">
            Our Planet, Our Future. Understanding Climate Change.
          </h1>

          <p className="text-white/80 text-center text-lg sm:text-2xl md:text-3xl font-medium tracking-tight my-7 animate-fade-in-up animation-delay-500">
            Explore the science, impacts, and solutions for a sustainable
            tomorrow.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10 my-7 w-full">
            <button className="px-4 sm:px-5 py-3 sm:py-4 bg-white text-blue-600 backdrop-blur-2xl font-medium rounded-full text-base sm:text-xl md:text-2xl tracking-tight hover:scale-105 duration-300 delay-100 cursor-pointer w-full sm:w-auto">
              Learn More
            </button>
            <button
              onClick={generateClimateFact}
              className="px-4 sm:px-5 py-3 sm:py-4 bg-yellow-400 text-yellow-800 font-medium backdrop-blur-2xl rounded-full text-base sm:text-xl md:text-2xl tracking-tight hover:scale-105 duration-300 delay-100 cursor-pointer w-full sm:w-auto mt-3 sm:mt-0"
            >
              Climate Fact of the Day
            </button>
          </div>
        </div>
      </section>
      {/* Floating Box */}
      {showFloatingBox && (
        <div className="fixed bottom-8 right-8 bg-white/20 backdrop-blur-2xl shadow-xl rounded-2xl p-6 max-w-md w-[90%] animate-fade-in border border-gray-200 z-50">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold text-green-700">
              🌍 Climate Fact
            </h2>
            <button
              onClick={() => setShowFloatingBox(false)}
              className="text-gray-400 hover:text-red-500 text-xl font-bold cursor-pointer"
            >
              &times;
            </button>
          </div>
          <p className="text-blue-600 text-lg font-normal">{climateFact}</p>
        </div>
      )}
    </>
  );
};

export default Hero;
