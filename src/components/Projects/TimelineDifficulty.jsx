import React from "react";
import { motion } from "framer-motion";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";

const TimelineDifficulty = ({ project, variants }) => {
  let progressCol = "";
  let trackCol = "";
  if (project.difficulty.title.toLowerCase() === "high") {
    progressCol = "#ff3c20";
    trackCol = "#ffc6be";
  } else if (project.difficulty.title.toLowerCase() === "mid") {
    progressCol = "#d3ff19";
    trackCol = "#eeffa6";
  } else {
    progressCol = "#53fb5e";
    trackCol = "#e0fbe2";
  }
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="h-auto w-full flex flex-col justify-start items-center"
    >
      <motion.div
        variants={variants}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full h-auto mt-4 p-4  bg-[#fff] dark:bg-mugen-purple-navigation backdrop-blur-md border-2 border-[#c8c8c8] dark:border-[#131334] rounded-md overflow-hidden flex justify-center items-center flex-col"
      >
        <div className="w-44 h-44 bg-gradient-to-br flex justify-center items-center text-7xl font-semibold  from-violet-500 to-fuchsia-500 rounded-md">
          {project.timeline}
        </div>
        <span className="text-4xl mt-3 text-black dark:text-white">
          Timeline
        </span>
      </motion.div>
      <motion.div
        variants={variants}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full h-auto mt-4 p-4 bg-[#fff] dark:bg-mugen-purple-navigation backdrop-blur-md border-2 border-[#c8c8c8] dark:border-[#131334] rounded-md overflow-hidden flex justify-center items-center flex-col"
      >
        <div className="mb-3 rounded-md flex justify-center items-center">
          <CircularProgress
            value={project.difficulty.progress}
            color={progressCol}
            size="150px"
            trackColor={trackCol}
            className="text-red-400"
            capIsRound
          >
            <CircularProgressLabel className="text-black dark:text-white">
              {project.difficulty.title}
            </CircularProgressLabel>
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
