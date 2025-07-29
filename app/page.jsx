import React from "react";
import Navbar from "../components/Navbar";
import Hero from "@/components/Hero";
import Data from "@/components/Data";
import Impact from "@/components/Impact";
import Solution from "@/components/Solution";
import Involved from "@/components/Involved";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Data />
      <Impact />
      <Solution />
      <Involved />
      <Footer />
    </>
  );
};

export default page;
