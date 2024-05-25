import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

export default function ActionArea() {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
      className="w-full h-auto lg:w-[25%] lg:h-full flex flex-col md:flex-row lg:flex-col items-stretch justify-start space-y-2 md:space-y-0 md:space-x-2 lg:space-x-0 lg:space-y-2"
    >
      <GetServiceActionCard />
      <NextServiceActionCard />
    </motion.div>
  );
}

function GetServiceActionCard() {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.9, ease: "easeOut" }}
      className="w-full md:w-1/2 lg:w-full lg:h-1/2 px-6 py-10 bg-[#0F0E29] rounded-md flex justify-center items-center"
    >
      <div className="flex flex-col justify-start items-start space-y-4">
        <h3 className="text-xl text-[#C985FF] font-bold tracking-tighter">
          Transform Your Business Today!
        </h3>
        <p className="text-sm lg:text-xs tracking-tight">
          Boost your efficiency and streamline operations with our tailored
          Business Success Software solutions. Discover how our ERP, CRM, and
          other powerful tools can help you achieve your business goals.
        </p>
        <button className="text-sm lg:text-xs tracking-tight px-3 py-2 bg-[#B352FF] border border-[#8339BD] rounded-md flex justify-center items-center space-x-2">
          <span>Get Started</span>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </motion.div>
  );
}

function NextServiceActionCard() {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1, ease: "easeOut" }}
      className="w-full md:w-1/2 lg:w-full lg:h-1/2 px-6 py-6 lg:py-5 bg-[#0F0E29] rounded-md flex justify-center items-center"
    >
      <div className="flex flex-col justify-start items-start space-y-2 w-full h-full">
        <div className="w-full h-[250px] md:h-full rounded-md overflow-hidden relative">
          <img
            src="/assets/images/cloud.jpg"
            alt="Test"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <h3 className="text-xl font-bold tracking-tighter">Cloud & Dev Ops</h3>
        <button className="text-sm lg:text-xs tracking-tight font-medium text-[#C985FF] flex justify-center items-center space-x-2">
          <span>Next Service</span>
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </motion.div>
  );
}
