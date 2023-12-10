import React from "react";
import { motion } from "framer-motion";

const StackThirdParty = ({ project, variants }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="h-auto lg:h-full w-full lg:w-[32%] flex flex-col justify-start items-center p-3"
    >
      <motion.div
        variants={variants}
        transition={{ duration: 0.7, ease: "easeInOut", delay: 0.1 }}
        className="w-full h-auto lg:h-[95%] bg-mugen-purple-navigation backdrop-blur-md border-2 border-[#131334] rounded-md overflow-hidden p-3"
      >
        <div>
          <h1 className="ml-2 mb-3 text-xl mt-3">Stack</h1>
          <div className="w-full flex justify-start items-center overflow-x-scroll pb-4">
            {project.stack.map((s) => {
              console.log(s);
              return (
                <div className="h-32 min-w-[128px] mr-5 p-5 bg-[#131334] rounded-md overflow-hidden flex flex-col justify-center items-center text-center">
                  <div className="w-20 h-20  relative">
                    <img src={s.image} alt={s.title} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-6   ">
          <h1 className="ml-2 mb-4 text-xl">Third Party</h1>
          <div className="w-full lg:h-60 flex flex-col justify-start items-start pb-4 overflow-y-scroll overflow-x-hidden scrollbar-hidden">
            {project.thirdPart.map((thirdParty) => {
              return (
                <span className="px-4 py-2 text-lg w-full rounded-md mr-2 mb-2 border-[2px] border-[#56549630] bg-gradient-to-br from-fuchsia-500 to-fuchsia-700">
                  {thirdParty}
                </span>
              );
            })}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default StackThirdParty;
