import React from "react";
import { motion } from "framer-motion";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";

const TimelineDifficulty = ({ project, variants }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="h-auto lg:h-full w-full lg:w-[32%] flex flex-col justify-start items-center p-3"
    >
      <motion.div
        variants={variants}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full h-auto lg:h-[47%] p-4 mb-3 bg-mugen-purple-navigation backdrop-blur-md border-2 border-[#131334] rounded-md overflow-hidden flex justify-center items-center flex-col"
      >
        <div className="w-44 h-44 bg-gradient-to-br flex justify-center items-center text-7xl font-semibold  from-violet-500 to-fuchsia-500 rounded-md">
          {project.timeline}
        </div>
        <span className="text-4xl mt-3 text-white">Timeline</span>
      </motion.div>
      <motion.div
        variants={variants}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full h-auto lg:h-[47%] p-4 mb-3 bg-mugen-purple-navigation backdrop-blur-md border-2 border-[#131334] rounded-md overflow-hidden flex justify-center items-center flex-col"
      >
        <div className="mb-3 rounded-md flex justify-center items-center">
          <CircularProgress
            value={60}
            color="#8cb62a"
            size="150px"
            trackColor="#131334"
            capIsRound
          >
            <CircularProgressLabel>{project.difficulty}</CircularProgressLabel>
          </CircularProgress>
        </div>

        <span className="text-5xl mt-2 font-semibold bg-gradient-to-r from-[#db596a] to-fuchsia-500 text-transparent bg-clip-text">
          Difficulty
        </span>
      </motion.div>
    </motion.div>
  );
};

export default TimelineDifficulty;
