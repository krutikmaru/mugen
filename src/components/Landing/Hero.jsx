// Hero.jsx
import React from "react";
import { motion } from "framer-motion";
import Work from "./Work";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="min-h-[50vh]  space-y-7 flex flex-col justify-center items-center absolute top-32 px-10"
    >
      <HeroTitle />
      <ConnectWithUs />
      <Work />
    </motion.div>
  );
};

const HeroTitle = () => {
  return (
    <>
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-8xl font-bold font-lexend-deca"
      >
        We Power{" "}
        <span className="bg-gradient-to-r from-red-500 to-purple-600 text-transparent bg-clip-text">
          SMEs
        </span>
      </motion.span>
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="text-xl text-gray-400 font-light align-middle"
      >
        Designed to dramatically scale down costs, optimize processes, and
        simplify operations.
      </motion.span>
    </>
  );
};

const ConnectWithUs = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.3, duration: 0.8 }}
      className="text-xl w-full flex sm:flex-row flex-col items-center justify-center"
    >
      <input
        className="px-5 py-2 w-full sm:w-fit sm:mr-5 text-base font-light rounded-lg outline-none bg-[#ffffff0d] backdrop-blur-sm border-[1px] border-gray-800"
        type="email"
        placeholder="Enter your email..."
      ></input>
      <button className="px-5 py-2 w-48 mt-7 sm:mt-0 bg-gradient-to-r text-base from-red-500 to-purple-600 rounded-lg">
        Connect with us
      </button>
    </motion.div>
  );
};

export default Hero;
