// Glow.jsx
import React from "react";
import { motion } from "framer-motion";

const Glow = () => {
  return (
    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-96 h-96 flex justify-center items-center"
      >
        <GlowLevel1 />
        <GlowLevel2 />
        <GlowLevel3 />
      </motion.div>
    </div>
  );
};

const GlowLevel1 = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="bg-mugen-purple-dark w-[480px] h-[480px] shadow-ball-level-1 rounded-full absolute"
    ></motion.div>
  );
};

const GlowLevel2 = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 120 }}
      animate={{ opacity: 1, y: 80 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="bg-mugen-purple-dark w-[460px] h-[460px] shadow-ball-level-2 rounded-full absolute"
    ></motion.div>
  );
};

const GlowLevel3 = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 180 }}
      transition={{ delay: 1.3, duration: 0.8 }}
      className="bg-mugen-purple-dark w-[460px] h-[460px] shadow-ball-level-3 rounded-full absolute"
    ></motion.div>
  );
};
export default Glow;
