import React from "react";

const Involved = () => {
  return (
    <>
      <section
        id="involvedSec"
        className="bg-gradient-to-r from-green-800 via-green-500 to-green-300 w-full my-10 rounded-2xl px-2 sm:px-6"
      >
        <div className="max-w-7xl mx-auto flex flex-col justify-center items-center h-auto min-h-[350px] py-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center tracking-tight text-white my-5">
            Make a Difference
          </h1>
          <p className="text-lg sm:text-2xl md:text-3xl font-semibold text-center tracking-tight text-white/80 my-6">
            Every action counts. Learn more about how you can contribute to
            climate solutions and create a healthier planet for all.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12 w-full mt-4">
            <button className="bg-white text-green-600 hover:bg-purple-100 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
              Explore Resources
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-400 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 w-full sm:w-auto mt-3 sm:mt-0">
              Find Organizations
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Involved;
