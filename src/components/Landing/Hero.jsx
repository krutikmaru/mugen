// Hero.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import Work from "./Work";
import toast from "react-hot-toast";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="min-h-[50vh]  space-y-7 flex flex-col justify-center items-center absolute top-32 px-10 text-center pb-32"
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
  const [email, setEmail] = useState("");
  const handleConnectWithUsClick = () => {
    if (!email) {
      toast.error("Email is required", {
        style: {
          backgroundColor: "#080821",
          color: "#fff",
          border: "1px solid #131334",
        },
      });
      return;
    }
    toast.success("We received you Mail", {
      style: {
        backgroundColor: "#080821",
        color: "#fff",
        border: "1px solid #131334",
      },
    });
  };
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
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email..."
      ></input>
      <button
        onClick={handleConnectWithUsClick}
        className="px-5 py-2 w-48 mt-7 sm:mt-0 bg-gradient-to-r text-base from-red-500 to-purple-600 rounded-lg hover:scale-105 transform transition-transform duration-300 ease-in-out"
      >
        Connect with us
      </button>
    </motion.div>
  );
};

export default Hero;
