import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  return (
    <div className="px-16 py-10 w-full">
      <div className="">
        <h1 className="text-3xl font-semibold pb-4 bg-gradient-to-r from-[#ff6868] to-[#cf68ff] text-transparent bg-clip-text">
          FAQ's
        </h1>
      </div>
      <div>
        <Question
          question={"Question"}
          answer={` I can't say enough good things about Mugen. Their ERP solution
            has simplified our workflows and allowed us to focus on
            growing our business. From inventory management to financial
            reporting, Mugen has exceeded our expectations every step of
            the way. Thank you, Mugen, for helping us achieve our goals!`}
        />
      </div>
    </div>
  );
}

function Question({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  function toggle() {
    setIsOpen((prev) => !prev);
  }
  return (
    <div className="w-full bg-[#0F0E29]  rounded-lg overflow-hidden">
      <div
        onClick={toggle}
        className="h-20 flex justify-start cursor-pointer items-center space-x-4 px-10 border-b-2 border-[#15143b]"
      >
        {isOpen ? (
          <FontAwesomeIcon icon={faChevronUp} />
        ) : (
          <FontAwesomeIcon icon={faChevronDown} />
        )}
        <span>{question}</span>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex justify-start items-center px-10 py-10"
          >
            <motion.p>{answer}</motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
