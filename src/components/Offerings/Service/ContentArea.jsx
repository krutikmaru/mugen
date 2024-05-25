import {
  faArrowLeft,
  faArrowRight,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function ContentArea() {
  return (
    <div className="w-full h-auto lg:w-[40%] lg:h-full flex flex-col justify-start items-center px-5">
      <NavigationBar />
      <Content />
    </div>
  );
}

function NavigationBar() {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const menuVariants = {
    hidden: {
      scale: 0,
      opacity: 0,
      transformOrigin: "top right",
    },
    visible: {
      scale: 1,
      opacity: 1,
      transformOrigin: "top right",
      transition: { type: "spring", stiffness: 500, damping: 30 },
    },
    exit: {
      scale: 0,
      opacity: 0,
      transition: { type: "spring", stiffness: 500, damping: 30 },
    },
  };
  const toggleMenu = () => setIsMenuActive((prevState) => !prevState);
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
      className="w-full h-16 flex items-center justify-between text-[#C985FF] text-sm"
    >
      <Link
        to="/"
        className="flex justify-between items-center space-x-2 font-medium"
      >
        <FontAwesomeIcon icon={faArrowLeft} />
        <span>Go Back</span>
      </Link>
      <motion.button
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        className="relative"
        onClick={toggleMenu}
      >
        <div className="flex font-semibold justify-center items-center space-x-2">
          <span>Mugen</span>
          {isMenuActive ? (
            <FontAwesomeIcon icon={faChevronUp} />
          ) : (
            <FontAwesomeIcon icon={faChevronDown} />
          )}
        </div>
        <AnimatePresence>
          {isMenuActive && (
            <motion.div
              initial="hidden"
              animate={isMenuActive ? "visible" : "hidden"}
              variants={menuVariants}
              exit="exit"
              className="rounded-md bg-[#0F0E29] absolute z-50 right-0 top-8"
            >
              <ul className="font-normal flex flex-col justify-center items-center text-[#B7B7B7] cursor-default">
                <li className="px-6 py-3 border-b-[1px] border-[#15143b] w-full cursor-default">
                  <Link to="/" className="hover:text-[#C985FF]">
                    Home
                  </Link>
                </li>
                <li className="px-6 py-3 w-full cursor-default">
                  <Link to="/projects" className="hover:text-[#C985FF]">
                    Projects
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </motion.div>
  );
}

function Content() {
  return (
    <div className="h-full w-full pt-8 flex flex-col-reverse lg:flex-col justify-start items-start">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
        id="content"
        className="h-auto lg:min-h-[400px] lg:max-h-[400px] mt-10 mb-0 lg:mb-4 lg:mt-0 flex flex-col justify-start items-start space-y-4"
      >
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col justify-start items-start space-y-4"
        >
          <span className="text-xs font-medium text-white">
            Business Success Software
          </span>
          <h1 className="text-7xl font-bold text-white tracking-tighter">
            What is it?
          </h1>
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
          className="text-base text-[#B7B7B7]"
        >
          <p>
            Business Success Software is a comprehensive suite of integrated
            tools designed to streamline and enhance various aspects of your
            business operations. This software includes modules for Enterprise
            Resource Planning (ERP), Customer Relationship Management (CRM),
            Project Management, Financial Management, Human Resources, and
            Inventory Management. By consolidating these critical functions into
            a single platform, Business Success Software helps small and
            medium-sized enterprises improve efficiency, reduce costs, and drive
            growth.
          </p>
        </motion.div>
      </motion.div>
      <ControlBar />
    </div>
  );
}

function ControlBar() {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1, ease: "easeOut" }}
      className="w-full h-auto flex flex-col justify-start items-start space-y-4"
    >
      <button className="flex items-center justify-between space-x-2 text-[#B7B7B7]">
        <span className="text-2xl font-medium tracking-tighter">Benefits</span>
        <FontAwesomeIcon className="text-xl" icon={faArrowRight} />
      </button>
      <div className="flex justify-center items-center space-x-2">
        <div className="h-2 w-5 bg-[#B352FF] border-1 border-[#8339BD] rounded-lg"></div>
        <div className="h-2 w-5 border border-[#8339BD] rounded-lg"></div>
        <div className="h-2 w-5 border border-[#8339BD] rounded-lg"></div>
        <div className="h-2 w-5 border border-[#8339BD] rounded-lg"></div>
      </div>
    </motion.div>
  );
}
