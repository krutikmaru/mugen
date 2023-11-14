// NavigationLinks.jsx
import React from "react";
import { motion } from "framer-motion";

const NavigationLinks = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.2 }}
      className="flex p-2 px-10 rounded-full border-[1px] border-[#16163a]"
    >
      <motion.div className="mr-10 cursor-pointer hover:text-purple-400 transition-all duration-300 ease-in-out">
        <span>Projects</span>
      </motion.div>
      <motion.div className="mr-10 cursor-pointer hover:text-purple-400 transition-all duration-300 ease-in-out">
        <span>Blog</span>
      </motion.div>
      <motion.div className="cursor-pointer hover:text-purple-400 transition-all duration-300 ease-in-out">
        <span>About</span>
      </motion.div>
    </motion.div>
  );
};

export default NavigationLinks;
