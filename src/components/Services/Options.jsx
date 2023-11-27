import React, { useEffect } from "react";
import MainContent from "./MainContent";
import Preview from "./Preview";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Options = ({ option, onClickIndex, index, activeIndex }) => {
  // const [ref, inView] = useInView({
  //   triggerOnce: true,
  // });

  // const animationVariants = {
  //   hidden: {
  //     y: 50, // Initial position (bottom)
  //     opacity: 0,
  //   },
  //   visible: {
  //     y: 0, // Final position (top)
  //     opacity: 1,
  //     transition: {
  //       duration: 0.6,
  //       ease: "easeInOut",
  //       delay: ({ index } + 1) * 0.07, // Adjust delay based on sequence
  //     },
  //   },
  // };

  const localClickIndex = onClickIndex === index;

  const localHoverIndex = activeIndex === index;

  // if(localHoverIndex){
  //   const hoverEffect = {

  //   }
  // }else{
  //   const hoverEffect = {}
  // }

  const sizeTransition = {
    transition: `width 300ms ease-in-out, height 300ms ease-in-out, transform 300ms ease-in-out`,
  };
  return (
    <motion.div
      // ref={ref}
      style={sizeTransition}
      className={`font-lexend-deca bg-[#FDFFFC] bg-gradient-to-r from-red-500 to-purple-400 h-[15rem] w-[15rem]  rounded-lg p-[1px]
        ${localClickIndex && localHoverIndex && "w-[80vw] h-[75vh] md:scale-95 "}
        ${localHoverIndex && " transform sm:scale-110 scale-100 "}
      
      `}
      // variants={animationVariants}
      // initial="hidden"
      // animate={inView ? "visible" : "hidden"}
    >
      <div className="bg-mugen-purple-dark rounded-lg h-full w-full flex justify-center items-center px-2">
      {localClickIndex ? (
        <MainContent mainContent={option.mainContent} localClickIndex={localClickIndex}/>
      ) : (
        <Preview option={option} localHoverIndex={localHoverIndex}/>
      )}
      </div>
    </motion.div>
  );
};

export default Options;
