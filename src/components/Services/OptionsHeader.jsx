import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  faEnvelope,
  faIndustry,
  faLightbulb,
  faStore,
  faWarehouse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const OptionsHeader = () => {
  const options = [
    { id: "Option-1", icon: faIndustry, title: "Manufacturing" },
    { id: "Option-2", icon: faStore, title: "Retail" },
    { id: "Option-3", icon: faWarehouse, title: "Logistics" },
    { id: "Option-5", icon: faLightbulb, title: "Services" },
    { id: "Option-4", icon: faEnvelope, title: "General" },
  ];
  return (
    <div className="w-full flex items-center justify-start px-10 py-5 sm:justify-center space-x-5  overflow-x-scroll  scrollbar-hidden relative">
      {options.map((option, index) => {
        return (
          <Option key={option.id} sequence={index + 1} icon={option.icon} />
        );
      })}
    </div>
  );
};

const Option = ({ sequence, icon }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const animationVariants = {
    hidden: {
      y: 50, // Initial position (bottom)
      opacity: 0,
    },
    visible: {
      y: 0, // Final position (top)
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
        delay: 0.07 * sequence, // Adjust delay based on sequence
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className=" min-w-[80px] min-h-[80px] border-[1px] border-[#16163a] text-2xl text-mugen-purple-white cursor-pointer rounded-full overflow-hidden flex justify-center items-center hover:bg-mugen-purple-white hover:text-mugen-purple-dark transition-colors duration-300 ease-in-out"
      variants={animationVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <FontAwesomeIcon icon={icon} />
    </motion.div>
  );
};

export default OptionsHeader;
