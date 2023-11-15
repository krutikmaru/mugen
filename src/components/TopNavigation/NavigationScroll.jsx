import React from "react";
import { motion } from "framer-motion";

const NavigationScroll = () => {
  return (
    // <motion.div
    //   initial={{ opacity: 0, y: -10 }}
    //   animate={{ opacity: 1, y: 0 }}
    //   transition={{ delay: 0.5, duration: 0.3 }}
    //   className="flex p-2 px-10 rounded-full border-[1px] border-[#16163a]"
    // >
    //   <motion.div className="mr-10 cursor-pointer hover:text-purple-400 transition-all duration-300 ease-in-out">
    //     <span>Projects</span>
    //   </motion.div>
    //   <motion.div className="mr-10 cursor-pointer hover:text-purple-400 transition-all duration-300 ease-in-out">
    //     <span>Blog</span>
    //   </motion.div>
    //   <motion.div className="cursor-pointer hover:text-purple-400 transition-all duration-300 ease-in-out">
    //     <span>About</span>
    //   </motion.div>
    // </motion.div>
    <>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.2 }}
        className=" bg-mugen-purple-navigation backdrop-blur-md flex p-2 px-10 rounded-full border-[1px] border-[#16163a]"
      >
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.2 }}
          className="mr-10 text-purple-400"
        >
          M
        </motion.div>
        <span className="mr-10 cursor-pointer hover:text-purple-400 transition-all duration-300 ease-in-out">
          Projects
        </span>
        <span className="mr-10 cursor-pointer hover:text-purple-400 transition-all duration-300 ease-in-out">
          Blog
        </span>
        <span className="cursor-pointer hover:text-purple-400 transition-all duration-300 ease-in-out">
          About
        </span>
      </motion.div>
    </>
  );
};

export default NavigationScroll;
