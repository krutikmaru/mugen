import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PrefaceSectorIntegrations = ({ variants, project }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="h-auto lg:h-full w-full lg:w-[32%] flex flex-col justify-start items-center p-3 "
    >
      <motion.div
        variants={variants}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full h-auto lg:h-[35%] bg-mugen-purple-navigation backdrop-blur-md border-2 border-[#131334] rounded-md overflow-hidden p-4 flex flex-col items-start justify-start mb-3 "
      >
        <span className="bg-gradient-to-r from-[#db596a] to-fuchsia-500 text-transparent bg-clip-text font-semibold text-xl mb-2 leading-tight">
          {project.name}
        </span>
        <p className="text-sm text-gray-300">{project.description}</p>
      </motion.div>

      <motion.div
        variants={variants}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        className="w-full h-auto lg:h-[60%] bg-mugen-purple-navigation backdrop-blur-md border-2 border-[#131334] rounded-md overflow-hidden p-4"
      >
        <div>
          <div>
            <h1 className="ml-2 mb-2 text-xl">Sector</h1>
            {project.sector.map((s) => {
              return (
                <span className="px-4 py-1 text-xs rounded-full mr-2 mb-2 border-[1px] border-mugen-purple-white">
                  {s}
                </span>
              );
            })}
          </div>
        </div>
        <div>
          <h1 className="ml-2 mb-3 mt-6 text-xl">Integrations</h1>
          <div className="w-full flex justify-start items-center overflow-x-scroll pb-4">
            {project.integrations.map((integration) => {
              return (
                <div className="h-32 min-w-[128px] mr-5 p-5 bg-[#131334] rounded-md overflow-hidden flex flex-col justify-center items-center text-center">
                  <FontAwesomeIcon
                    icon={integration.icon}
                    className="text-4xl mb-2 text-fuchsia-400"
                  />
                  <span className="text-gray-200 text-sm">
                    {integration.title}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PrefaceSectorIntegrations;
