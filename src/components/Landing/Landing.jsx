import React from "react";
import Glow from "./Glow";
import Hero from "./Hero";
import { useApplicationManager } from "../../contexts/ApplicationContext";

const Landing = () => {
  const { isSmallScreen } = useApplicationManager();
  return (
    <div
      className="w-full min-h-screen relative flex justify-center items-center"
      style={{
        marginBottom: isSmallScreen ? 0 : 290,
      }}
    >
      <Glow />
      <Hero />
    </div>
  );
};

export default Landing;
