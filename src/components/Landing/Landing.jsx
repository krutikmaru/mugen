import React from "react";
import Glow from "./Glow";
import Hero from "./Hero";
import { useApplicationManager } from "../../contexts/ApplicationContext";
import Testimonials from "./Testimonials/Testimonials";

const Landing = () => {
  const { isSmallScreen } = useApplicationManager();
  return (
    <div
      className="w-full  min-h-screen bg-red-00 relative flex justify-center items-center"
      style={{
        marginBottom: isSmallScreen ? 120 : 290,
      }}
    >
      <Glow />
      <Hero />
    </div>
  );
};

export default Landing;
