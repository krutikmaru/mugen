import React, { useState } from "react";
import { motion } from "framer-motion";
import { faL } from "@fortawesome/free-solid-svg-icons";

const CardFlip = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimate, setIsAnimate] = useState(false);

  const handleFlip = () => {
    if (!isAnimate) {
      setIsFlipped(!isFlipped);
      setIsAnimate(true);
    }
  };
  return (
    <div className="flex items-center justify-center bg-black h-full">
      <div className="flip-card w-full h-full " onClick={handleFlip}>
        <motion.div 
            className="flip-card-inner w-full h-full"
            initial={false}
            animate={{rotateY: isFlipped ? 180: 360}}
            transition={{duration:0.6, animationDirection:"normal"}}
            onAnimationComplete={()=> setIsAnimate(false)}
            >
                <div className="flip-card-front w-full h-full bg-cover border-1 text-white p-4 rounded-lg">
                    <h1>Manufacturing</h1>
                </div>
                <div className="flip-card-back w-full h-full bg-cover border-1 text-white p-4 rounded-lg">
                    <h1>Change</h1>
                </div>
            </motion.div>
      </div>
    </div>
  );
};

export default CardFlip;
