import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";

const NavigationScroll = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.2 }}
        className=" bg-white/20 dark:bg-mugen-purple-navigation backdrop-blur-md flex p-2 px-10 rounded-full text-black dark:text-white border-[1px] border-[#16163a]"
      >
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.2 }}
          className="mr-10 text-purple-400"
        >
          <Link to="/">M</Link>
        </motion.div>
        <Link
          to="/projects"
          className="mr-8 cursor-pointer hover:text-purple-400 transition-all duration-300 ease-in-out"
        >
          Projects
        </Link>
        <ThemeSwitcher />
        {/* <span className="mr-10 cursor-pointer hover:text-purple-400 transition-all duration-300 ease-in-out">
          Blog
        </span>
        <span className="cursor-pointer hover:text-purple-400 transition-all duration-300 ease-in-out">
          About
        </span> */}
      </motion.div>
    </>
  );
};

export default NavigationScroll;
