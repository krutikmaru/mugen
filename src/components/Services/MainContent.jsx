import React, { useState, useEffect, useRef } from "react";
// import CardFlip from "./CardFlip";

import { motion } from "framer-motion";
import "animate.css";

const MainContent = ({ mainContent }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const firstIconRef = useRef();

  useEffect(() => {
    firstIconRef.current.focus();
  }, []);

  return (
    <div className="w-full h-full flex p-4 space-x-5 text-slate-100">
      <motion.div
        className="w-[40%] min-h-full bg-[#210c44] font-lexend-deca rounded-2xl 
        p-8 relative flex justify-center items-start text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <div>
          {mainContent.map((item, index) => (
            <div
              className={
                selectedTab === index ? " flex flex-col space-y-4 " : "hidden"
              }
              key={index}
            >
              {/* Heading */}
              <div
                className="bg-gradient-to-r from-[#FF0022] to-purple-600 text-transparent 
              bg-clip-text font-semibold text-3xl  animate_animated animate__flipInY"
              >
                {item.title}
              </div>

              {/* Modules */}
              <div className="">
                <div className="text-lg">Works well with Modules like: </div>
                <div className="flex flex-wrap ">
                  {item.modules.map((module, index) => (
                    <div
                      className="px-2 mx-1 mb-1 rounded-md border-purple-400 border-[1px]"
                      key={index}
                    >
                      {module}
                    </div>
                  ))}
                </div>
              </div>

              {/* Overview */}
              <p>{item.overview}</p>

              {/* Details */}
              <div className="flex flex-col space-y-4 text-xs">
                {item.details.map((detail, index) => (
                  <div
                    key={index}
                    className=" border-2 border-slate-700 rounded-lg flex py-2 pr-2"
                  >
                    <div className="flex justify-center items-center w-[25%] ">
                      <img src={detail.icon} className="w-10 h-10" alt="" />
                    </div>
                    <div className="w-[75%]">
                      <div className=" text-transparent bg-slate-400  from-red-500 to-purple-600 bg-clip-text text-lg">
                        {detail.title}
                      </div>
                      <div>{detail.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* <CardFlip/> */}
      </motion.div>
      <motion.div
        className=" w-[60%] h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <div className="flex flex-wrap justify-center items-center">
          {mainContent.map((item, index) => (
            <div>
              <button
                className="p-2 m-6 h-20 w-28 bg-[#ffffff23] rounded-lg  hover:bg-[#ffffff44] text-slate-400
             border-transparent border-2 transition-all duration-75 ease-in-out  focus:bg-[#ffffff52]
             focus:border-2 focus:border-white text-xs font-extralight flex flex-col items-center justify-center gap-2"
                key={index}
                ref={index === 0 ? firstIconRef : null}
                onClick={() => setSelectedTab(index)}
              >
                <img src={item.icon} alt="" className=" w-6 h-6" />
                {item.title}
              </button>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default MainContent;
