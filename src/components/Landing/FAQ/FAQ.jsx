import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const faqs = [
    {
      question: "What services do we offer?",
      answer:
        "Mugen specializes in providing customized software solutions, including ERP implementations, custom dashboards, lead management systems, and HRMS systems tailored to enhance operational efficiency for businesses.",
    },
    {
      question: "How does Mugen tailor solutions to specific business needs?",
      answer:
        "Mugen works closely with clients to understand their unique challenges and requirements, then designs and implements solutions that address these needs, ensuring seamless integration and improved workflow.",
    },
    {
      question: `Can we help with managing multiple business entities?`,
      answer: `Yes, Mugen has experience in creating centralized and personalized dashboards that streamline operations, synchronize tasks, and manage multiple business entities efficiently.`,
    },
    {
      question: `What are the benefits of implementing Mugen's solutions?`,
      answer: `Clients experience enhanced operational efficiency, improved task coordination, and better decision-making capabilities, resulting in increased productivity and streamlined workflows.`,
    },
  ];
  return (
    <div className="px-5 sm:px-16 py-10 w-full">
      <div className="">
        <h1 className="text-3xl font-semibold pb-4 bg-gradient-to-r from-[#ff6868] to-[#cf68ff] text-transparent bg-clip-text">
          FAQ's
        </h1>
      </div>
      <div className="rounded-md overflow-hidden">
        {faqs.map((faq) => (
          <Question question={faq.question} answer={faq.answer} />
        ))}
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
    <div className="w-full bg-[#efefef] dark:bg-[#0F0E29] text-black dark:text-white overflow-hidden">
      <div
        onClick={toggle}
        className="h-auto py-5 sm:h-20 text-sm sm:text-base flex justify-start cursor-pointer items-center space-x-4 px-10 border-b-2 border-[#c8c8c8] dark:border-[#15143b]"
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
