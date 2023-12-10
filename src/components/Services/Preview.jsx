import React from "react";
import { motion } from "framer-motion";

const Preview = ({ option, localHoverIndex }) => {
  return (
    <div className="flex flex-col items-center">
      <span className="font-lexend-deca text-white">{option.title}</span>
      {localHoverIndex ? (
        <motion.div
          animate={{ scale:1.2 }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
        >
          <img src={option.previewIcon} alt="" className=" w-44 h-44" />
        </motion.div>
      ) : (
        <img src={option.previewIcon} alt="" className=" w-44 h-44" />
      )}
    </div>
  );
};

export default Preview;
