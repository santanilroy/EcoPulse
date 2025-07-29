import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="w-full">
        <div className="max-w-7xl mx-auto flex flex-col justify-center items-center gap-3 h-[200px] px-4 sm:px-6">
          <p className="text-base sm:text-lg md:text-xl font-light text-gray-600 text-center tracking-tight">
            © 2025 Climate Awareness Project. All rights reserved.
          </p>
          <p className="text-base sm:text-lg md:text-xl font-light text-gray-600 text-center tracking-tight">
            Designed with passion for a sustainable future.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
