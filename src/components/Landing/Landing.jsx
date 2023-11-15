import React from "react";
import Glow from "./Glow";
import Hero from "./Hero";

const Landing = () => {
  return (
    <div className="w-full  min-h-screen bg-red-00 relative flex justify-center items-center mb-72">
      <Glow />
      <Hero />
    </div>
  );
};

export default Landing;
